import {LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE, 
    FETCH_FRIENDS_START, FETCH_FRIENDS_SUCCESS, FETCH_FRIENDS_FAILURE,
    DELETE_FRIENDS_START, DELETE_FRIENDS_SUCCESS, DELETE_FRIENDS_FAILURE, SET_FRIENDS, ADD_FRIENDS_SUCCESS} from '../actions'
    
    const initialState = {
        friends: [],
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
            case ADD_FRIENDS_SUCCESS: {
                return {
                    ...state,
                    friends: action.payload
                    };
                }
            // case DELETE_DATA_START:
            //     return {
            //         ...state,
            //         error: 'delete failed',
            //         isFetching: true
            //     }
            // case DELETE_DATA_SUCCESS:  
            //     return {
            //         ...state,
            //         smurfs: state.smurfs.filter(smurf => smurf.id !== action.payload),
            //         isFetching: false,
            //         error: ''
            //     }
            // case DELETE_DATA_FAILURE: {
            //     return {
            //         ...state,
            //         error: action.payload
            //         };
            //     }
            // case SET_DATA: {
            //     return {
            //         ...state,
            //         smurfs: action.payload
            //         };
            //     }
            default: return state;
        }
    }