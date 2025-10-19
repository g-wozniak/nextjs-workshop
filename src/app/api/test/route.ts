import {FundsService} from '@/dashboard/server/services/funds/funds.service'

export const GET = async () => {
   const funds = new FundsService()
   return await funds.list()
}
