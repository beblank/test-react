import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddBook from "./components/AddBook";
import BooksList from "./components/BooksList";
import ProductAction from "./components/ProductAction";
import "./App.css";
import Header from "./components/Header";
import Login from "./components/Login";

function App() {
  const [bookId, setBookId] = useState("");

  const getBookIdHandler = (id) => {
    console.log("The ID of document to be edited: ", id);
    setBookId(id);
  };
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/add" element={
            <>
              <Header />
              <AddBook id={bookId} setBookId={setBookId} />
            </>
          }>
          </Route>
          <Route path="/" element={
            <>
              <Header />
              <BooksList getBookId={getBookIdHandler} />
            </>
          }>
          </Route>
          <Route path="/product" element={
            <>
              <Header />
              <ProductAction />
            </>
          }>
          </Route>

          <Route path="/login" element={
            <>
              <Login />
            </>
          }>
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
