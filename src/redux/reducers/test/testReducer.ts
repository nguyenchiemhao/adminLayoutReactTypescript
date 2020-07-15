import TEST_ACTION_TYPES from "../../actions/test/testActionTypes"
import IAction from "../../../models/IAction"
import ITestReducerState from "../../../models/ITestReducerState"

const INITIAL_STATE: ITestReducerState = {
    hello: "Hello"
}


export default (state = INITIAL_STATE, { type, payload }: IAction) => {
    switch (type) {

        case TEST_ACTION_TYPES.DISPATCH_ACTION:
            return { ...state, hello: `Hello ${payload}` }

        default:
            return state
    }
}
