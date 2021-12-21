import { useParams } from "react-router";
import { useSelector } from "react-redux";
export default function Blogsite(){
    const {id} = useParams();
    console.log("idddd",id);
    const blogs = useSelector(state=>state.BlogReducer.blogs);
    console.log("blogggggggg",blogs);
    const blog2 = blogs.filter(checkid);
    console.log("=======",blog2);
    function checkid(blog1){
        console.log("{{{{{{{{{",id)
      return blog1.id===id;
    }
    console.log("[[[[[[[[[[[[",blog2[0].url)
    return(
        <div>
            {blog2[0].url}
        </div>
    )
}