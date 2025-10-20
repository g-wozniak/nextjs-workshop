import {ApiResponse} from '@/shared/types'

type Opts = {
   cache?: RequestCache
   opts?: NextFetchRequestConfig
}
export async function serverFetch<T>(url: string, {cache, opts}: Opts = {}) {
   try {
      const res = await fetch(`http://localhost:3000/${url}`, {
         cache,
         next: opts
      })

      if (!res.ok) {
         const message = await safeReadError(res)
         return [null, message]
      }

      const data = (await res.json()) as ApiResponse<T>
      return [data, null]
   } catch (err) {
      const error = err instanceof Error ? err : new Error('Unknown fetch error')
      return [null, error.message]
   }
}

async function safeReadError(res: Response): Promise<string> {
   try {
      const body = await res.json()
      return 'message' in body.data ? body.message : 'Unknown error'
   } catch {
      return res.statusText || 'Unknown error'
   }
}
