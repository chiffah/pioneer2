import { cryptoWaitReady } from '@polkadot/util-crypto'
import { render, screen, waitForElementToBeRemoved, within } from '@testing-library/react'
import { createMemoryHistory } from 'history'
import React from 'react'
import { Route, Router } from 'react-router-dom'

import { ProposalPreview } from '@/app/pages/Proposals/ProposalPreview'
import { seedMember, seedProposal } from '@/mocks/data'
import { ProposalsRoutes } from '@/proposals/constants/routes'

import { MockQueryNodeProviders } from '../../_mocks/providers'
import { setupMockServer } from '../../_mocks/server'
import { MEMBER_ALICE_DATA, PROPOSAL_DATA } from '../../_mocks/server/seeds'

describe('ProposalPreview', () => {
  const mockServer = setupMockServer()

  beforeAll(cryptoWaitReady)

  beforeEach(() => {
    seedMember(MEMBER_ALICE_DATA, mockServer.server)
    seedProposal(PROPOSAL_DATA, mockServer.server)
  })

  it('Loading', async () => {
    renderPage()

    expect(await screen.findByRole('heading', { name: 'Loading...' })).toBeDefined()
  })

  it('Proposal loaded', async () => {
    renderPage()

    await waitForElementToBeRemoved(() => screen.getByRole('heading', { name: 'Loading...' }))

    expect(await screen.findByRole('heading', { name: PROPOSAL_DATA.title })).toBeDefined()

    expect(await screen.findByText('Deciding')).toBeDefined()

    expect(await screen.findAllByText(/(?:Approval|Slashing) (?:Quorum|Threshold)/)).toHaveLength(4)

    expect(await screen.findByRole('heading', { name: 'Update Working Group Budget' })).toBeDefined()

    expect(await screen.findByRole('heading', { name: 'Rationale' })).toBeDefined()

    expect(await screen.findByRole('heading', { name: 'Discussion' })).toBeDefined()

    const sideBar = await screen.findByRole('complementary')
    expect(sideBar).toBeDefined()

    const proposerSection = (await within(sideBar).findByText('Proposer')).parentElement as HTMLElement
    expect(proposerSection).toBeDefined()
    expect(await within(proposerSection).findByText(MEMBER_ALICE_DATA.handle)).toBeDefined()

    expect(await within(sideBar).findByText('History')).toBeDefined()

    for (const name of ['Approved', 'Rejected', 'Slashed', 'Abstained', 'Not Voted']) {
      expect(await within(sideBar).findByRole('heading', { name })).toBeDefined()
    }
  })

  function renderPage() {
    const history = createMemoryHistory()
    history.push(`${ProposalsRoutes.preview}/0`)

    render(
      <Router history={history}>
        <MockQueryNodeProviders>
          <Route path={`${ProposalsRoutes.preview}/:id`}>
            <ProposalPreview />
          </Route>
        </MockQueryNodeProviders>
      </Router>
    )
  }
})