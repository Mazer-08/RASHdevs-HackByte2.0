import { configureStore } from "@reduxjs/toolkit"
import testReducer from "../features/testSlice";
import authReducer from "../features/authSlice";

export const store = configureStore({
    reducer: {
        test: testReducer,
        auth: authReducer,
    },
});