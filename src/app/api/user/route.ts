import {UsersService} from '@/dashboard/server/services/users/users.service'
import {NextResponse} from 'next/server'

export const GET = async () => {
   const usersService = new UsersService()
   const user = await usersService.get('abc1234')

   // return NextErrorResponse(403, 'Forbidden')
   return NextResponse.json({
      data: user
   })
}
