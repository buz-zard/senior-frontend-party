import storage from '~/storage';

import {TOKEN_STORAGE_KEY} from './constants';


export const setSession = token => storage.set(TOKEN_STORAGE_KEY, token);

export const removeSession = () => storage.remove(TOKEN_STORAGE_KEY);

export const getToken = () => storage.get(TOKEN_STORAGE_KEY);

export const isActuallyAuthenticated = () => {
  const token = getToken();
  return token != null && token !== '';
};
