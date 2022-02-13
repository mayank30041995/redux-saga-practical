import * as types from './actionTypes';

export const loadUsersStart = () => ({
    type: types.LOAD_USERS_START
});

export const loadUsersSuccess = (users) => ({
    type: types.LOAD_USERS_SUCCESS,
    payload: users
})

export const loadUsersError = (error) => ({
    type: types.LOAD_USERS_ERROR,
    payload: error
})

export const createUserStart = (user) => ({
    type: types.CREATE_USER_START,
    payload: user
})

export const createUserSuccess = () => ({
    type:types.CREATE_USER_SUCCESS
})

export const createUserError = (error) => ({
     type:types.CREATE_USER_ERROR,
     payload: error
})


export const loadPostsData = () => ({
    type: types.LOAD_POST_DATA,
})

export const loadPostSuccess = (post) => ({
    type: types.LOAD_POST_SUCCESS,
    payload: post
})

export const loadPostError = (error) => ({
    type: types.LOAD_POST_ERROR,
    payload: error
})