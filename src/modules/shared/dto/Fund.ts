import {Risk} from '@/shared/dto/Risk'

export type Fund = {
   id: string
   name: string
   description: string
   type: string
   risk: Risk
   popularity: number
}
