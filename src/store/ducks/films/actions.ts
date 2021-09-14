import { action } from 'typesafe-actions';
import { FilmsTypes, Film } from './types';

export const loadRequest = () => action(FilmsTypes.LOAD_REQUEST);

export const loadSuccess = (data: Film[]) => action(FilmsTypes.LOAD_SUCCESS, { data });

export const loadFailure = () => action(FilmsTypes.LOAD_FAILURE);