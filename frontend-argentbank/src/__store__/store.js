import { configureStore } from '@reduxjs/toolkit'
import userInfosSlice from '../__features__/userInfosSlice'

export default configureStore({
    reducer: { userInfos: userInfosSlice },
})
