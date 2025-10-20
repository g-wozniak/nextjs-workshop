import {TransferEntity} from '@/dashboard/server/entities/Transfer'
import {Transfer} from '@/shared/dto/Transfer'
import {factory} from '@/shared/helpers/randomizer'
import {fetchData} from '@/shared/helpers/simulator'

export class TransfersService {
   public readonly transfers: Transfer[]

   constructor() {
      this.transfers = factory(1000, TransferEntity)
   }

   // List all transfers made today
   public async list(quantity: number): Promise<Transfer[]> {
      return fetchData(this.transfers.slice(0, quantity), {
         minMs: 100,
         maxMs: 400,
         failureProbability: 0
      })
   }

   // Get the most recent transfer
   public async getMostRecent(): Promise<Transfer> {
      return fetchData(
         this.transfers.reduce((latest, current) =>
            current.eventAt > latest.eventAt ? current : latest
         ),
         {
            minMs: 100,
            maxMs: 400,
            failureProbability: 0
         }
      )
   }
}
