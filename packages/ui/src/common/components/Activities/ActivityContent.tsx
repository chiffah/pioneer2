import React from 'react'

import { ApplicationWithdrawnContent } from '@/working-groups/components/Activities/ApplicationWithdrawnContent'
import { AppliedOnOpeningContent } from '@/working-groups/components/Activities/AppliedOnOpeningContent'
import { BudgetSetContent } from '@/working-groups/components/Activities/BudgetSetContent'
import { BudgetSpendingContent } from '@/working-groups/components/Activities/BudgetSpendingContent'
import { LeaderSetContent } from '@/working-groups/components/Activities/LeaderSetContent'
import { StatusTextChangedContent } from '@/working-groups/components/Activities/StatusTextChangedContent'

import { Activity } from '../../types'

interface Props {
  activity: Activity
}

export const ActivityContent = React.memo(({ activity }: Props) => {
  switch (activity.eventType) {
    case 'AppliedOnOpeningEvent':
      return <AppliedOnOpeningContent activity={activity} />
    case 'BudgetSpendingEvent':
      return <BudgetSpendingContent activity={activity} />
    case 'ApplicationWithdrawnEvent':
      return <ApplicationWithdrawnContent activity={activity} />
    case 'BudgetSetEvent':
      return <BudgetSetContent activity={activity} />
    case 'LeaderSetEvent':
      return <LeaderSetContent activity={activity} />
    case 'StatusTextChangedEvent':
      return <StatusTextChangedContent activity={activity} />
    default:
      return <div />
  }
})