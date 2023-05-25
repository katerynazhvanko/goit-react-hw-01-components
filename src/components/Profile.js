import PropTypes from 'prop-types';

const Profile = ({
  avatar,
  username,
  tag,
  location,
  followers,
  views,
  likes,
}) => {
  return (
    <div class="profile">
      <div class="description">
        <img src={avatar} alt={username} class="avatar" />
        <p class="name">{username}</p>
        <p class="tag">@{tag}</p>
        <p class="location">{location}</p>
      </div>
      <ul class="stats">
        <li>
          <span class="label"></span>
          <span class="quantity">{followers}</span>
        </li>
        <li>
          <span class="label"></span>
          <span class="quantity">{views}</span>
        </li>
        <li>
          <span class="label"></span>
          <span class="quantity">{likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};

export default Profile;
