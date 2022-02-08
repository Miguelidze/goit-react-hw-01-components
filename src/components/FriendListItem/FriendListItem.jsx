import PropTypes from 'prop-types';
import styled from '../FriendListItem/FriendListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
        <li className={styled.item}>
            <span className={(!isOnline ? styled.statusOff : styled.statusOn)}></span>
            <img className={styled.avatar} src={avatar} alt={"User avatar"} width="48" />
            <p className={styled.name}>{name}</p>
        </li>
    )
}
FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;