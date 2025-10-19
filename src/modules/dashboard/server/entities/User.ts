import {getRandomID, getRandomUsername} from '@/shared/helpers/randomizer'
import {random} from 'lodash'
import moment from 'moment'
import {faker} from '@faker-js/faker/locale/en'
import {User} from '@/shared/dto/User'

export const UserEntity = (data: Partial<User> = {}): User => {
   return {
      id: getRandomID(),
      username: getRandomUsername(),
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      createdAt: moment().subtract(random(1, 6), 'months').toDate()
   }
}
