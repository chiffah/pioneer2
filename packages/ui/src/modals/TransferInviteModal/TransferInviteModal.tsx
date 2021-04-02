import BN from 'bn.js'
import React, { useEffect, useState } from 'react'
import { useGetMemberQuery } from '../../api/queries'
import { Account, BaseMember, ModalState } from '../../common/types'
import { TransferIcon } from '../../components/icons'
import { useModal } from '../../hooks/useModal'
import { TransferInvitesModalCall } from './index'
import { SignTransferModal } from './SignTransferModal'
import { TransferDetailsModal } from './TransferDetailsModal'
import { TransferFailureModal } from './TransferFailureModal'
import { TransferSuccessModal } from './TransferSuccessModal'
import { WaitModal } from '../WaitModal'
import { useTransferInviteFee } from '../../hooks/useTransferInviteFee'
import { RequirementFailedModal } from './RequirementFailedModal'

export function TransferInviteModal() {
  const { hideModal, modalData } = useModal<TransferInvitesModalCall>()
  const { data, loading } = useGetMemberQuery({ variables: { id: modalData.memberId } })
  const [step, setStep] = useState<ModalState>('REQUIREMENTS_CHECK')
  const [amount, setAmount] = useState<BN>(new BN(0))
  const [targetMember, setTargetMember] = useState<BaseMember>()
  const [signer, setSigner] = useState<Account>()
  const transactionFeeInfo = useTransferInviteFee(data?.membership as BaseMember)

  useEffect(() => {
    if (step === 'REQUIREMENTS_CHECK' && transactionFeeInfo) {
      setStep(transactionFeeInfo.canAfford ? 'PREPARE' : 'REQUIREMENTS_FAIL')
    }
  }, [transactionFeeInfo])

  const onAccept = (amount: BN, from: BaseMember, to: BaseMember, signer: Account) => {
    setAmount(amount)
    setTargetMember(to)
    setSigner(signer)
    setStep('AUTHORIZE')
  }

  const onDone = (result: boolean) => {
    setStep(result ? 'SUCCESS' : 'ERROR')
  }

  if (loading || !data?.membership) {
    return null
  }

  if (step === 'REQUIREMENTS_CHECK') {
    return <WaitModal onClose={hideModal} title="Loading..." description="" />
  }

  if (step === 'REQUIREMENTS_FAIL' && transactionFeeInfo) {
    return (
      <RequirementFailedModal
        onClose={hideModal}
        address={data.membership.controllerAccount}
        amount={transactionFeeInfo.transactionFee}
      />
    )
  }

  if (step === 'PREPARE' || !targetMember || !signer) {
    return (
      <TransferDetailsModal onClose={hideModal} onAccept={onAccept} icon={<TransferIcon />} member={data.membership} />
    )
  }

  if (step === 'AUTHORIZE') {
    return (
      <SignTransferModal
        onClose={hideModal}
        sourceMember={data.membership}
        targetMember={targetMember}
        signer={signer}
        amount={amount}
        onDone={onDone}
      />
    )
  }

  if (step === 'SUCCESS') {
    return <TransferSuccessModal onClose={hideModal} recipient={targetMember} amount={amount} />
  }

  return <TransferFailureModal onClose={hideModal} />
}