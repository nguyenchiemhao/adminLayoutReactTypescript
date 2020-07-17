import { combineReducers } from 'redux'
import testReducer from './test/test.reducer'
import uiReducer from './ui/ui.reducer'


const rootReducer = combineReducers({
    testReducer,
    uiReducer
})

export default rootReducer