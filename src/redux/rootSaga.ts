import { fork } from 'redux-saga/effects'
import { toggleSidebarListener } from './ui/ui.saga'
import { testSagaListener } from './test/test.saga'

function* rootSaga() {
    yield fork(testSagaListener)
    yield fork(toggleSidebarListener)
}

export default rootSaga