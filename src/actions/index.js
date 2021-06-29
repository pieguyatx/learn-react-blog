import jsonPlaceholder from "../apis/jsonPlaceholder";

export const fetchPosts = async () => {
    // bad approach!!! Breaks rules of Redux and action creators...
    // will give error message: "Actions must be plain objects..."
    const response = await jsonPlaceholder.get('/posts');

    return {
        type: 'FETCH_POSTS',
        payload: response
    };
};