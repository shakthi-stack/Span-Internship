import { useContext } from "react";
import { BookContext } from "../contexts/BookContext";
import { ThemeContext } from "../contexts/ThemeContext";

const BookList = () => {
    const {isLightTheme, light, dark} = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;
    const {books} = useContext(BookContext);
    // console.log(books);
    return (
        <div className="book-list" style={{
            background: theme.bg,
            color: theme.syntax
        }}>
            <ul>
                {books.map((book)=>{
                    return(
                        <li style={{background:theme.ui}} key={book.id}>{book.title}</li>
                    );
                })}
                <li style={{background:theme.ui}}>React for dummies</li>
                <li style={{background:theme.ui}}>Node for dummies</li>
                <li style={{background:theme.ui}}>Js for dummies</li>
            </ul>
        </div>
    );
}
 
export default BookList;
