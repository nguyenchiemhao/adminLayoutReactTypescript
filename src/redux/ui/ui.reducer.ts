import UI_ACTION_TYPES from "./ui.action-types"
import IAction from "../base-interface/IAction"
import IUiState from "./IUiState"

const INITIAL_STATE: IUiState = {
    onSidebarOpen: true
}


export default (state = INITIAL_STATE, { type, payload }: IAction) => {
    switch (type) {

        case UI_ACTION_TYPES.TOGGLE_SIDEBAR:
            return { ...state, onSidebarOpen: !state.onSidebarOpen }

        default:
            return state
    }
}
