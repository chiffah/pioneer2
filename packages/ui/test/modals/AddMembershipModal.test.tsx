import { ApiRx } from '@polkadot/api'
import { Keyring } from '@polkadot/ui-keyring/Keyring'
import { cryptoWaitReady } from '@polkadot/util-crypto'
import { fireEvent, render } from '@testing-library/react'
import BN from 'bn.js'
import { expect } from 'chai'
import { set } from 'lodash'
import React from 'react'
import { from, of } from 'rxjs'
import sinon from 'sinon'
import { Account } from '../../src/common/types'
import * as useAccountsModule from '../../src/hooks/useAccounts'
import { AddMembershipModal } from '../../src/modals/AddMembershipModal'
import { ApiContext } from '../../src/providers/api/context'
import { UseApi } from '../../src/providers/api/provider'
import { KeyringContext } from '../../src/providers/keyring/context'
import { selectAccount } from '../helpers/selectAccount'

import { aliceSigner, bobSigner, mockKeyring } from '../mocks/keyring'

describe('UI: AddMembershipModal', () => {
  before(cryptoWaitReady)

  const api: UseApi = {
    api: ({} as unknown) as ApiRx,
    isConnected: true,
  }
  let fromAccount: Account
  let to: Account
  let accounts: {
    hasAccounts: boolean
    allAccounts: Account[]
  }
  let transaction: any
  let query: any
  let keyring: Keyring

  beforeEach(() => {
    keyring = mockKeyring()
    fromAccount = {
      address: aliceSigner().address,
      name: 'alice',
    }
    to = {
      address: bobSigner().address,
      name: 'bob',
    }
    set(api, 'api.derive.balances.all', () =>
      from([
        {
          availableBalance: new BN(1000),
          lockedBalance: new BN(0),
        },
      ])
    )
    query = {}

    set(query, 'members.membershipPrice', () => of(set({}, 'toBn', () => new BN(100))))
    set(api, 'api.query', query)
    transaction = {}
    set(transaction, 'paymentInfo', () => of(set({}, 'partialFee.toBn', () => new BN(25))))
    set(api, 'api.tx.members.buyMembership', () => transaction)

    accounts = {
      hasAccounts: true,
      allAccounts: [fromAccount, to],
    }
    sinon.stub(useAccountsModule, 'useAccounts').returns(accounts)
  })

  afterEach(() => {
    sinon.restore()
  })

  it('Renders a modal', () => {
    const { getByText } = renderModal()

    expect(getByText('Add membership')).to.exist
    expect(getByText('Creation fee:')?.parentNode?.textContent).to.match(/^Creation fee:100/i)
  })

  it('Enables button when valid form', async () => {
    const { findByText, getByText, getByLabelText } = renderModal()

    const button = getByText(/^Create a membership$/i) as HTMLButtonElement
    expect(button.disabled).to.be.true

    selectAccount('Root account', 'bob', getByText)
    selectAccount('Controller account', 'alice', getByText)
    fireEvent.change(getByLabelText(/member name/i), { target: { value: 'Bobby Bob' } })
    fireEvent.change(getByLabelText(/membership handle/i), { target: { value: 'realbobbybob' } })
    fireEvent.click(getByLabelText(/I agree to our terms/i))

    expect(((await findByText(/^Create a membership$/i)) as HTMLButtonElement).disabled).to.be.false
  })

  it('Disables button when invalid avatar URL', async () => {
    const { findByText, getByText, getByLabelText } = renderModal()

    const button = getByText(/^Create a membership$/i) as HTMLButtonElement
    expect(button.disabled).to.be.true

    selectAccount('Root account', 'bob', getByText)
    selectAccount('Controller account', 'alice', getByText)
    fireEvent.change(getByLabelText(/member name/i), { target: { value: 'Bobby Bob' } })
    fireEvent.change(getByLabelText(/membership handle/i), { target: { value: 'realbobbybob' } })
    fireEvent.click(getByLabelText(/I agree to our terms/i))

    fireEvent.change(getByLabelText(/member avatar/i), { target: { value: 'avatar' } })
    expect(((await findByText(/^Create a membership$/i)) as HTMLButtonElement).disabled).to.be.true

    fireEvent.change(getByLabelText(/member avatar/i), { target: { value: 'http://example.com/example.jpg' } })
    expect(((await findByText(/^Create a membership$/i)) as HTMLButtonElement).disabled).to.be.false
  })

  context('Authorize step', () => {
    const renderAuthorizeStep = async () => {
      const rendered = renderModal()
      const { findByText, getByText, getByLabelText } = rendered

      selectAccount('Root account', 'bob', getByText)
      selectAccount('Controller account', 'alice', getByText)
      fireEvent.change(getByLabelText(/member name/i), { target: { value: 'Bobby Bob' } })
      fireEvent.change(getByLabelText(/membership handle/i), { target: { value: 'realbobbybob' } })
      fireEvent.change(getByLabelText(/about member/i), { target: { value: "I'm Bob" } })
      fireEvent.change(getByLabelText(/member avatar/i), { target: { value: 'http://example.com/example.jpg' } })
      fireEvent.click(getByLabelText(/I agree to our terms/i))

      fireEvent.click(await findByText(/^Create a membership$/i))

      return rendered
    }

    it('Renders authorize transaction', async () => {
      const { getByText, getByRole } = await renderAuthorizeStep()

      expect(getByText('Authorize transaction')).to.exist
      expect(getByText(/^Creation fee:/i)?.nextSibling?.textContent).to.equal('100')
      expect(getByText(/^Transaction fee:/i)?.nextSibling?.textContent).to.equal('25')
      expect(getByRole('heading', { name: /alice/i })).to.exist
    })

    context('Success', () => {
      beforeEach(() => {
        set(transaction, 'signAndSend', () =>
          from([
            set({}, 'status.isReady', true),
            {
              status: {
                isInBlock: true,
                asInBlock: {
                  toString: () => '0x93XXX',
                },
              },
            },
          ])
        )
      })

      it('Renders transaction success', async () => {
        const { getByText } = await renderAuthorizeStep()
        fireEvent.click(getByText(/^sign and create a member$/i))

        const byText = getByText('Success')
        console.log(byText.parentElement?.parentElement?.outerHTML)
        expect(byText).to.exist
        expect(getByText(/^bobby bob/i)).to.exist
        expect(getByText(/^realbobbybob/i)).to.exist
      })
    })
  })

  function renderModal() {
    return render(
      <KeyringContext.Provider value={keyring}>
        <ApiContext.Provider value={api}>
          <AddMembershipModal onClose={sinon.spy()} />
        </ApiContext.Provider>
      </KeyringContext.Provider>
    )
  }
})