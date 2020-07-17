import React, { useState } from "react";
import { Dispatch } from "redux";
import IAppState from "../../redux/base-interface/IAppState";
import { dispatchTest } from "../../redux/test/test.actions";
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
    <div>
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
    </div>
  );
}
const mapStateToProps = (state: IAppState) => {
  return {
    hello: state.testReducer.hello,
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
