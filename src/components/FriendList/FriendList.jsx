import PropTypes from 'prop-types';
import css from './FriendList.module.css';

export const FriendList = ({friends}) => {
    return <ul className={css.friendlist}>
        {friends.map(({avatar, name, isOnline, id}) => (
            <li className={css.item} key={id} id={id}>
            <span className={css.status}>{isOnline ? 'Online' : 'Ofline'}</span>
            <img className={css.avatar} src={avatar} alt={name} width="48" />
            <p className={css.name}>{name}</p>
          </li>
        ))}
  </ul>
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
    }).isRequired).isRequired,
};