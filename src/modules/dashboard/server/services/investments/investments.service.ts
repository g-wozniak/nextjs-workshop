import {InvestmentEntity} from '@/dashboard/server/entities/Investment'
import {FundsService} from '@/dashboard/server/services/funds/funds.service'
import {Fund} from '@/shared/dto/Fund'
import {Investment} from '@/shared/dto/Investment'
import {fetchData} from '@/shared/helpers/simulator'
import {faker} from '@faker-js/faker/locale/en'
import {sampleSize} from 'lodash'

export class InvestmentsService {
   private readonly investments: Investment[] = []

   constructor(funds?: Fund[]) {
      const fundsList = funds ?? new FundsService().funds
      this.investments = this.generateInvestmentsForRandomFunds(fundsList, InvestmentEntity)
   }

   public list(): Promise<Investment[]> {
      return fetchData(this.investments, {
         minMs: 100,
         maxMs: 400,
         failureProbability: 0
      })
   }

   // Get the list of most recent user investments into funds
   // Data changes every several seconds
   public async listMostRecent(quantity: number = 30): Promise<Investment[]> {
      return fetchData(
         this.investments
            .toSorted((a, b) => b.investedAt.getTime() - a.investedAt.getTime())
            .slice(0, quantity),
         {
            minMs: 100,
            maxMs: 400,
            failureProbability: 0
         }
      )
   }

   // Get the most recent single investment
   // Data changes every several milliseconds
   public async getMostRecent(): Promise<Investment> {
      return fetchData(
         this.investments.reduce((latest, current) =>
            current.investedAt > latest.investedAt ? current : latest
         ),
         {
            minMs: 100,
            maxMs: 400,
            failureProbability: 0
         }
      )
   }

   private generateInvestmentsForRandomFunds = (
      fundsList: Fund[],
      InvestmentEntity: (data?: Partial<Investment>) => Investment
   ): Investment[] => {
      const totalFunds = fundsList.length
      const minFunds = Math.floor(totalFunds / 2)
      const numFunds = faker.number.int({min: minFunds, max: totalFunds})
      const selectedFunds = sampleSize(fundsList, numFunds)
      return selectedFunds.flatMap((fund) => [1, 2].map(() => InvestmentEntity({fundId: fund.id})))
   }
}
