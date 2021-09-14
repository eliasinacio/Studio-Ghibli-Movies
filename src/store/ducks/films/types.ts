/* Action types */
export enum FilmsTypes {
  LOAD_REQUEST = '@films/LOAD_REQUEST',
  LOAD_SUCCESS = '@films/LOAD_SUCCESS',
  LOAD_FAILURE = '@films/LOAD_FAILURE'
}

/* Data type */
export interface Film {
  id: string,
  title: string,
  original_title: string,
  original_title_romanised: string,
  description: string,
  director: string,
  release_date: string,
  running_time: string
}

/* Reducer/Redux State type */
export interface FilmsState {
  readonly data: Film[],
  readonly loading: boolean,
  readonly error: boolean
}