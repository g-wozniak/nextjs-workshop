'use server'

import {FundsService} from '@/dashboard/server/services/funds/funds.service'
import {call} from '@/shared/lib/call'
import {cache} from 'react'

const getCachedFunds = cache(async () => {
   const funds = new FundsService()
   return await call(() => funds.list())
})

export async function FundsSection() {
   const [funds, error] = await getCachedFunds()

   if (error) {
      return <p>{error.message}</p>
   }

   if (!funds) {
      return <p>No data</p>
   }

   return (
      <>
         {funds.map((f) => (
            <div key={f.id}>{JSON.stringify(f)}</div>
         ))}
      </>
   )
}
