import { Meta, Story } from '@storybook/react'
import React from 'react'
import { MemoryRouter } from 'react-router'

import { MockApolloProvider } from '@/mocks/components/storybook/MockApolloProvider'
import { RolesList, RolesListProps } from '@/working-groups/components/Roles/RolesList'
import { getReward } from '@/working-groups/model/getReward'

export default {
  title: 'WorkingGroup/RolesList',
  component: RolesList,
} as Meta

const Template: Story<RolesListProps> = (args) => (
  <MemoryRouter>
    <MockApolloProvider>
      <RolesList {...args} />
    </MockApolloProvider>
  </MemoryRouter>
)

export const Default = Template.bind({})
Default.args = {
  workers: [
    {
      id: '0',
      runtimeId: 1,
      group: { id: '0', name: 'forum' },
      membership: { id: '0', controllerAccount: '5GNJqTPyNqANBkUVMN1LPPrxXnFouWXoe2wNSmmEoLctxiZY' },
      status: 'WorkerStatusActive',
      reward: getReward(1, 'forum'),
      stake: 1000,
      isLead: false,
      owedReward: 1000,
    },
  ],
}
