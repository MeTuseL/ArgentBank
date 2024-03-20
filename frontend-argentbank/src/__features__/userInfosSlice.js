import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user: {
        email: null,
        firstName: null,
        lastName: null,
        createdAt: null,
        updatedAt: null,
        id: null,
    },
}
export const userInfosSlice = createSlice({
    name: 'userInfos',
    initialState,

    reducers: {
        loginUserInfos: (state, action) => {
            state.user = {
                email: action.payload.email,
                firstName: action.payload.firstName,
                lastName: action.payload.lastName,
                createdAt: action.payload.createdAt,
                updatedAt: action.payload.updatedAt,
                id: action.payload.id,
            }
        },
    },
})

export const { loginUserInfos } = userInfosSlice.actions

export const selectUserInfos = (state) => state.userInfos.user

export default userInfosSlice.reducer
