import React from 'react';
import ProfileCard from './ProfileCard';
import {withRouter} from 'react-router-dom';
import {useStore} from '../store/storeConfig';


const ProfilePage = ({match}) => {
    const store = useStore();
    const id = match.params.id;
    const cat = store.getCat(id);

    // see: https://facebook.github.io/create-react-app/docs/using-the-public-folder
    return (!cat) ? null : (
        <ProfileCard imgSrc={`${process.env.PUBLIC_URL}/img/${cat.imgFile}`}
                     age={cat.age}
                     name={cat.name}
                     description={cat.description}/>
    )
};

export default withRouter(ProfilePage)
