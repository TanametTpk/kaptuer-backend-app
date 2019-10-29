import { createStore , applyMiddleware } from 'redux'
import rootReducer from './reducers'
import thunk from 'redux-thunk'

// import { persistStore, persistReducer } from 'redux-persist' // FOR PERSIST_STORE
// import storage from 'redux-persist/lib/storage'

const middleware = [thunk]

const initialState = {}

const store = createStore( 
    // persistedReducer, // FOR PERSIST_STORE
    rootReducer,
    initialState,
    applyMiddleware(...middleware)
)

export default store

// let persistor = persistStore(store) // FOR PERSIST_STORE

// export default () => { // FOR PERSIST_STORE
//     return {
//         store,
//         persistor
//     }
// }