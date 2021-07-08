import _ from 'lodash'; // import as underscore _ by convention
import jsonPlaceholder from "../apis/jsonPlaceholder";

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
    await dispatch(fetchPosts());   // await ensures we wait for the posts before continuing
    // get only the unique elements in the array of userIds read from all the posts:
    const userIds = _.uniq(_.map(getState().posts, 'userId'));
    userIds.forEach(id => dispatch(fetchUser(id)));  
};

// redux-thunk let's us return a function
// this function returns another function
export const fetchPosts = () => async dispatch => { // getState can be second arg next to dispatch
    // only concerned with what gets returned from the action creator function, not the inner one
    const response = await jsonPlaceholder.get('/posts');

    // don't need to return an action in an inner function here, just use dispatch
    dispatch({ type: 'FETCH_POSTS', payload: response.data });  
};

export const fetchUser = (id) => async dispatch => {
    const response = await jsonPlaceholder.get(`/users/${id}`);
    dispatch({ type: 'FETCH_USER', payload: response.data});
};

// // === Solution to reducing network requests via memoization of the fetchUser function, via lodash:
// export const fetchUser = (id) => dispatch => {
//     _fetchUser(id, dispatch);
// };
// // underscore below notes it's a private function; other engineers shouldn't call this, generally
// const _fetchUser = _.memoize(async (id, dispatch) => {
//     const response = await jsonPlaceholder.get(`/users/${id}`);
//     dispatch({ type: 'FETCH_USER', payload: response.data});
// });


// still fine
export const selectPost = () => {
    return {
        type: 'SELECT_POST'
    }
};