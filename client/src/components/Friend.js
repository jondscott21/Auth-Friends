import React from 'react';
import {deleteFriend} from '../actions';
import {useDispatch} from 'react-redux';
import { Link } from 'react-router-dom';

export default function Friend({friend}) {
    const dispatch = useDispatch()
    const handleClick = () => {
        dispatch(deleteFriend(friend.id))
    }

    return (
        <div className='friend-card'>
            <Link className='link' to={`/friends/${friend.id}`}>
                <h3>{friend.name}</h3>
                <p>age: {friend.age}</p>
                <p>{friend.email}</p>
            </Link>
            <button onClick={handleClick}>Unfriend</button>
        </div>
    )
}