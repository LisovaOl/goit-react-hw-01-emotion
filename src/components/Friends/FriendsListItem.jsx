import PropTypes from 'prop-types';
import css from './FriendsList.module.css';

export default function FriendItem({ friends }) {
  // console.log(friends.isOnline);

  return (
    <div className={css.friends_item}>
      <span
        className={css.status}
        style={{ backgroundColor: friends.isOnline ? 'green' : 'red' }}
      >
        {friends.isOnline}
      </span>
      <img
        className={css.avatar}
        src={friends.avatar}
        alt={friends.name}
        width="50"
      />
      <p className={css.name}>{friends.name}</p>
    </div>
  );
}

FriendItem.propTypes = {
  friends: PropTypes.shape({
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }),
};
