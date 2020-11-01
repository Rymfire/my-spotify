import {applyMiddleware, createStore} from "redux";
import thunkMiddleware from 'redux-thunk';
import {createLogger} from 'redux-logger'
import rootReducer from "../redux/reducer";
import storage from "redux-persist/lib/storage"
import {persistReducer, persistStore} from "redux-persist";

const loggerMiddleware = createLogger()

const persistConfig = {
    key: 'root',
    storage
}

export const store = createStore(
    persistReducer(persistConfig, rootReducer),
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware,
    )
)

export const persistor = persistStore(store);
