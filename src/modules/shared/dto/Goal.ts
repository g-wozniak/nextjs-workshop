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
