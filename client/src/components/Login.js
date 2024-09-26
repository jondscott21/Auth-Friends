import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { sendLogin } from '../actions'

const Login = (props) => {
    const [login, setLogin] = useState({username: 'jon', password: 'qwerty'})
    const dispatch = useDispatch()

    const handleChange = (e) => {
        setLogin({
            ...login, [e.target.name]: e.target.value
        })
       

    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        // axios.post('http://localhost:5000/api/login', login)
        // .then(res => {
        //     console.log(res.data);
        //     localStorage.setItem('token', res.data.payload);
        //     props.history.push('/friends');
        // })
        // .catch(err => {
        //     console.log(err);
        // })
        dispatch(sendLogin({login, props}))
        props.history.push('/friends');
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type='text' name ='username' onChange={handleChange} value={login.username} placeholder='Name'></input>
            <input type='password' name ='password' onChange={handleChange} value={login.password} placeholder='Password'></input>
            <button>Log In</button>
        </form>
    )
}

export default Login;