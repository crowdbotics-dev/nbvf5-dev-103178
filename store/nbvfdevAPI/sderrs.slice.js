import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_sderr_list = createAsyncThunk(
  "sderrs/api_v1_sderr_list",
  async payload => {
    const response = await apiService.api_v1_sderr_list(payload)
    return response.data
  }
)
export const api_v1_sderr_create = createAsyncThunk(
  "sderrs/api_v1_sderr_create",
  async payload => {
    const response = await apiService.api_v1_sderr_create(payload)
    return response.data
  }
)
export const api_v1_sderr_retrieve = createAsyncThunk(
  "sderrs/api_v1_sderr_retrieve",
  async payload => {
    const response = await apiService.api_v1_sderr_retrieve(payload)
    return response.data
  }
)
export const api_v1_sderr_update = createAsyncThunk(
  "sderrs/api_v1_sderr_update",
  async payload => {
    const response = await apiService.api_v1_sderr_update(payload)
    return response.data
  }
)
export const api_v1_sderr_partial_update = createAsyncThunk(
  "sderrs/api_v1_sderr_partial_update",
  async payload => {
    const response = await apiService.api_v1_sderr_partial_update(payload)
    return response.data
  }
)
export const api_v1_sderr_destroy = createAsyncThunk(
  "sderrs/api_v1_sderr_destroy",
  async payload => {
    const response = await apiService.api_v1_sderr_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const sderrsSlice = createSlice({
  name: "sderrs",
  initialState,
  reducers: {},
  extraReducers: {
    [api_v1_sderr_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_sderr_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [api_v1_sderr_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_sderr_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_sderr_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [api_v1_sderr_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_sderr_retrieve.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_sderr_retrieve.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [api_v1_sderr_retrieve.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_sderr_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_sderr_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_sderr_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_sderr_partial_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_sderr_partial_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_sderr_partial_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_sderr_destroy.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_sderr_destroy.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.filter(
          record => record.id !== action.meta.arg?.id
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_sderr_destroy.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  api_v1_sderr_list,
  api_v1_sderr_create,
  api_v1_sderr_retrieve,
  api_v1_sderr_update,
  api_v1_sderr_partial_update,
  api_v1_sderr_destroy,
  slice: sderrsSlice
}
