import * as React from "react";
import { connect } from "react-redux";
import * as appActions from "~src/features/app/actions";

const dispatchProps = {
  appInit: appActions.appInit
};

class Component extends React.Component {
  componentDidMount() {
    this.props.appInit();
  }
  render() {
    return <h1> Render is irrelevant here </h1>;
  }
}

export const App = connect(
  null,
  dispatchProps
)(Component);
