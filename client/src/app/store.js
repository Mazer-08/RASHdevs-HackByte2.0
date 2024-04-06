import { configureStore } from "@reduxjs/toolkit"
import testReducer from "../features/testSlice";
import authReducer from "../features/authSlice";
import userHomeReducer from "../features/userHomeSlice";

export const store = configureStore({
    reducer: {
        test: testReducer,
        auth: authReducer,
        userHome: userHomeReducer,
    },
});