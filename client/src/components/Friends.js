import React, { useEffect, useState } from 'react';
import Friend from './Friend';
import { useSelector, useDispatch } from 'react-redux';
import { getAllFriends, addFriends } from '../actions' 

export default function Friends() {
    const friends = useSelector(state => state.friends)
    const [newFriend, setNewFriend] = useState({name: '', age: '', email: ''})
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllFriends())
    }, [])

    const handleChange = (e) => {
        setNewFriend({
            ...newFriend, [e.target.name]: e.target.value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addFriends(newFriend))
    }

    return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type='text' name="name" value={newFriend.username} placeholder='Name' onChange={handleChange} ></input>
            <input type='text' name="age" value={newFriend.age} placeholder='Age' onChange={handleChange} ></input>
            <input type='email' name="email" value={newFriend.email} placeholder='Email' onChange={handleChange} ></input>
            <button>Add Friend</button>
        </form>
        <h1>Friends!</h1>
        {friends && friends.map(friend => <Friend key={friend.id} friend={friend} />)}
    </div>
    )
}