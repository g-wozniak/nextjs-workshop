import {FundEntity} from '@/dashboard/server/entities/Fund'
import {ISA_FUND_TYPES} from '@/dashboard/server/entities/partials/fundTypes'
import {Fund} from '@/shared/dto/Fund'
import {FundPerformance} from '@/shared/dto/FundPerformance'
import {factoryFromIterator} from '@/shared/helpers/randomizer'
import {fetchData} from '@/shared/helpers/simulator'
import {groupBy, maxBy} from 'lodash'
import moment from 'moment'
import {FundPerformanceEntity} from '../../entities/FundPerformance'

const historyDays = 6

export class FundsService {
   public readonly funds: Fund[] = []
   public readonly performance: FundPerformance[] = []

   constructor() {
      this.funds = factoryFromIterator(ISA_FUND_TYPES, (type) => FundEntity({type}))
      this.performance = this.funds.flatMap((fund) =>
         Array.from({length: historyDays}, (_, i) =>
            FundPerformanceEntity({
               fundId: fund.id,
               metricAt: moment().subtract(i, 'days').toDate()
            })
         )
      )
   }

   // List of all the funds we offer
   public async list() {
      return fetchData(this.funds, {
         minMs: 1000,
         maxMs: 2000,
         failureProbability: 0
      })
   }

   // List of the most popular among users
   public async listMostPopular() {
      return fetchData(this.funds.toSorted((a, b) => b.popularity - a.popularity).slice(0, 10), {
         minMs: 200,
         maxMs: 400,
         failureProbability: 0
      })
   }

   // List the fund performance with historical data
   public async listPerformance() {
      return fetchData(this.performance, {
         minMs: 200,
         maxMs: 400,
         failureProbability: 0
      })
   }

   // Get the most recent performance data of the funds
   // Data changes randomly, whenever recalculated by external process
   public async getCurrentPerformance() {
      const grouped = groupBy(this.performance, 'fundId')
      const latestPerformancePerFund = Object.values(grouped).map(
         (fundGroup) => maxBy(fundGroup, 'metricAt')!
      )
      return fetchData(latestPerformancePerFund, {
         minMs: 200,
         maxMs: 400,
         failureProbability: 0
      })
   }
}
