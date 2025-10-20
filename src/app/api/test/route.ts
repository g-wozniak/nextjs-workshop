import {FundsService} from '@/dashboard/server/services/funds/funds.service'
import {NextResponse} from 'next/server'

export const GET = async () => {
   const funds = new FundsService()
   return NextResponse.json({
      data: await funds.list()
   })
}
