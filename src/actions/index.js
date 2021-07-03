import jsonPlaceholder from "../apis/jsonPlaceholder";

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

// still fine
export const selectPost = () => {
    return {
        type: 'SELECT_POST'
    }
};