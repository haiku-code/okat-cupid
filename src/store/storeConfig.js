import React from 'react'
import RootStore from './root.store';

const store = new RootStore();
const storeContext = React.createContext(null);

export const StoreProvider = ({children}) => {
  return <storeContext.Provider value={store}>{children}</storeContext.Provider>
};


export const useStore = () => {
  const store = React.useContext(storeContext);
  if (!store) {
    // this is especially useful in TypeScript so you don't need to be checking for null all the time
    throw new Error('useStore must be used within a StoreProvider.')
  }
  return store
};


if(process.env.NODE_ENV === 'development') {
  window['store'] = store;
}
