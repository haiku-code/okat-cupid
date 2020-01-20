import React, {useCallback} from 'react';
import Grid from './Grid';
import ProfileCard from './ProfileCard';
import {useFormInput} from '../hooks/useFormInput.hook';
import {useStore} from '../store/storeConfig';

const HomePage = () => {
  const store = useStore();
  // see: https://facebook.github.io/create-react-app/docs/using-the-public-folder
  const textFilter = useFormInput('');
  const filteredCats = store.cats.filter(c => {
    // get text filter value in lower case
    const value = textFilter.value.toString().toLocaleLowerCase();
    // compare filter to name and description
    return c.name.toLocaleLowerCase().includes(value) || c.description.toLocaleLowerCase().includes(textFilter.value)
  });

  const clearFilter = useCallback(() => {
    textFilter.onChange('');
  }, [textFilter]);

  return (
    <>
      <p>
        <b>Search: </b><input {...textFilter}/>
        {
          (textFilter.value) &&
          <span className="clear-button">
            <i className="material-icons cursor-pointer" onClick={clearFilter}>clear</i>
          </span>
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
                           short={true}/>
            </Grid.Item>
          ))
        }
      </Grid.Container>
    </>
  )
};

export default HomePage;
