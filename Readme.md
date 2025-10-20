# NextJS rendering workshop

### Oct, 2025

#### Author: Gregory Wozniak

## Getting Started

First, run the development server:

```bash
yarn && yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## How to call the Backend?

To make the workshop more productive and maximise fun, below there are a few examples on how to call the BE. You can use any technique you want but no need to create your own connectors etc.

### Backend responses

If you create your own route, it's easiest to use this response format:

```ts
   return NextResponse.json({
      data: {...}
   })
```

#### Returning errors in route.ts

It's easily possible in API routes using:

```ts
return NextErrorResponse(403, 'Your laptop is not working!')
```

That directly maps to the connectors allowing you to take control over displaying the message.

### 1. Backend request using fetch()

```ts
const [user, error] = await serverFetch<User>('/api/user')
console.log(user.data)
```

_Note_: You need to create your own API routes (route.ts).

### 2. Direct Backend call with React Cache and error support

```ts
const getCachedFunds = cache(async () => {
   const funds = new FundsService()
   return await call(() => funds.list())
})
```

You can use `<Suspense>` at the parent level to provide UI Graceful Degradation

### 3. Client request to the Backend using fetch()

```ts
// Create a hook in /modules/dashboard/client/hooks
// For example: useUserQuery()

export function useUserQuery() {
   const {notification} = useDesignLibrary()
   return useQuery({
      queryKey: ['GetUser'],
      retry: 0,
      staleTime: 60,
      refetchOnMount: 'always', // make sure this is adjusted to what you need
      refetchOnReconnect: 'always', // make sure this is adjusted to what you need
      refetchOnWindowFocus: false, // make sure this is adjusted to what you need
      enabled: true, // make sure this is adjusted to what you need
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

// Call the hook in your client component (anywhere)
export default function User() {
   const userRequest = useUserQuery()
   return <div>{userRequest.data?.firstName}</div>
}
```

More documentation on React Query - https://tanstack.com/query/v5/docs/framework/react/guides/queries.

_Note_: The response always contains `{data: {...}}` object (type: `ApiResponse`). You need to create your own API routes (route.ts).

## Notes

For simplicity - entities have the same type as returned operations.
