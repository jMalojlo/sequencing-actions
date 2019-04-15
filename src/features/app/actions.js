export const GET_USERS_REQUEST = "GET_USERS_REQUEST";
export const GET_USERS_SUCCESS = "GET_USERS_SUCCESS";
export const GET_USERS_ERROR = "GET_USERS_ERROR";

export const GET_POSTS_FOR_USER_REQUEST = "GET_POSTS_FOR_USER_REQUEST";
export const GET_POSTS_FOR_USER_SUCCESS = "GET_POSTS_FOR_USER_SUCCESS";

export const getUsersRequest = ({ onComplete } = {}) => ({
  type: GET_USERS_REQUEST,
  meta: {
    onComplete
  }
});

export const getUsersSuccess = users => ({
  type: GET_USERS_SUCCESS,
  payload: { users }
});

export const getPostsForUserRequest = userId => ({
  type: GET_POSTS_FOR_USER_REQUEST,
  payload: {
    userId
  }
});

export const getPostsForUserSuccess = posts => ({
  type: GET_POSTS_FOR_USER_SUCCESS,
  payload: {
    posts
  }
});
