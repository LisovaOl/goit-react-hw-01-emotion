import PropTypes from 'prop-types';
// import css from './User.module.css'
import {
  Profile,
  Description,
  UserName,
  UserTag,
  UserLocation,
  Stats,
  Label,
  Quantity,
} from './User.styled';

export default function UserProfile({ name, tag, avatar, location, stats }) {
  return (
    <Profile>
      <Description>
        <img src={avatar} alt={tag} width="100px" />
        <UserName>{name}</UserName>
        <UserTag>@{tag}</UserTag>
        <UserLocation>{location}</UserLocation>
      </Description>

      <Stats>
        <li>
          <Label>Followers</Label>
          <Quantity>{stats.followers}</Quantity>
        </li>
        <li>
          <Label>Views</Label>
          <Quantity>{stats.views}</Quantity>
        </li>
        <li>
          <Label>Likes</Label>
          <Quantity>{stats.likes}</Quantity>
        </li>
      </Stats>
    </Profile>
  );
}

UserProfile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
