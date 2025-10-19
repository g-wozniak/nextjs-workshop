import { useDesignLibrary } from "@/modules/shared/hooks/useDesignLibrary"
import { useQuery } from "@tanstack/react-query"
import {clientFetch, notify, notifyOnError} from '@/shared/lib/fetch'
import {User} from '@/shared/dto/User'

export const GetUserRequest = async (
   args?: any
) => {
   return clientFetch<User>('api/user', 'GET', {})
}


export function useUserQuery() {
   const {notification} = useDesignLibrary()
   return useQuery({
      queryKey: ['GetUser'],
      retry: 0,
      staleTime: 60,
      refetchOnMount: 'always',
      refetchOnReconnect: 'always',
      refetchOnWindowFocus: false,
      enabled: true,
      queryFn: () => {
         return GetUserRequest()
            .then((res) => {
               notify(notification, res)
               return res.payload.data || {}
            })
            .catch((err: unknown) =>
               notifyOnError(notification, err as Error)
            )
      }
   })
}
