import PropTypes from 'prop-types';
import styled from '../FriendList/FriendList.module.css';
import FriendListItem from '../FriendListItem/FriendListItem';

const FriendList = ({ friends }) => {
    return (
        <ul className={styled.friendList}>{
            friends.map(friend => (
                <FriendListItem
                    key={friend.id}
                    name={friend.name}
                    isOnline={friend.isOnline}
                    avatar={friend.avatar}
                />
            ))
        }
        </ul>
    )
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
        }),
    ),
}

export default FriendList