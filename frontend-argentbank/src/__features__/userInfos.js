import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user: {
        connected: false,
        email: null,
        firstName: null,
        lastName: null,
        createdAt: null,
        updatedAt: null,
        id: null,
    },
    tokenUser: {
        token: null,
    },
    remember: {
        checked: false,
    },
}
export const userInfosSlice = createSlice({
    name: 'userInfos',
    initialState,

    reducers: {
        tokenUser: (state, action) => {
            state.tokenUser = {
                ...state.tokenUser,
                token: action.payload.token,
            }
        },
        loginUserInfos: (state, action) => {
            state.user = {
                ...state.user,
                connected: true,
                email: action.payload.email,
                firstName: action.payload.firstName,
                lastName: action.payload.lastName,
                createdAt: action.payload.createdAt,
                updatedAt: action.payload.updatedAt,
                id: action.payload.id,
            }
        },
        logOutUser: (state) => {
            state.user = {
                ...state.user,
                connected: false,
                email: null,
                firstName: null,
                lastName: null,
                createdAt: null,
                updatedAt: null,
                id: null,
            }
            state.tokenUser = { ...state.tokenUser, token: null }
        },

        editUserInfos: (state, action) => {
            state.user = {
                ...state.user,
                firstName: action.payload.firstName,
                lastName: action.payload.lastName,
                updatedAt: action.payload.updatedAt,
            }
        },
        rememberUser: (state, action) => {
            console.log(action.payload)
            state.remember = {
                ...state.remember,
                checked: action.payload,
            }
        },
    },
})

export const {
    tokenUser,
    loginUserInfos,
    logOutUser,
    editUserInfos,
    rememberUser,
} = userInfosSlice.actions

export const selectUserInfos = (state) => state.userInfos.user
export const selectTokenUser = (state) => state.userInfos.tokenUser
export const selectRememberUser = (state) => state.userInfos.remember

export default userInfosSlice.reducer
