import {decorate, observable} from 'mobx';
import {fetchCats} from '../services/data.service';

class RootStore {
  cats = [];

  constructor() {
    // init store
    fetchCats().then(data => this.cats = data);
  }

  getCat = (id) => {
    return this.cats.find(c => c.id === id);
  };
}

export default decorate(RootStore, {
  cats: observable,
});
