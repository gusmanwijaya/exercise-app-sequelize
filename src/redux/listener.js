import store from './store';
import {storeData} from '../utils/asyncStorage';

const listener = () => {
  const accessTokenOnGlobalState = store.getState().sessionReducers.accessToken;

  if (accessTokenOnGlobalState && accessTokenOnGlobalState !== '') {
    storeData('access-token', accessTokenOnGlobalState);
  }
};

const listen = () => {
  store.subscribe(listener);
};

export {listen};
