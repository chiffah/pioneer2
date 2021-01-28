import React from 'react'
import styled from 'styled-components'
import BN from 'bn.js'
import { ButtonGhostMediumSquare } from '../../components/buttons/Buttons'
import { ArrowDownIcon } from '../../components/icons/ArrowDownIcon'
import { ArrowInsideIcon } from '../../components/icons/ArrowInsideIcon'
import { TransferButton } from '../../components/TransferButton'
import { AccountInfo } from '../../components/AccountInfo'
import { BorderRad, Colors, Transitions } from '../../constants'
import { useAccounts } from '../../hooks/useAccounts'
import { useBalances } from '../../hooks/useBalances'
import { TokenValue } from '../../components/TokenValue'

export function Accounts() {
  const { allAccounts, hasAccounts } = useAccounts()
  const balances = useBalances(allAccounts)

  if (!hasAccounts) return <Loading>Loading accounts...</Loading>

  const sendTo = allAccounts[allAccounts.length - 1]

  return (
    <MyProfile>
      <AccountPlaceholder>My profile</AccountPlaceholder>
      <AccountsBoard>
        <AccountsTabs>
          <AccountTab>All accounts</AccountTab>
        </AccountsTabs>
        <AccountsTable>
          <AccountsTableHeaders>
            <TableColumnTitle>Account</TableColumnTitle>
            <TableColumnTitle>Total balance</TableColumnTitle>
            <TableColumnTitle>Locked balance</TableColumnTitle>
            <TableColumnTitle>Recoverable balance</TableColumnTitle>
            <TableColumnTitle>Transferable balance</TableColumnTitle>
          </AccountsTableHeaders>
          <AccountsList>
            {allAccounts.map((account) => (
              <AccountItem key={account.address}>
                <AccountInfo account={account} />
                <AccountBalance>
                  <Balance value={balances.map[account.address]?.total} />
                </AccountBalance>
                <AccountBalance>
                  <TokenValue value={0} />
                </AccountBalance>
                <AccountBalance>
                  <TokenValue value={0} />
                </AccountBalance>
                <AccountBalance>
                  <Balance value={balances.map[account.address]?.total} />
                </AccountBalance>
                <AccountControls>
                  <ButtonInside>
                    <ArrowInsideIcon />
                  </ButtonInside>
                  <TransferButton from={account} to={sendTo} />
                  <ButtonApply>
                    <ArrowDownIcon />
                  </ButtonApply>
                </AccountControls>
              </AccountItem>
            ))}
          </AccountsList>
        </AccountsTable>
      </AccountsBoard>
    </MyProfile>
  )
}

interface Props {
  value: BN | undefined
}

export function Balance({ value }: Props) {
  return <>{value ? <TokenValue value={value} /> : '-'}</>
}

const MyProfile = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 46px auto;
  grid-template-areas:
    'profilesetings'
    'accountsboard';
  grid-row-gap: 16px;
  width: 100%;
`

const AccountPlaceholder = styled.section`
  display: flex;
  align-items: center;
  grid-area: profilesetings;
  font-size: 32px;
  line-height: 40px;
  font-weight: 900;
`

const AccountsBoard = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 20px auto;
  grid-template-areas:
    'accountstabs'
    'accountstable';
  grid-row-gap: 18px;
  width: 100%;
`

const AccountsTabs = styled.nav`
  display: flex;
  align-items: center;
  grid-area: accountstabs;
`

const AccountTab = styled.button`
  display: inline-flex;
  position: relative;
  align-items: center;
  width: fit-content;
  padding: 0;
  font-size: 14px;
  line-height: 20px;
  font-weight: 700;
  color: ${Colors.Black[900]};
  text-transform: capitalize;
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
  transition: ${Transitions.all};

  &:before {
    content: '';
    position: absolute;
    bottom: -2px;
    width: 100%;
    height: 2px;
    background-color: ${Colors.Blue[500]};
    transition: ${Transitions.all};
  }
`

const AccountsTable = styled.div`
  display: grid;
  grid-area: accountstable;
  grid-template-columns: 1fr;
  grid-template-rows: 16px auto;
  grid-template-areas:
    'accountstablenav'
    'accountslist';
  grid-row-gap: 6px;
  width: 100%;
`

const AccountsTableHeaders = styled.div`
  display: grid;
  grid-area: accountstablenav;
  grid-template-rows: 1fr;
  grid-template-columns: 236px 0.9fr 0.7fr 0.7fr 0.65fr 154px;
  grid-column-gap: 14px;
  width: 100%;
  padding-left: 16px;
`

const TableColumnTitle = styled.span`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  align-content: center;
  font-size: 10px;
  line-height: 16px;
  font-weight: 700;
  color: ${Colors.Black[400]};
  text-transform: uppercase;
  text-align: right;

  &:first-child {
    justify-content: flex-start;
    text-align: left;
  }
  &:last-child {
    position: relative;

    &:before {
      content: '';
      position: absolute;
      top: 8px;
      right: -15px;
      width: 4px;
      height: 4px;
      border: 1px solid ${Colors.Black[600]};
      border-left: 1px solid transparent;
      border-bottom: 1px solid transparent;
      transform: rotate(-45deg);
    }
  }
`

const AccountsList = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0;
  padding: 0;
  list-style: none;
`

const AccountItem = styled.li`
  display: grid;
  grid-template-columns: 236px 0.9fr 0.7fr 0.7fr 0.65fr 154px;
  grid-template-rows: 1fr;
  grid-column-gap: 14px;
  justify-items: end;
  align-items: center;
  width: 100%;
  height: 94px;
  padding: 16px 0 16px 14px;
  border: 1px solid ${Colors.Black[100]};
  border-radius: ${BorderRad.s};
`

const AccountBalance = styled.p`
  display: grid;
`

const AccountControls = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 40px);
  grid-template-rows: 40px;
  grid-column-gap: 8px;
`

const ButtonInside = styled(ButtonGhostMediumSquare)`
  svg {
    color: ${Colors.Black[900]};
  }
`
const ButtonApply = styled(ButtonGhostMediumSquare)`
  &,
  &:hover,
  &:focus,
  &:active,
  &:disabled {
    border: 1px solid transparent;
  }

  svg {
    color: ${Colors.Black[900]};
  }
`

const Loading = styled.div`
  font-size: 2em;
`