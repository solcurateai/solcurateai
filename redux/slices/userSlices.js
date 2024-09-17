import { createSlice } from '@reduxjs/toolkit';
import { getCookie, setCookie, deleteCookie } from 'cookies-next';

// Fetch user data from cookies
const userFromCookie = getCookie('userDetails')
  ? JSON.parse(getCookie('userDetails'))
  : null;

const userSlice = createSlice({
  name: 'user',
  initialState: {
    userData: userFromCookie,
    isAuthenticated: !!userFromCookie,
    isCheckingUsername: false,
    usernameAvailable: null,
    accessToken: getCookie('accessToken') || null
  },
  reducers: {
    setUser: (state, action) => {
      state.userData = action.payload;
      state.isAuthenticated = true;
      // Set user details in cookies
      setCookie('userDetails', JSON.stringify(action.payload), { maxAge: 60 * 60 * 24 * 30 }); // 30 days
    },
    logout: (state) => {
      state.userData = null;
      state.isAuthenticated = false;
      state.accessToken = null;
      // Remove cookies on logout
      deleteCookie('userDetails');
      deleteCookie('accessToken');
    },
    setUsernameAvailability: (state, action) => {
      state.usernameAvailable = action.payload;
    },
    setCheckingUsername: (state, action) => {
      state.isCheckingUsername = action.payload;
    },
    setAccessToken: (state, action) => {
      state.accessToken = action.payload;
      // Set access token in cookies
      setCookie('accessToken', action.payload, { maxAge: 60 * 60 * 24 * 30 }); // 30 days
    }
  }
});

export const {
  setUser,
  logout,
  setUsernameAvailability,
  setCheckingUsername,
  setAccessToken
} = userSlice.actions;

export default userSlice.reducer;
