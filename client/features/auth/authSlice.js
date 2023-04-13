import { createSlice } from '@reduxjs/toolkit'
import { userLogin, userSignup, changePassword, userUpdate} from './authAction.js'

export const AuthSlice = createSlice({
    name: 'Auth',
    initialState: {
      user: {
        user:{}
      },
      loading: false,
      error: null,
    },
    reducers: {
      logoutReq: (state, action) => {
        state.user = {
          user: {
            user:{
            }
          }
        }
      },
      clearError: (state, ) => {
        state.error = null
      }
    },

    extraReducers: (builder) => {

        // Add reducers for additional action types here, and handle loading state as needed
    
        builder.addCase(userLogin.pending, (state) => {
          state.loading = true
        })
        builder.addCase(userLogin.fulfilled, (state, action) => {
          state.user = action.payload
          state.loading = false
        })
        builder.addCase(userLogin.rejected, (state, action) => {
          state.error = action.payload
          state.loading = false
        })

        builder.addCase(userSignup.pending, (state) => {
          state.loading = true
        })
        builder.addCase(userSignup.fulfilled, (state, action) => {
          state.user = action.payload
          state.loading = false
        })
        builder.addCase(userSignup.rejected, (state, action) => {
          state.error = action.payload
          state.loading = false
        })
        
        builder.addCase(userUpdate.pending, (state) => {
          state.loading = true
        })
        builder.addCase(userUpdate.fulfilled, (state, action) => {
          state.user = action.payload
          state.loading = false
        })
        builder.addCase(userUpdate.rejected, (state, action) => {
          state.error = action.payload
          state.loading = false
        })

        builder.addCase(changePassword.pending, (state) => {
          state.loading = true
        })
        builder.addCase(changePassword.fulfilled, (state, action) => {
          state.user = action.payload
          state.loading = false
        })
        builder.addCase(changePassword.rejected, (state, action) => {
          state.error = action.payload
          state.loading = false
        })
  }
})

// Action creators are generated for each case reducer function
export const { userLoginReq,userSignupReq ,userUpdateReq,changePasswordReq, logoutReq, clearError} = AuthSlice.actions
export default AuthSlice.reducer