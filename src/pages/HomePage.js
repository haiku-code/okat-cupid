import React, {useCallback} from 'react';
import Grid from '../components/atoms/Grid';
import ProfileCard from '../components/organisms/ProfileCard';
import {useFormInput} from '../hooks/useFormInput.hook';
import {useStore} from '../store/storeConfig';
import {observer} from 'mobx-react-lite';
import IconButton from '../components/atoms/IconButton';
import Searchbox from '../components/molecules/Searchbox';

const HomePage = () => {
  const store = useStore();
  // see: https://facebook.github.io/create-react-app/docs/using-the-public-folder
  const textFilter = useFormInput('');
  const filteredCats = store.displayAbleCats.filter(c => {
    // get text filter value in lower case
    const value = textFilter.value.toString().toLocaleLowerCase();
    // compare filter to name and description
    return c.name.toLocaleLowerCase().includes(value) || c.description.toLocaleLowerCase().includes(textFilter.value)
  });

  const clearFilter = useCallback(() => {
    textFilter.onChange('');
  }, [textFilter]);

  const toggleFavorite = useCallback((id) => {
    store.toggleCatFavorite(id);
  }, [store]);

  const toggleFavoriteMode = useCallback(() => {
    store.toggleFavoriteMode();
  }, [store]);

  return (
    <>
      <p>
        <b>Search: </b>
        <Searchbox textProps={textFilter} clear={clearFilter}/>
        {
          <IconButton.Toggle onClick={toggleFavoriteMode}
                             isOn={store.favoriteMode}
                             onClass="star"
                             OffClass="star_border"
                             wrapperClass="favorite-button"/>
        }
      </p>
      <Grid.Container>
        {
          filteredCats.map((c) => (
            <Grid.Item key={c.id}>
              <ProfileCard imgSrc={`${process.env.PUBLIC_URL}/img/${c.imgFile}`}
                           id={c.id}
                           name={c.name}
                           description={c.description}
                           favorite={c.favorite}
                           toggleFavorite={toggleFavorite.bind(null, c.id)}
                           short={true}/>
            </Grid.Item>
          ))
        }
      </Grid.Container>
    </>
  )
};

export default observer(HomePage);
