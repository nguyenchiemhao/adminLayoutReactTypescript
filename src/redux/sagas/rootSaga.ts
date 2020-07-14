import { fork } from 'redux-saga/effects'
import { testSagaListener } from './test/testSaga'

function* rootSaga() {
    yield fork(testSagaListener)
}

export default rootSaga