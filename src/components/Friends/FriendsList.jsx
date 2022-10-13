import PropTypes from 'prop-types';
import FriendsListItem from './FriendsListItem';
// import css from './FriendsList.module.css'
import { Container, FriendsList, Item } from './Friends.styled';

export default function FriendList({ friends }) {
  return (
    <Container>
      <FriendsList>
        {friends.map(friend => (
          <Item key={friend.id}>
            <FriendsListItem friends={friend} />
          </Item>
        ))}
      </FriendsList>
    </Container>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};
