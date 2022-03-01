import { useState } from "react";
import {useHistory} from "react-router-dom";


const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Anonymous');
    const [isLoading, SetIsLoading] = useState(false);
    const history = useHistory();
    // let [details] = useState([]);
    // useEffect(()=>{
    //     details.push("Shakthi");
    // },[]);
    // console.log(details);
    const handleSubmit = (e) =>{
        e.preventDefault();
        const blog = {title, body, author};

        console.log(blog);
        SetIsLoading(true);
        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(blog)
        }).then(()=>{
            // console.log("New Blog added");
            alert('New Blog Added...');
            SetIsLoading(false);
            // history.goBack();
            history.push('/');
        });
    }
    return (  
        <div className="create">
            {/* <h2>Add a new Blog post</h2> */}
            <form onSubmit={handleSubmit}>
                <label>Blog Title:</label>
                <input type="text" required value={title} onChange={(e)=>{
                    setTitle(e.target.value);
                }}/>
                <label>Blog content:</label>
                <textarea type="text" required value={body} onChange={(e)=>{
                    setBody(e.target.value);
                }}/>
                <label>Blog Author:</label>
                <select value={author} onChange={(e)=>{
                    setAuthor(e.target.value);
                    // author.push(e.target.value);
                }}>
                    <option value="Anonymous">Select Author</option>
                    <option value="Kageyama">Kageyama</option>
                    <option value="Hinata">Hinata</option>
                </select>
                {!isLoading && <button>Add blog</button>}
                {isLoading && <button disabled>Creating...</button>}
                {/* <p>{title}</p>
                <p>{body}</p>
                <p>{author}</p> */}
            </form>
        </div>
    );
}
 
export default Create;