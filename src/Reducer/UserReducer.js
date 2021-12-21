let initState = { blogs: [], blog: {}, loading: true, success: false, isloggedin:true }

export const BlogReducer = (state = initState, action) => {
    console.log("Usert reducer+++++++++++++++",state)
    switch (action.type) {
        case 'FETCH_BLOG':
            console.log("CCCCCCCC",state);
            return {
                ...state,
                // loading: true,
            }
        case 'FETCH_BLOG_SUCCESS':
            console.log("USER SUCCESS", action.data)
            return {
                ...state,
                blogs: action.data,

                loading: false,
                isloggedin:false
                // success:action.data.success
            }
        case 'FETCH_BLOG_FAILURE':
            return {
                ...state,
                loading: false,
                success: false,
            }
        default:
            return state
    }
}