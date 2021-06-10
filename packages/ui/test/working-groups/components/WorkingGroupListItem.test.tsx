import { cryptoWaitReady } from '@polkadot/util-crypto'
import { render, screen, waitForElementToBeRemoved } from '@testing-library/react'
import React from 'react'
import { MemoryRouter } from 'react-router'

import { seedApplication, seedMembers, seedOpening, seedOpeningStatuses, seedWorker } from '@/mocks/data'
import { seedWorkingGroups } from '@/mocks/data/mockWorkingGroups'
import { WorkingGroupListItem } from '@/working-groups/components/WorkingGroupListItem'
import { WorkingGroup } from '@/working-groups/types'

import { MockKeyringProvider, MockQueryNodeProviders } from '../../_mocks/providers'
import { setupMockServer } from '../../_mocks/server'
import { APPLICATION_DATA, OPENING_DATA, WORKER_DATA } from '../../_mocks/server/seeds'

describe('WorkingGroupListItem', () => {
  const mockServer = setupMockServer()

  let group: WorkingGroup

  beforeAll(async () => {
    await cryptoWaitReady()
  })

  beforeEach(() => {
    seedMembers(mockServer.server)
    seedWorkingGroups(mockServer.server)
    seedOpeningStatuses(mockServer.server)

    group = (mockServer.server?.schema.first('WorkingGroup')?.attrs as unknown) as WorkingGroup
  })

  it('Loading', () => {
    renderElement(group)

    expect(screen.getAllByText('-').length).toBe(2)
  })

  describe('Loaded', () => {
    it('Openings count', async () => {
      seedOpening(OPENING_DATA, mockServer.server)
      seedOpening(OPENING_DATA, mockServer.server)
      seedOpening({ ...OPENING_DATA, status: 'cancelled' }, mockServer.server)

      renderElement(group)

      await waitForElementToBeRemoved(() => screen.getAllByText('-')[1])

      expect(screen.getByText('2')).toBeDefined()
    })
    it('Workers count', async () => {
      seedOpening(OPENING_DATA, mockServer.server)
      seedApplication(APPLICATION_DATA, mockServer.server)
      seedWorker({ ...WORKER_DATA, id: '0', groupId: 0, status: 'active' }, mockServer.server)
      seedWorker({ ...WORKER_DATA, id: '1', groupId: 0, status: 'active' }, mockServer.server)
      seedWorker({ ...WORKER_DATA, id: '2', groupId: 0, status: 'left' }, mockServer.server)

      renderElement(group)

      await waitForElementToBeRemoved(() => screen.getAllByText('-')[0])

      expect(screen.getByText('2')).toBeDefined()
    })
  })

  function renderElement(group: WorkingGroup) {
    render(
      <MemoryRouter>
        <MockQueryNodeProviders>
          <MockKeyringProvider>
            <WorkingGroupListItem group={group} />
          </MockKeyringProvider>
        </MockQueryNodeProviders>
      </MemoryRouter>
    )
  }
})