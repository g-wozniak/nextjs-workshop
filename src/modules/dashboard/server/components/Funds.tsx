'use server'

import {FundsTable} from '@/dashboard/client/components/FundsTable'
import {FundsService} from '@/dashboard/server/services/funds/funds.service'
import {call} from '@/shared/lib/call'
import React, {cache} from 'react'

const getCachedFunds = cache(async () => {
   const funds = new FundsService()
   return await call(() => funds.list())
})

export async function FundsSection() {
   const [funds, error] = await getCachedFunds()
   if (error) {
      return <p>{error.message}</p>
   }

   return (
      <div style={{ padding: '0 30px' }}>
         <FundsTable data={funds ?? []} />
      </div>
   )
}
