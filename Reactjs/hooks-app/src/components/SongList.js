import { useEffect, useState } from "react";
import NewSongForm from "./NewSongForm";
const uuid = require('uuid');


const SongList = () => {
   const [songs,setSongs] = useState([
        {title:"soda stream sky",id:1},
        {title:"The Reason",id:2},
        {title:"Another love",id:3}
    ]);
    const [age,setAge] = useState(21);
    const addSong = (title)=>{
        setSongs([...songs,{title,id:uuid.v1()}])
    }
    useEffect(()=>{
        console.log("useEffect ran",songs);
    },[songs]);
    return (  
        <div className="song-list">
            <ul>
                {songs.map((song)=>{
                    return(
                        <li key={song.id}>{song.title}</li>
                    );
                })}
            </ul>
            <NewSongForm addSong={addSong}></NewSongForm>
            {/* <button onClick={addSong}>Add a song</button> */}
            <button onClick={()=>{
                setAge(age+1)
            }}>increment</button>
            <p>{age}</p>
        </div>
    );
}
 
export default SongList;
