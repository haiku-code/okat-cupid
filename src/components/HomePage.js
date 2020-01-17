import React from 'react';
import Grid from './Grid';
import ProfileCard from './ProfileCard';
import {useFormInput} from '../hooks/useFormInput.hook';

const HomePage = ({cats}) => {
  // see: https://facebook.github.io/create-react-app/docs/using-the-public-folder
  const textFilter = useFormInput('');
  const filteredCats = cats.filter(c => {
    // get text filter value in lower case
    const value = textFilter.value.toString().toLocaleLowerCase();
    // compare filter to name and description
    return c.name.toLocaleLowerCase().includes(value) || c.description.toLocaleLowerCase().includes(textFilter.value)
  });

  return (
    <>
      <b>Search: </b><input {...textFilter}/>
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
