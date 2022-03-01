import Navbar from "./components/Navbar";
import BookContextProvider from "./contexts/BookContext";
import BookList from "./components/BookList";
import BookForm from "./components/BookForm";
function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <Navbar></Navbar>
        <BookForm></BookForm>
        <BookList></BookList>
      </BookContextProvider>
    </div>
  );
}

export default App;
