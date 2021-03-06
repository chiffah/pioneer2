import React from 'react'

import { NoData } from '@/common/components/NoData'
import { TextMedium } from '@/common/components/typography'

import { AddProposalButton } from '../AddProposalButton'

export const NoProposals = () => (
  <NoData>
    <h3>There are no current proposals yet</h3>
    <TextMedium>
      Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit
      mollit. Exercitation veniam consequat sunt nostrud amet.
    </TextMedium>
    <AddProposalButton />
  </NoData>
)
