import { createContext, useState } from "react";

export const BookContext = createContext();

const BookContextProvider = (props) => {
    const [books, setBooks]=useState([
        {title:"soda stream sky",id:1},
        {title:"The Reason",id:2},
        {title:"Another love",id:3},
        {title:"Same old love",id:4}
    ]);
    return (
        <BookContext.Provider value = {{books}}>
            {props.children}
        </BookContext.Provider>
     );
}
 
export default BookContextProvider;