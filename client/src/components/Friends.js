import React, { useEffect, useState } from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth'

export default function Friends() {
    const [friends, setFriends] = useState([]);
    useEffect(() => {
        axiosWithAuth().get('http://localhost:5000/api/friends')
        .then(res => {
            console.log(res.data);
            setFriends(friends => [...friends, res.data])
        })
    }, [])
    console.log(friends)
    return (
    <div>
        <h1>Friends!</h1>
    </div>
    )
}