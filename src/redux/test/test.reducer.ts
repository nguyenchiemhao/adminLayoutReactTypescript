import TEST_ACTION_TYPES from "./test.action-types"
import IAction from "../base-interface/IAction"
import ITestState from "./ITestState"

const INITIAL_STATE: ITestState = {
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
