import {faker} from '@faker-js/faker/locale/en'
import {random} from 'lodash'

export const getRandomID = () => {
   return random(10000, 1000000).toString(16)
}

export const getRandomUsername = () => {
   return faker.internet.username().replaceAll('_', '').replaceAll('-', '').replaceAll('.', '')
}

export const getRandomPercentage = () => {
   return random(0, 100)
}

export const getRandomBool = () => {
   const num = faker.number.int({min: 0, max: 1})
   return num === 0
}

export const getRandomInterestRate = () => {
   return Number(random(0.1, 9.9, true).toFixed(1))
}

export const factory = <T>(
   quantity: number,
   generator: (data?: Partial<T>) => T,
   data?: Partial<T>
): T[] => {
   return Array.from({length: quantity}, () => generator(data))
}

export const factoryFromIterator = <T, R>(
   items: T[],
   generator: (item: T, index: number) => R,
   quantityPerItem = 1
): R[] => {
   return items.flatMap((item, index) =>
      Array.from({length: quantityPerItem}, () => generator(item, index))
   )
}
