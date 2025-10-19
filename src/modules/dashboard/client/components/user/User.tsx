'use client'

import {useUserQuery} from '@/dashboard/client/hooks/useUserQuery'

export default function User() {
   const userRequest = useUserQuery()
   return <div>{userRequest.data?.firstName}</div>
}
