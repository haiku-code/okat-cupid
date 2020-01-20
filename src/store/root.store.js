import {action, decorate, observable} from 'mobx';
import {fetchCats} from '../services/data.service';

class RootStore {
  cats = [];

  constructor() {
    // init store
    fetchCats().then(data => {
      data.forEach(c => c.favorite = false);
      this.cats = data
    });
  }

  getCat = (id) => {
    return this.cats.find(c => c.id === id);
  };

  toggleCatFavorite = (id) => {
    const cat = this.getCat(id);
    cat.favorite = !cat.favorite;
  };
}

export default decorate(RootStore, {
  cats: observable,
  toggleCatFavorite: action,
});
