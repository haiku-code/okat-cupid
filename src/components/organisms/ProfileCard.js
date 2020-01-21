import React from 'react';
import {Link as RouterLink} from 'react-router-dom';
import './ProfileCard.css';
import {Button} from '../atoms';
import IconButton from '../atoms/IconButton';

const ProfileCard = ({imgSrc, id, name, age, description, toggleFavorite, short = false, favorite = false}) => {
  const CardActionButton = (
    (short && id)
      ?
      <RouterLink to={`/profile/${id}`}>
        <Button>See full profile</Button>
      </RouterLink>
      :
      <RouterLink to="/">
        <Button>Back</Button>
      </RouterLink>
  );

  return (
    <div className="Card">
      <div className="Card-content">
        <img
          className={(short) ? 'Card-image-small' : 'Card-image-large'}
          src={imgSrc}
          title={name}
          alt="Profile"
        />
        <div>
          <p>
            {name}
          </p>
          <p>
            {(short) ? description.substr(0, 50) + '...' : description}
          </p>
          {!short && age &&
          <p>
            Age: {age}
          </p>
          }
        </div>
      </div>
      <div>
        {CardActionButton}
        <IconButton.Toggle onClick={toggleFavorite}
                           isOn={favorite}
                           onClass="star"
                           OffClass="star_border"
                           wrapperClass="favorite-button"/>
      </div>
    </div>
  )
};

export default ProfileCard;
