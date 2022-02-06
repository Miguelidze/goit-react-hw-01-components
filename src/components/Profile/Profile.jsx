import PropTypes from 'prop-types';
import styled from './Profile.module.css';

const Profile = ({ username, tag, location, avatar, stats }) => {
    return (
        <div className={styled.profile}>
            <div className={styled.description}>
                <img
                    src={avatar}
                    alt="User avatar"
                    className={styled.avatar}
                />
                <p className={styled.name}>{username}</p>
                <p className={styled.tag}>{tag}</p>
                <p className={styled.location}>{location}</p>
            </div>

            <ul className={styled.stats}>
                <li>
                    <span className={styled.label}>Followers</span>
                    <span className={styled.quantity}>{stats.folowers}</span>
                </li>
                <li>
                    <span className={styled.label}>Views</span>
                    <span className={styled.quantity}>{stats.views}</span>
                </li>
                <li>
                    <span className={styled.label}>Likes</span>
                    <span className={styled.quantity}>{stats.likes}</span>
                </li>
            </ul>
        </div>
    )
};

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.objectOf(PropTypes.number).isRequired,
};

export default Profile