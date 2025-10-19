export async function call<T>(fn: () => Promise<T>): Promise<[T | null, Error | null]> {
   try {
      const result = await fn()
      return [result, null]
   } catch (err) {
      return [null, err as Error]
   }
}
