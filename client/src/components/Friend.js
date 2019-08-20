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
        <Link className='link' to={`/friends/${friend.id}`}>
            <div className='friend-card'>
                <h3>{friend.name}</h3>
                <p>age: {friend.age}</p>
                <p>{friend.email}</p>
                <button onClick={handleClick}>Unfriend</button>
            </div>
        </Link>
    )
}