import { createAsyncThunk } from '@reduxjs/toolkit'
import { getOrganizations } from '../../api/exampleApi'

export const fetchOrganizations = createAsyncThunk(
  'fetchOrganizations',
  async () => {
    return getOrganizations()
  },
)
