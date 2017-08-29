// import * as ReadableAPI from '../util/ReadableAPI';
// import * as types from '../types/Readable';

export const changePage = (page) => {
    return {
        type: types.ADD_POST,
    }
}

export const editPost = (post) => {
    return {
        type: types.EDIT_POST,
        post
    }
}

export const removePost = () => {
    return {
        type: types.REMOVE_POST
    }
}

export const upvotePost = (postId) => {
    return dispatch => {
        ReadableAPI.upvotePost(postId, post => {
            if (post) {
                dispatch({
                    type: types.UPVOTE_POST,
                    post
                });
            }
        });
    }
}

export const downvotePost = (postId) => {
    return dispatch => {
        ReadableAPI.downvotePost(postId, post => {
            if (post) {
                dispatch({
                    type: types.DOWNVOTE_POST,
                    post
                });
            }
        });
    }
}

export const loadPosts = (posts) => {
    return {
        type: types.LOAD_POSTS,
        posts
    }
}

export const loadPost = (post) => {
    return {
        type: types.LOAD_POST,
        post: {
            ...post
        }
    }
}

export const fetchPosts = (category) => {
    return dispatch => {
        ReadableAPI.getPosts(category).then(posts => {
            if (posts) {
                dispatch(loadPosts(posts));
            }
        });
    }
}

export const fetchPost = (id) => {
    return dispatch => {
        ReadableAPI.getPost(id).then(post => {
            if (post) {
                dispatch(loadPost(post));
            }
        });
    }
}

export const changeTitle = (title) => {
    return dispatch => {
        dispatch({
            type: types.CHANGE_TITLE,
            title
        });
    }
}

export const changeBody = (body) => {
    return dispatch => {
        dispatch({
            type: types.CHANGE_BODY,
            body
        });
    }
}