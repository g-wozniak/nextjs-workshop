import {UserEntity} from '@/dashboard/server/entities/User'

export class UsersService {
   // Get current user profile
   public async get(id: string) {
      return UserEntity({
         id
      })
   }
}
