import { createStore, applyMiddleware } from 'redux'
import rootReducer from './rootReducer'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './rootSaga'
import logger from "redux-logger"

const sagaMiddleware = createSagaMiddleware()

const middleware = [sagaMiddleware, logger]

const configureStore = () => {
    const store = createStore(rootReducer, applyMiddleware(...middleware))
    sagaMiddleware.run(rootSaga)
    return store
}

export default configureStore