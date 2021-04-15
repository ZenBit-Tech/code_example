/* eslint-disable no-param-reassign */
import { createReducer } from '@reduxjs/toolkit'
import { ExampleState } from '@app/interfaces'
import { fetchOrganizations } from './thunk'

const initialState: ExampleState = {
  loading: false,
  error: null,
  organizations: null,
}

export const exampleReducers = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchOrganizations.pending, (state: ExampleState) => {
      state.loading = true
      state.error = null
      state.organizations = null
    })
    .addCase(fetchOrganizations.fulfilled, (state: ExampleState, action) => {
      state.loading = false
      state.organizations = action.payload
    })
    .addCase(fetchOrganizations.rejected, (state, { error }) => {
      state.error = error.message
      state.loading = false
    })
})
