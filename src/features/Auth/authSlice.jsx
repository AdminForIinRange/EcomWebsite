import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { auth, provider } from "../../Config/Firebase";
import { signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, sendPasswordResetEmail } from "firebase/auth";

const initialState = {
  user: null,
  isLoading: false,
  error: null,
  emailInUse: false,
  invalidCredential: false,
  hasNotPasswordVerified: false,
  signUp: false,
  forgotPassword: false,
  weakPassword: false
  
  
};

export const signInWithGoogle = createAsyncThunk(
  "auth/signInWithGoogle",
  async (_, { rejectWithValue }) => {
    try {
      const results = await signInWithPopup(auth, provider);
      const authInfo = {
        userID: results.user.uid,
        email: results.user.email,
        isAuth: true,
      };
      localStorage.setItem('authToken', authInfo.userID);
      return authInfo;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const signInWithEmailPassword = createAsyncThunk(
  "auth/signInWithEmailPassword",
  async ({ email, password }, { rejectWithValue, dispatch }) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      const authInfo = {
        userID: user.uid,
        email: user.email,
        isAuth: true,
      };
      localStorage.setItem('authToken', authInfo.userID);
      return authInfo;
    } catch (error) {
      if (error.code === "auth/invalid-credential") {
        dispatch(setinvalidCredential(true)); // Dispatch action to set emailInUse to true
      }
      return rejectWithValue(error.message );
    }
  }
);

export const registerWithEmailAndPassword = createAsyncThunk(
  "auth/registerWithEmailAndPassword",
  async ({ email, password }, { rejectWithValue, dispatch }) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      const authInfo = {
        userID: user.uid,
        email: user.email,
        isAuth: true,
      };
      return authInfo;
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        dispatch(setEmailInUse(true)); // Dispatch action to set emailInUse to true
      }
      if (error.code === "auth/weak-password") {
        dispatch(setweakPassword(true)); // Dispatch action to set emailInUse to true
      }
      return rejectWithValue(error.message );
    }
  }
);



export const signOutUser = createAsyncThunk(
  "auth/signOutUser",
  async (_, { rejectWithValue }) => {
    try {
      await signOut(auth);
      localStorage.removeItem('authToken');
      // No need to log state.user here, as it's not relevant to the functionality
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const resetPassword = createAsyncThunk(
  "auth/resetPassword",
  async (email, { rejectWithValue, dispatch }) => {
    try {
      await sendPasswordResetEmail(auth, email);
    console.log(email)
    dispatch(setForgotPassword(true))
      return null; // Success, no need to return any data
    } catch (error) {
      console.log(email)
      return rejectWithValue(error.message);
    }
  }
);


const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setEmailInUse(state, action) {
      state.emailInUse = action.payload;
    },
    setinvalidCredential(state, action) {
      state.invalidCredential = action.payload;
    },

    sethasNotPasswordVerified(state, action){
      state.hasNotPasswordVerified = action.payload;
    },
    setsignUp(state) {
      state.signUp = !state.signUp; // Toggle the value of signUp
    }
    ,
    setForgotPassword(state, action) {
      state.forgotPassword = action.payload; // Toggle the value of signUp
    },
    setUserData(state, action) {
      state.user = action.payload;
    },
    setweakPassword(state, action) {
      state.weakPassword = action.payload;
    },
    
    

  },
  extraReducers: (builder) => {
    builder
      .addCase(signInWithGoogle.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signInWithGoogle.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
        state.error = null;
      })
      .addCase(signInWithGoogle.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(signOutUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signOutUser.fulfilled, (state) => {
        state.isLoading = false;
        state.user = null;
        state.error = null;
      })
      .addCase(signOutUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(signInWithEmailPassword.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signInWithEmailPassword.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
        state.error = null;
      })
      .addCase(signInWithEmailPassword.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        if (action.payload.code === "auth/invalid-credential") {
          state.invalidCredential = true;
        }
       
      })
      .addCase(registerWithEmailAndPassword.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerWithEmailAndPassword.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
        state.error = null;
        state.emailInUse = true;
        state.weakPassword = true;
        
      })
      .addCase(registerWithEmailAndPassword.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        if (action.payload.code === "auth/email-already-in-use") {
          state.emailInUse = true;
        }
        if (action.payload.code === "auth/weak-password") {
          state.weakPassword = true;
        }
      })

      .addCase(resetPassword.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(resetPassword.fulfilled, (state) => {
        state.isLoading = false;
        state.error = null;

      })
      .addCase(resetPassword.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        
      });
      
  },
});

export const {setUserData , setweakPassword, setEmailInUse, setinvalidCredential, sethasNotPasswordVerified, setsignUp, setForgotPassword } = authSlice.actions;

export default authSlice.reducer;
