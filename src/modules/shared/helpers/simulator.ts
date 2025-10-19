import {random} from 'lodash'

type FetchDataOpts = {
   minMs: number
   maxMs: number
   failureProbability: number
}

export const fetchData = async <T>(
   data: T,
   opts: FetchDataOpts = {
      minMs: 100,
      maxMs: 200,
      failureProbability: 0
   }
): Promise<T> => {
   const delay = random(opts.minMs, opts.maxMs)
   const isFailure = Math.random() < (opts.failureProbability ?? 0)
   return new Promise<T>((resolve, reject) => {
      setTimeout(() => {
         if (isFailure) {
            reject(new Error('Unable to return data. Something went wrong.'))
         } else {
            resolve(data)
         }
      }, delay)
   })
}
