import PropTypes from 'prop-types';
import FriendsListItem from './FriendsListItem'
import css from './FriendsList.module.css'

export default function FriendList({ friends }) {
  return (
    <div className={css.friend}>
      <ul className={css.friend_list}>
        {friends.map(friend => (
          <li className={css.item}  key={friend.id}>
            <FriendsListItem friends={friend} />
          </li>
        ))}
      </ul>
    </div>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
  }),),
}