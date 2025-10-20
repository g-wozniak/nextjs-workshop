/*

import {FundsService} from '@/dashboard/server/services/funds/funds.service'
import {User} from '@/shared/dto/User'
import {call} from '@/shared/lib/call'
import {serverFetch} from '@/shared/lib/fetch'
import {cache} from 'react'
import {FundsTable} from '@/dashboard/client/components/FundsTable'

const getCachedFunds = cache(async () => {
   const funds = new FundsService()
   return await call(() => funds.list())
})

export async function FundsSection() {
   const [funds, error] = await getCachedFunds()
   const [user, error2] = await serverFetch<User>('/api/user')

   if (error) {
      return <p>{error.message}</p>
   }

   if (!funds) {
      return <p>No data</p>
   }

   return (
      <FundsTable></FundsTable>
   )
}
*/
