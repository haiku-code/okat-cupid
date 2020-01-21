import {action, computed, decorate, observable} from 'mobx';
import {fetchCats} from '../services/data.service';
import autoSave from './autoSave';

class RootStore {
  cats = [];
  favoriteMode = false;

  constructor() {
    // save to / get from local storage
    autoSave(this);

    // init store
    if(this.cats.length === 0) {
      fetchCats().then(data => {
        data.forEach(c => c.favorite = false);
        this.cats = data
      });
    }
  }

  get displayAbleCats() {
    return this.favoriteMode ? this.cats.filter(c => c.favorite) : this.cats;
  }

  getCat = (id) => {
    return this.cats.find(c => c.id === id);
  };

  toggleFavoriteMode = () => {
    this.favoriteMode = !this.favoriteMode;
  };

  toggleCatFavorite = (id) => {
    const cat = this.getCat(id);
    cat.favorite = !cat.favorite;
  };
}

export default decorate(RootStore, {
  cats: observable,
  favoriteMode: observable,
  displayAbleCats: computed,
  toggleCatFavorite: action,
  toggleFavoriteMode: action,
});
