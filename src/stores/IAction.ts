/**
 * https://github.com/acdlite/flux-standard-action
 */
export default interface IAction<T> {
  type: string;
  payload?: T;
  error?: boolean;
  meta?: any;
}
