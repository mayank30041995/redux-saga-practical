import * as types from './actionTypes';

const initialState = {
   users: [],
   post: [],
   loading: false,
   error: null
}

const userReducer =( state= initialState , action) => {
    switch(action.type) {
        case types.LOAD_USERS_START : 
        case types.CREATE_USER_START:
        case types.LOAD_POST_DATA:
        return {
            ...state,
            loading:true
        }
        case types.LOAD_USERS_SUCCESS : 
        return {
            ...state,
            loading:false,
            users: action.payload
        }
        case types.LOAD_USERS_ERROR : 
        return {
            ...state,
            loading:false,
            error: action.payload
        }
        case types.CREATE_USER_SUCCESS: 
        return {
            ...state,
            loading:false
        }
        case types.CREATE_USER_ERROR : 
        return {
            ...state,
            loading:false,
            error: action.payload
        }
        case types.LOAD_POST_SUCCESS : 
        return {
            ...state,
            loading:false,
            post: action.payload
        }
        case types.LOAD_POST_ERROR :
        return {
            ...state,
            loading:false,
            error: action.payload
        }
        default:
            return state;
    }
}

export default userReducer;