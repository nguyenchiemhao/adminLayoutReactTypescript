import ITestState from "../test/ITestState";
import IUiState from "../ui/IUiState";

export default interface IAppState {
    testReducer: ITestState
    uiReducer: IUiState
}