import {decorate, observable} from 'mobx';

class RootStore {
  cats = [];

  constructor() {
  }
}

export default decorate(RootStore, {
  cats: observable,
});
