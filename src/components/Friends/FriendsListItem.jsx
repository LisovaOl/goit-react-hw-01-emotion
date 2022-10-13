import PropTypes from 'prop-types';
// import css from './FriendsList.module.css';
import { FriendsItem, Status, Avatar, NameFriend } from './Friends.styled';

export default function FriendItem({ friends }) {
  // console.log(friends.isOnline);

  return (
    <FriendsItem>
      <Status online={friends.isOnline}></Status>
      <Avatar src={friends.avatar} alt={friends.name} width="50" />
      <NameFriend>{friends.name}</NameFriend>
    </FriendsItem>
  );
}

FriendItem.propTypes = {
  friends: PropTypes.shape({
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }),
};
