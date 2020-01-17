import React from 'react';
import {Link as RouterLink} from 'react-router-dom';
import './ProfileCard.css';

const ProfileCard = ({imgSrc, id, name, age, description, short = false}) => {
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
            {(short) ? description.substr(0, 60) + '...' : description}
          </p>
          {!short && age &&
          <p>
            Age: {age}
          </p>
          }
        </div>
      </div>
      <div>
        {
          short && id &&
          <RouterLink to={`/profile/${id}`}>
            <button>
              See full profile
            </button>
          </RouterLink>
        }
      </div>
    </div>
  )
};

export default ProfileCard;
