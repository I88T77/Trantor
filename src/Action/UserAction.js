export const FETCH_BLOG = "FETCH_BLOG";
export const FETCH_BLOG_FAILURE = "FETCH_BLOG_FAILURE";
export const FETCH_BLOG_SUCCESS = "FETCH_BLOG_SUCCESS";

export const fetchBlogs = () => {
    console.log("iiiiiii");
    console.log("klklkll");
    return {
        type: FETCH_BLOG,
    }
}


export const fetchBlogsSuccess = data => ({ type: FETCH_BLOG_SUCCESS, data });
export const fetchBlogsFailure = () => ({ type: FETCH_BLOG_FAILURE });

