import {Transfer} from '@/shared/dto/Transfer'
import {getRandomID} from '@/shared/helpers/randomizer'
import {faker} from '@faker-js/faker/locale/en'
import {random} from 'lodash'
import moment from 'moment/moment'

export const TransferEntity = (data: Partial<Transfer> = {}): Transfer => {
   const toCushon = random(1, 10) >= 6 // 6/10 are incoming
   const employees = random(1, 200)
   const amounts = Array.from({length: employees}, () => random(10, 100_000))
   const total = amounts.reduce((sum, amt) => sum + amt, 0)
   return {
      id: getRandomID(),
      transferFrom: toCushon ? faker.company.name() : 'Cushon',
      transferTo: toCushon ? 'Cushon' : faker.company.name(),
      amount: total,
      employees,
      outgoing: !toCushon,
      eventAt: moment().subtract(random(1, 600), 'hours').toDate(),
      ...data
   }
}
