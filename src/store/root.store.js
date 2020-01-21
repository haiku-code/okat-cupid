import {action, computed, decorate, observable} from 'mobx';
import {fetchCats} from '../services/data.service';

class RootStore {
  cats = [];
  favoriteMode = false;

  constructor() {
    // init store
    fetchCats().then(data => {
      data.forEach(c => c.favorite = false);
      this.cats = data
    });
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
