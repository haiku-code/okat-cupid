import React from 'react';
import {Link as RouterLink} from 'react-router-dom';
import './ProfileCard.css';

const ProfileCard = ({imgSrc, id, name, age, description, toggleFavorite, short = false, favorite = false}) => {
  const CardActionButton =  (
    (short && id)
      ?
      <RouterLink to={`/profile/${id}`}>
        <button>See full profile</button>
      </RouterLink>
      :
      <RouterLink to="/">
        <button>Back</button>
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
        <span className="favorite-button">
          <i className="material-icons cursor-pointer" onClick={toggleFavorite}>{favorite ? 'star' : 'star_border'}</i>
        </span>
      </div>
    </div>
  )
};

export default ProfileCard;
