import BlogList from "./BlogList";
import useFetch from "./useFetch";
const Home = () => {
   const {data:blogs,isLoading,err} = useFetch('http://localhost:8000/blogs');
    return (  
        <div className="home">
            {err && <div>{err}</div>}
            {isLoading && <div>Loading</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs"></BlogList>}
            {/* <BlogList blogs={blogs.filter((blog)=>{
                return blog.author === "Kageyama"; 
            })} title="Kageyama's Blogs"></BlogList> */}
        </div>
    );
}
 
export default Home;