import {ISA_FUND_TYPES} from '@/dashboard/server/entities/partials/fundTypes'
import {RISKS} from '@/dashboard/server/entities/partials/risks'
import {Fund} from '@/shared/dto/Fund'
import {getRandomID, getRandomPercentage} from '@/shared/helpers/randomizer'
import {faker} from '@faker-js/faker/locale/en'
import {upperFirst} from 'lodash'

export const FundEntity = (data: Partial<Fund> = {}): Fund => ({
   id: getRandomID(),
   name: getRandomFundName(),
   description: faker.lorem.paragraph(1),
   type: faker.helpers.arrayElement(ISA_FUND_TYPES),
   risk: faker.helpers.arrayElement(RISKS),
   popularity: getRandomPercentage(),
   ...data
})

function getRandomFundName() {
   return `${upperFirst(faker.company.buzzAdjective())} ${upperFirst(faker.company.buzzAdjective())} ${upperFirst(faker.company.buzzAdjective())} Fund`
}
