import {Investment} from '@/shared/dto/Investment'
import {getRandomID, getRandomUsername} from '@/shared/helpers/randomizer'
import {faker} from '@faker-js/faker/locale/en'
import {random} from 'lodash'
import moment from 'moment'

export const InvestmentEntity = (data: Partial<Investment> = {}): Investment => ({
   id: getRandomID(),
   username: getRandomUsername(),
   amount: random(100, 10000),
   investedAt: moment()
      .subtract(random(1, 60), faker.helpers.arrayElement(['minutes', 'hours']))
      .toDate(),
   fundId: data.fundId ?? getRandomID(),
   ...data
})
