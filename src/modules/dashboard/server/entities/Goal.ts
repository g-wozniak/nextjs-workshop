import {getRandomBool, getRandomID} from '@/shared/helpers/randomizer'
import {faker} from '@faker-js/faker/locale/en'
import {random} from 'lodash'
import moment from 'moment'

export type Goal = {
   id: string
   name: string
   description: string
   target: number
   progress: number
   achieved: boolean
   achievedPercent: string
   achievedAt?: Date
}

export const GoalEntity = (data: Partial<Goal> = {}): Goal => {
   const achieved = getRandomBool()
   const target = random(10000, 20000)
   const progress = achieved ? random(target, target + 10000) : random(0, target)
   return {
      id: getRandomID(),
      name: faker.lorem.sentence(5),
      description: faker.lorem.paragraph(1),
      target,
      progress,
      achieved,
      achievedPercent: ((progress * 100) / target).toFixed(0),
      achievedAt: achieved ? moment().subtract(random(1, 5), 'days').toDate() : undefined
   }
}
