import React, { useEffect } from 'react';
import { getOneFriend } from '../actions';
import { useDispatch, useSelector } from 'react-redux';
import {deleteFriend} from '../actions';

export default function OneFriend(props) {

    const friend = useSelector(state => state.friend)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getOneFriend(props.match.params.id))
    }, [])

    const handleClick = () => {
        dispatch(deleteFriend(friend.id))
    }
    return (
        <div>
            <h3>{friend && friend.name}</h3>
            <p>age: {friend && friend.age}</p>
            <p>{friend && friend.email}</p>
            <button onClick={handleClick}>Unfriend</button>
        </div>
    )
}