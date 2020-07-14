import TEST_ACTION_TYPES from "../../actions/test/testActionTypes"
import IAction from "../../../models/IAction"

const INITIAL_STATE = {
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
