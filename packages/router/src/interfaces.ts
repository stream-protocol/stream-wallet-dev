export interface Result {
  /**
   * NOTE: If `error` is of type `{ module:string; code: number; message: string }`,
   * it should be considered and processed as `StreamError`.
   */
  error?: string | { module: string; code: number; message: string };
  return?: any;
}
