import { configureStore } from '@reduxjs/toolkit'
import userInfosSlice from '../__features__/userInfos'

export default configureStore({
    reducer: { userInfos: userInfosSlice },
})
