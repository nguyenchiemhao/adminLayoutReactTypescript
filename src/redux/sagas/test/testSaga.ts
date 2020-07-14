import { take } from "redux-saga/effects";
import TEST_ACTION_TYPES from "../../actions/test/testActionTypes";

export function* testSagaListener() {
    while (true) {
        yield take(TEST_ACTION_TYPES.DISPATCH_ACTION)
        console.log('dispatch test action...')
    }
}