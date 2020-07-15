import React, { useState, useContext } from "react";
import { Dispatch } from "redux";
import IAppState from "../models/IAppState";
import { dispatchTest } from "../redux/actions/test/testActions";
import { connect } from "react-redux";
import useStyle from "./testStyle";
import classNames from "classnames";

interface ITest {
  testDispatch: any;
  hello?: string; // state from store
}

function Test({ testDispatch, hello }: ITest) {
  const [buttonOnclick, setButtonOnclick] = useState(false);

  const classes = useStyle();

  return (
    <button
      className={classNames(classes.testButton, classes.border, {
        [classes.move]: buttonOnclick,
      })}
      onClick={() => {
        setButtonOnclick(!buttonOnclick);
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
