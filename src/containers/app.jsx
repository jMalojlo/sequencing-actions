import * as React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as appActions from "~src/features/app/actions";

const dispatchProps = {
  getUsers: appActions.getUsersRequest,
  getPostsForUser: appActions.getPostsForUserRequest
};

class Component extends React.Component {
  componentDidMount() {
    this.props.getUsers({
      onComplete: users => this.props.getPostsForUser(users[0].id)
    });
  }
  render() {
    return <h1> Render is irrelevant here </h1>;
  }
}

export const App = connect(
  null,
  dispatchProps
)(Component);
