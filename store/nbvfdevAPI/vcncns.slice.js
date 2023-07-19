import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_vcncn_list = createAsyncThunk(
  "vcncns/api_v1_vcncn_list",
  async payload => {
    const response = await apiService.api_v1_vcncn_list(payload)
    return response.data
  }
)
export const api_v1_vcncn_create = createAsyncThunk(
  "vcncns/api_v1_vcncn_create",
  async payload => {
    const response = await apiService.api_v1_vcncn_create(payload)
    return response.data
  }
)
export const api_v1_vcncn_retrieve = createAsyncThunk(
  "vcncns/api_v1_vcncn_retrieve",
  async payload => {
    const response = await apiService.api_v1_vcncn_retrieve(payload)
    return response.data
  }
)
export const api_v1_vcncn_update = createAsyncThunk(
  "vcncns/api_v1_vcncn_update",
  async payload => {
    const response = await apiService.api_v1_vcncn_update(payload)
    return response.data
  }
)
export const api_v1_vcncn_partial_update = createAsyncThunk(
  "vcncns/api_v1_vcncn_partial_update",
  async payload => {
    const response = await apiService.api_v1_vcncn_partial_update(payload)
    return response.data
  }
)
export const api_v1_vcncn_destroy = createAsyncThunk(
  "vcncns/api_v1_vcncn_destroy",
  async payload => {
    const response = await apiService.api_v1_vcncn_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const vcncnsSlice = createSlice({
  name: "vcncns",
  initialState,
  reducers: {},
  extraReducers: {
    [api_v1_vcncn_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_vcncn_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [api_v1_vcncn_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_vcncn_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_vcncn_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [api_v1_vcncn_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_vcncn_retrieve.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_vcncn_retrieve.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [api_v1_vcncn_retrieve.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_vcncn_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_vcncn_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_vcncn_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_vcncn_partial_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_vcncn_partial_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_vcncn_partial_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_vcncn_destroy.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_vcncn_destroy.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.filter(
          record => record.id !== action.meta.arg?.id
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_vcncn_destroy.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  api_v1_vcncn_list,
  api_v1_vcncn_create,
  api_v1_vcncn_retrieve,
  api_v1_vcncn_update,
  api_v1_vcncn_partial_update,
  api_v1_vcncn_destroy,
  slice: vcncnsSlice
}
