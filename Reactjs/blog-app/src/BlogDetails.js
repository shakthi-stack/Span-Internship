import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";


const BlogDetails = () => {
    const {id} = useParams();
    const {data:blog, isLoading, err} = useFetch(`http://localhost:8000/blogs/${id}`);
    const history = useHistory();
    const handleClick=()=>{
        fetch(`http://localhost:8000/blogs/${id}`,{
            method: "DELETE"
        }).then(()=>{
            history.push("/");
        });
    }
    return ( 
        <div className="blog-details">
            {/* <h2>Blog Details - {id}</h2> */}
            {isLoading && <div>Loading...</div>}
            {err && <div>{err}</div>}
            {blog && <div><h2>{blog.title}</h2>
            <p>By- {blog.author}</p>
            <div>{blog.body}</div></div>}
            <button onClick={handleClick}>Delete</button>
        </div>
     );
}
 
export default BlogDetails;