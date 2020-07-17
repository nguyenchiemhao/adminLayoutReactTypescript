import { take } from "redux-saga/effects";
import UI_ACTION_TYPES from "./ui.action-types";

export function* toggleSidebarListener() {
    while (true) {
        yield take(UI_ACTION_TYPES.TOGGLE_SIDEBAR)
    }
}

