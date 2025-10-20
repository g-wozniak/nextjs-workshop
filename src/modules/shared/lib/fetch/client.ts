import {ApiResponse} from '@/shared/types'
import {NotificationInstance} from 'antd/lib/notification/interface'

type RequestMethods = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'

export type ApiFetchResult<T> = {
   payload: ApiResponse<T>
   status: number
   headers: Headers
}

export async function clientFetch<T>(
   url: string,
   method: RequestMethods,
   payload: Record<string, any>
): Promise<ApiFetchResult<T>> {
   const canPassBody = method !== 'GET' && method !== 'DELETE'
   // Env.var here.
   const res = await fetch(`http://localhost:3000/${url}`, {
      method,
      headers: {
         Accept: 'application/json',
         'Content-Type': 'application/json',
         'Access-Control-Allow-Headers': 'http://localhost:3000'
      },
      ...(canPassBody && payload && {body: JSON.stringify(payload.payload)})
   })
   return {
      payload: (await res.json()) as ApiResponse<T>,
      status: res.status,
      headers: res.headers
   }
}

export function notifyOnError(notification: NotificationInstance, error: Error) {
   notification.error({
      message: 'Error',
      description: error.message
   })
}

export function notify(
   notification: NotificationInstance,
   res: ApiFetchResult<any>,
   successText?: string
) {
   if (res.status === 200 && successText) {
      notification.success({
         message: 'Success',
         description: successText
      })
   } else if (res.status !== 200) {
      console.log(res.payload)
      notification.error({
         message: 'Error',
         ...('message' in res.payload && {description: res.payload.message})
      })
   }
}
