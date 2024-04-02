import { configureStore } from '@reduxjs/toolkit'
import userInfosSlice from '../__features__/userInfos'

/**
 * Configures and creates a Redux store instance.
 *
 * This function creates a Redux store using the provided reducer.
 *
 * @category Store
 * @returns {Object} The configured Redux store.
 */
export default configureStore({
    reducer: { userInfos: userInfosSlice },
})
