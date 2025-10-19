import {Goal} from '@/shared/dto/Goal'
import {factory} from '@/shared/helpers/randomizer'
import {GoalEntity} from '@/dashboard/server/entities/Goal'
import {fetchData} from '@/shared/helpers/simulator'

export class GoalsService {

   private readonly goals: Goal[]

   constructor() {
      this.goals = factory(10, GoalEntity)
   }

   // List sales team goals
   public async list() {
      return fetchData(this.goals, {
         minMs: 100,
         maxMs: 400,
         failureProbability: 0
      })
   }

   // Updates the fulfilment when transfer occurs
   public async update() {
      // To be implemented
   }
}
