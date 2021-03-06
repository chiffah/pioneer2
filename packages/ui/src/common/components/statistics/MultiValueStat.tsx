import BN from 'bn.js'
import React from 'react'
import styled from 'styled-components'

import { TextInlineBig, TextBig } from '@/common/components/typography'
import { Fonts } from '@/common/constants'
import { plural } from '@/common/helpers'
import { formatTokenValue } from '@/common/model/formatters'
import { toNumber } from '@/common/utils'

import { StatisticItem, StatisticItemProps, StatisticItemSpacedContent, StatisticLabel } from './StatisticItem'
import { TotalValue } from './TokenValueStat'

interface LabelledValue {
  label: string
  type?: 'token' | 'blocks'
  value?: BN | number | null
}

interface MultiTokenValueStatProps extends StatisticItemProps {
  values: LabelledValue[]
}

export const MultiValueStat = ({ title, values }: MultiTokenValueStatProps) => (
  <MultiStatisticItem title={title}>
    {values.map(({ label, value, type = 'token' }) => (
      <StatisticItemSpacedContent key={label}>
        <StatisticLabel>{label}</StatisticLabel>
        <StatisticValue type={type} value={value} />
      </StatisticItemSpacedContent>
    ))}
  </MultiStatisticItem>
)

const StatisticValue = ({ type, value }: Omit<LabelledValue, 'label'>) => {
  switch (type) {
    case 'blocks':
      return (
        <BlocksValue>
          {formatTokenValue(value)} <TextInlineBig lighter>block{plural(toNumber(value))}</TextInlineBig>
        </BlocksValue>
      )

    case 'token':
    default:
      return <TotalValue value={value} />
  }
}

export const MultiStatisticItem = styled(StatisticItem)<{ moreInnerSpace?: boolean }>`
  padding: ${({ moreInnerSpace }) => (moreInnerSpace ? '12px 16px 4px' : '12px 16px 16px')};
`

const BlocksValue = styled(TextBig)`
  font-family: ${Fonts.Grotesk};
`
