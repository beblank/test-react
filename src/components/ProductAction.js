import React, { useState } from 'react'
import AddBook from './AddBook'
import BooksList from './BooksList'

const ProductAction = () => {
    const [bookId, setBookId] = useState("");

    const getBookIdHandler = (id) => {
        console.log("The ID of document to be edited: ", id);
        setBookId(id);
    };
    return (
        <div>
            <AddBook id={bookId} setBookId={setBookId} />
            <BooksList getBookId={getBookIdHandler} />
        </div>
    )
}

export default ProductAction