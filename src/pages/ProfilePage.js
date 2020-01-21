import React, {useCallback} from 'react';
import ProfileCard from '../components/organisms/ProfileCard';
import {withRouter} from 'react-router-dom';
import {useStore} from '../store/storeConfig';
import {observer} from 'mobx-react-lite';


const ProfilePage = ({match}) => {
    const store = useStore();
    const id = match.params.id;
    const cat = store.getCat(id);

    const toggleFavorite = useCallback((id) => {
        store.toggleCatFavorite(id);
    }, [store]);

    // see: https://facebook.github.io/create-react-app/docs/using-the-public-folder
    return (!cat) ? null : (
      <ProfileCard imgSrc={`${process.env.PUBLIC_URL}/img/${cat.imgFile}`}
                   age={cat.age}
                   name={cat.name}
                   favorite={cat.favorite}
                   toggleFavorite={toggleFavorite.bind(null, cat.id)}
                   description={cat.description}/>
    )
};

export default withRouter(observer(ProfilePage));
