import React from "react";
import { Dispatch } from "redux";
import IAppState from "./models/IAppState";
import { dispatchTest } from "./redux/actions/test/testActions";
import { connect } from "react-redux";

interface ITest {
  testDispatch: any;
  hello?: string; // state from store
}

function Test({ testDispatch, hello }: ITest) {
  return (
    <button
      onClick={() => {
        console.log("state nè", hello);
        testDispatch("Howie");
      }}
    >
      Home
    </button>
  );
}
const mapStateToProps = (state: IAppState) => {
  return {
    hello: state.test.hello,
  };
};
const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    testDispatch: (name: string) => {
      dispatch(dispatchTest(name));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Test);
