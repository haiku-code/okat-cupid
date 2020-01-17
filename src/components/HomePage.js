import React from 'react';
import Grid from './Grid';
import ProfileCard from './ProfileCard';

const HomePage = ({cats}) => {
  // see: https://facebook.github.io/create-react-app/docs/using-the-public-folder
  return (
    <Grid.Container>
      {
        cats.map((c) => (
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
  )
};

export default HomePage;
