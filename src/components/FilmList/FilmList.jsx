import React from 'react';
import FilmListItem from '../FilmListItem';
// import styles from './FilmList.module.css';

function FriendList({ friend }) {
    const map = friend.map((item) => <FilmListItem {...item} key={item.id} />)
    return (<>
        <ul >
            {map}
        </ul>
    </>)
};

export default FriendList;

