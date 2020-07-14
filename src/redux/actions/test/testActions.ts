import TEST_ACTION_TYPES from "./testActionTypes";

export const dispatchTest = (name: string) => ({
    type: TEST_ACTION_TYPES.DISPATCH_ACTION,
    payload: name
})
