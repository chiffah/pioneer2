import React from 'react'
import styled from 'styled-components'

import { ButtonGhost, ButtonsGroup } from '@/common/components/buttons'
import { Arrow } from '@/common/components/icons'
import { ModalFooter, ModalHeader, Modal, ModalBody, ScrolledModalContainer } from '@/common/components/Modal'
import { CandidateCard } from '@/council/components/election/CandidateCard/CandidateCard'
import { CandidateWithDetails } from '@/council/types'

interface CandidacyThumbnailPreviewProps {
  candidate: CandidateWithDetails
  closeModal: () => void
}

export const CandidacyThumbnailPreview = ({ candidate, closeModal }: CandidacyThumbnailPreviewProps) => {
  return (
    <PreviewModal onClose={closeModal} modalSize="l" modalHeight="l">
      <ModalHeader onClick={closeModal} title="Candidacy Thumbnail Preview" />
      <ModalBody>
        <ScrolledModalContainer>
          <CandidateCard
            id="0"
            member={candidate.member}
            title={candidate.title}
            infolist={candidate.description}
            stake={candidate.stake}
            isPreview
          />
        </ScrolledModalContainer>
      </ModalBody>
      <ModalFooter>
        <ButtonsGroup align="right">
          <ButtonGhost size="medium" onClick={closeModal}>
            <Arrow direction="left" />
            Close
          </ButtonGhost>
        </ButtonsGroup>
      </ModalFooter>
    </PreviewModal>
  )
}

const PreviewModal = styled(Modal)`
  margin: auto;
`
