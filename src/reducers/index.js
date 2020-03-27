import { combineReducers } from 'redux'
import configureStore from '../store/index'
import rootSaga from '../sagas/'

export default () => {
    /* ------------- Assemble The Reducers ------------- */
    const rootReducer = combineReducers({
        verifyReducer: require('./verifyReducer').reducer
    })

    return configureStore(rootReducer, rootSaga)
}