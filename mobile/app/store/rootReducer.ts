import { combineReducers } from '@reduxjs/toolkit'

import { exampleReducers } from '../screens/chart/reducers'

export const rootReducer = combineReducers({
  example: exampleReducers,
})

export type RootState = ReturnType<typeof rootReducer>
