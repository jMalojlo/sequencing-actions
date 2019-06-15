import * as React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as appActions from "~src/features/app/actions";

const dispatchProps = {
  getUsers: appActions.getUsersRequest,
  getPostsForUser: appActions.getPostsForUserRequest
};

const Component = ({ getPostsForUser, getUsers }) => {
  React.useEffect(() => {
    getUsers({
      onComplete: users => getPostsForUser(users[0].id)
    });
  }, []);

  return <h1> Render is irrelevant here </h1>;
};

export const App = connect(
  null,
  dispatchProps
)(Component);
