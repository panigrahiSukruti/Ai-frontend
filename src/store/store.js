import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootReducer from "./rootReducer";

const persistConfig = {
    key: 'root',
    storage,
}; // configuration for redux-persist

const persistedReducer = persistReducer(persistConfig, rootReducer) // create a persisted reducer with the persistConfig and rootReducer

const store = configureStore({
    reducer: persistedReducer,
    // reducer: {
    //      user: userReducer, // reducers can also be added here instead of adding within rootreducer
    // },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }), // disable serializableCheck middleware to avoid error when using redux-persist
});

export const persistor = persistStore(store);
export default store;