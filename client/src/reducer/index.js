import {LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE, 
    FETCH_FRIENDS_START, FETCH_FRIENDS_SUCCESS, FETCH_FRIENDS_FAILURE,
    FETCH_A_FRIEND_START, FETCH_A_FRIEND_SUCCESS, FETCH_A_FRIEND_FAILURE,
    DELETE_FRIENDS_START, DELETE_FRIENDS_SUCCESS, DELETE_FRIENDS_FAILURE,
    ADD_FRIENDS_SUCCESS, ADD_FRIENDS_START, ADD_FRIENDS_FAILURE} from '../actions'
    
    const initialState = {
        friends: [],
        oneFriend: {},
        error: "",
        isFetching: true
    }
    
    export const reducer = (state = initialState, action) => {
        switch(action.type) {
            case LOGIN_START:
                return {
                    ...state,
                    error: 'start failed',
                    isFetching: true
                }
            case LOGIN_SUCCESS:  
                localStorage.setItem('token', action.payload);
                return {
                    ...state,
                    isFetching: false,
                    error: ''
                }
            case LOGIN_FAILURE: {
                return {
                    ...state,
                    error: action.payload
                    };
                }
            case FETCH_FRIENDS_START:
                return {
                    ...state,
                    error: 'start failed',
                    isFetching: true
                }
            case FETCH_FRIENDS_SUCCESS:  
                return {
                    ...state,
                    friends: action.payload,
                    isFetching: false,
                    error: ''
                }
            case FETCH_FRIENDS_FAILURE: {
                return {
                    ...state,
                    error: action.payload
                    };
                }
            case FETCH_A_FRIEND_START: {
                return {
                    ...state,
                    error: 'start failed',
                    isFetching: true
                }
            }
            case FETCH_A_FRIEND_SUCCESS: {
                return {
                    ...state,
                    friend: action.payload,
                    error: '',
                    isFetching: false
                }
            }
            case FETCH_A_FRIEND_FAILURE: {
                return {
                    ...state,
                    friend: action.payload,
                    error: action.payload
                }
            }
            case ADD_FRIENDS_START: {
                return {
                    ...state,
                    error: 'start failed',
                    isFetching: true
                }
            }
            case ADD_FRIENDS_SUCCESS: {
                return {
                    ...state,
                    friends: action.payload
                    };
                }
            case ADD_FRIENDS_FAILURE: {
                return {
                    ...state,
                    error: action.payload
                    };
                }
            case DELETE_FRIENDS_START:
                return {
                    ...state,
                    error: 'delete failed',
                    isFetching: true
                }
            case DELETE_FRIENDS_SUCCESS:  
                return {
                    ...state,
                    friends: state.friends.filter(friend => friend.id !== action.payload),
                    isFetching: false,
                    error: ''
                }
            case DELETE_FRIENDS_FAILURE: {
                return {
                    ...state,
                    error: action.payload
                    };
                }
            default: return state;
        }
    }