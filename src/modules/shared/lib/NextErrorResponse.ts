import {NextResponse} from 'next/server'

export const NextErrorResponse = (code: number, message: string) => {
   return NextResponse.json(
      {
         message
      },
      {
         status: code
      }
   )
}
