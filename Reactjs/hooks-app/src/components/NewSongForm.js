import { useState } from "react";

const NewSongForm = (props) => {
    const [title,setTitle]=useState('');
    const addSong = props.addSong;
    const handleSubmit = (e)=>{
        e.preventDefault();
        props.addSong(title);
        setTitle('')
    }
    
    return ( 
        <form onSubmit={handleSubmit}>
            <label htmlFor="">Song name</label>
            <input type="text" value={title} required onChange={(e)=>{
                setTitle(e.target.value);
            }}/>
            <input type="submit" value="add song" />
        </form>
     );
}
 
export default NewSongForm;