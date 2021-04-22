import { Member } from '../../memberships/types'

import rawMembers from './raw/members.json'

export type MockMember = Member & {
  registeredAtBlockId: string
  invitedById?: string
  registeredAtTime: string
}

export const mockMembers: MockMember[] = rawMembers.map((rawMember) => {
  return {
    ...rawMember,
    roles: [],
  }
})

export const seedMember = (
  member: Member & { registeredAtBlockId: string; invitedById?: string; registeredAtTime: string },
  server: any
) => {
  const temporary: any = { ...member }

  if (temporary.invitedById) {
    // TODO: Mirage: The membership model has multiple possible inverse associations for the membership.invitedBy association.
    // temporary.invitedBy = membersMap.get(temporary.invitedById)
    delete temporary.invitedById
  }

  return server.schema.create('Membership', {
    ...temporary,
  })
}

export const seedMembers = (server: any) => {
  mockMembers.map((member) => seedMember(member, server))
}