import axios from 'axios';
import {axiosWithAuth} from '../utils/axiosWithAuth'

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const FETCH_FRIENDS_START = 'FETCH_FRIENDS_START';
export const FETCH_FRIENDS_SUCCESS = 'FETCH_FRIENDS_SUCCESS';
export const FETCH_FRIENDS_FAILURE = 'FETCH_FRIENDS_FAILURE';

export const ADD_FRIENDS_START = 'ADD_FRIENDS_START';
export const ADD_FRIENDS_SUCCESS = 'ADD_FRIENDS_SUCCESS';
export const ADD_FRIENDS_FAILURE = 'ADD_FRIENDS_FAILURE';

export const DELETE_FRIENDS_START = 'DELETE_FRIENDS_START';
export const DELETE_FRIENDS_SUCCESS = 'DELETE_FRIENDS_SUCCESS';
export const DELETE_FRIENDS_FAILURE = 'DELETE_FRIENDS_FAILURE';


export const sendLogin = ({login, props}) => {
    return dispatch => {
        dispatch({type: LOGIN_START});
        axios.post('http://localhost:5000/api/login', login)
            .then(res => {
                dispatch({type: LOGIN_SUCCESS, payload: res.data.payload})
            })
            .then(() => {
                props.history.push('/friends');
            })
            .catch(err => {
                dispatch({ type: LOGIN_FAILURE, payload: err.response });
            })
    }
    }

export const getAllFriends = () => {
  return dispatch => {
    dispatch({ type: FETCH_FRIENDS_START });
    axiosWithAuth()
      .get(`http://localhost:5000/api/friends`)
      .then(res => {
          console.log(res)
        dispatch({ type: FETCH_FRIENDS_SUCCESS, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: FETCH_FRIENDS_FAILURE, payload: err.response });
      });
  };
};

export const addFriends = (obj) => {
  return dispatch => {
    dispatch({type: ADD_FRIENDS_START, payload: obj})
    axiosWithAuth()
    .post(`http://localhost:5000/api/friends`, obj)
    .then(res => {
        console.log(res)
      dispatch({ type: ADD_FRIENDS_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: ADD_FRIENDS_FAILURE, payload: err.response });
    });
  }
}

export const deleteData = (id) => {
    return dispatch => {
      dispatch({ type: DELETE_FRIENDS_START });
      axios
        .delete(`http://localhost:3333/smurfs/${id}`)
        .then(res => {
          dispatch({ type: DELETE_FRIENDS_SUCCESS, payload: id });
        })
        .catch(err => {
          dispatch({ type: FETCH_FRIENDS_FAILURE, payload: err.response });
        });
    };
  };
