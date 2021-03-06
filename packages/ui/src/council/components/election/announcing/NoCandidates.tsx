import React from 'react'

import { NoData } from '@/common/components/NoData'
import { TextMedium } from '@/common/components/typography'
import { AnnounceCandidacyButton } from '@/council/components/election/announcing/AnnounceCandidacyButton'

export const NoCandidates = () => (
  <NoData>
    <h3>There are no candidates yet</h3>
    <TextMedium>
      Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit
      mollit. Exercitation veniam consequat sunt nostrud amet.
    </TextMedium>
    <AnnounceCandidacyButton />
  </NoData>
)
