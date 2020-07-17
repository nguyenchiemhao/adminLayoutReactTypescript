import TEST_ACTION_TYPES from "./test.action-types";

export const dispatchTest = (name: string) => ({
    type: TEST_ACTION_TYPES.DISPATCH_ACTION,
    payload: name
})
