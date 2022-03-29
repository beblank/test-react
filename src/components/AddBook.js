import React, { useState, useEffect } from "react";
import { Form, Alert, InputGroup, Button, ButtonGroup } from "react-bootstrap";
import Swal from "sweetalert2";
import BookDataService from "../services/book.services";

const AddBook = ({ id, setBookId }) => {
  const [name, setName] = useState("");
  const [qty, setQty] = useState(0);
  const [price, setPrice] = useState(0);
  const [notes, setNotes] = useState("");
  const [message, setMessage] = useState({ error: false, msg: "" });
  const pathname = window.location.pathname;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    if (name === "" || qty === 0 || price === 0) {
      setMessage({ error: true, msg: "All fields are mandatory!" });
      return;
    }
    const newBook = {
      name,
      qty,
      price,
      notes,
    };
    console.log(newBook);

    try {
      if (pathname == '/product') {
        await BookDataService.updateBook(id, newBook);
        setBookId("");
        Swal.fire(
          'Success!',
          'Product already updated!',
          'success'
        )
        setMessage({ error: false, msg: "Updated successfully!" });
      } else {
        await BookDataService.addBooks(newBook);
        Swal.fire(
          'Success!',
          'Product already stored!',
          'success'
        )
        setMessage({ error: false, msg: "New Book added successfully!" });
      }
    } catch (err) {
      setMessage({ error: true, msg: err.message });
    }

    setName("");
    setPrice(0);
    setQty(0);
    setNotes("");
  };

  const editHandler = async () => {
    setMessage("");
    try {
      const docSnap = await BookDataService.getBook(id);
      console.log("the record is :", docSnap.data());
      setName(docSnap.data().name);
      setPrice(docSnap.data().price);
      setQty(docSnap.data().qty);
      setNotes(docSnap.data().notes);
    } catch (err) {
      setMessage({ error: true, msg: err.message });
    }
  };

  useEffect(() => {
    console.log("The id here is : ", id);
    if (id !== undefined && id !== "") {
      editHandler();
    }
  }, [id]);
  return (
    <>
      <div className="p-4 box">
        {message?.msg && (
          <Alert
            variant={message?.error ? "danger" : "success"}
            dismissible
            onClose={() => setMessage("")}
          >
            {message?.msg}
          </Alert>
        )}

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBookTitle">
            <InputGroup>
              <InputGroup.Text id="formBookTitle">Product</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Product Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </InputGroup>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBookAuthor">
            <InputGroup>
              <InputGroup.Text id="formBookAuthor">Quantity</InputGroup.Text>
              <Form.Control
                type="number"
                placeholder="Set Quantity"
                value={qty}
                onChange={(e) => setQty(e.target.value)}
              />
            </InputGroup>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBookAuthor">
            <InputGroup>
              <InputGroup.Text id="formBookAuthor">Price</InputGroup.Text>
              <Form.Control
                type="number"
                placeholder="Set Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </InputGroup>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBookAuthor">
            <InputGroup>
              <InputGroup.Text id="formBookAuthor">Notes</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Input Description"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              />
            </InputGroup>
          </Form.Group>

          {/* <ButtonGroup aria-label="Basic example" className="mb-3">
            <Button
              disabled={flag}
              variant="success"
              onClick={(e) => {
                setStatus("Available");
                setFlag(true);
              }}
            >
              Available
            </Button>
            <Button
              variant="danger"
              disabled={!flag}
              onClick={(e) => {
                setStatus("Not Available");
                setFlag(false);
              }}
            >
              Not Available
            </Button>
          </ButtonGroup> */}
          <div className="d-grid gap-2">
            {pathname === '/add' ?
              <Button variant="primary" type="Submit">Add</Button>
              : <Button variant="primary" type="Submit">Edit</Button>}
          </div>
        </Form>
      </div>
    </>
  );
};

export default AddBook;
