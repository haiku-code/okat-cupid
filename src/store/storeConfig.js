import React from 'react'
import RootStore from './root.store';

const store = new RootStore();
const storeContext = React.createContext(store);  // store as default value

export const StoreProvider = ({children}) => {
  // if value not provided to storeContext - it will use the default value
  return <storeContext.Provider>{children}</storeContext.Provider>
};


export const useStore = () => {
  const store = React.useContext(storeContext);
  if (!store) {
    // this is especially useful in TypeScript so you don't need to be checking for null all the time
    throw new Error('useStore must be used within a StoreProvider.')
  }
  return store
};
