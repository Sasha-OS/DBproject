import React, {Fragment, useState} from "react";

const InputAuthor = () => {
    const [authorname, setAuthorname] = useState("");
    const [authorsurname, setAuthorsurname] = useState("");
    const [placeofbirth, setPlaceofbirth] = useState("");
    const [dateofbirth, setDateofbirth] = useState("");

    const onSubmitForm = async e => {
        e.preventDefault();
        try {
          const body = { authorname, authorsurname, placeofbirth, dateofbirth };
          const response = await fetch("http://localhost:5000/Authors", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body)
          });
    
          window.location = "http://localhost:3000/author";
        } catch (err) {
          console.error(err.message);
        }
      };
        
    return (
    <Fragment>
       <button class="btn btn-primary" onClick={() => (window.location = "http://localhost:3000/author")}>Author</button>
         <button class="btn btn-primary" onClick={() => (window.location = "http://localhost:3000/customer")}>Customer</button>
         <button class="btn btn-primary" onClick={() => (window.location = "http://localhost:3000/order")}>Order</button>
         <button class="btn btn-primary" onClick={() => (window.location = "http://localhost:3000/supplier")}>Supplier</button>
         <button class="btn btn-primary" onClick={() => (window.location = "http://localhost:3000/books")}>Books</button>
         <button class="btn btn-primary" onClick={() => (window.location = "http://localhost:3000/orderitem")}>OrderItem</button>
        <h1 className="text-center mt-5">Author</h1>
        <form className="d-flex" onSubmit={onSubmitForm}>
        <input type="text" className="formControl" value={authorname} onChange={e => setAuthorname(e.target.value)}></input>
        <input type="text" className="formControl" value={authorsurname} onChange={e => setAuthorsurname(e.target.value)}></input>
        <input type="text" className="formControl" value={placeofbirth} onChange={e => setPlaceofbirth(e.target.value)}></input>
        <input type="text" className="formControl" value={dateofbirth} onChange={e => setDateofbirth(e.target.value)}></input>
        <button className="btn btn-success">Add</button>
        </form>
    </Fragment>
    )
}


export default InputAuthor;