import {autorun, extendObservable, toJS} from "mobx"

// source: https://gist.github.com/du5rte/dbd18a1a6dc72d866737a5e95ca1e663
export default function(_this) {
  let firstRun = true;

  // will run on change
  autorun(() => {
    // on load check if there's an existing store on localStorage and extend the store
    if (firstRun) {
      const existingStore = localStorage.getItem('store');

      if (existingStore) {
        extendObservable(_this, JSON.parse(existingStore))
      }
    }
    // from then on serialize and save to localStorage
    localStorage.setItem('store', JSON.stringify(toJS(_this)));
  });

  firstRun = false;
}
