import {FundPerformance} from '@/shared/dto/FundPerformance'
import {getRandomID, getRandomInterestRate} from '@/shared/helpers/randomizer'
import {random} from 'lodash'
import moment from 'moment'

export const FundPerformanceEntity = (data: Partial<FundPerformance> = {}): FundPerformance => {
   return {
      id: getRandomID(),
      metricAt: moment().subtract(random(1, 6), 'days').toDate(),
      fundId: getRandomID(),
      invested: random(10000, 10000000),
      roi: getRandomInterestRate(),
      investors: random(100, 1000),
      withdrawals: random(0, 500),
      ...data
   }
}
