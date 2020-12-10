import React, {Fragment, useEffect, useState} from "react";

import EditBook from './EditBook';
const ListBooks = () => {
    const [books, setBooks] = useState([]);
    //detele customer function

    const deleteBooks = async id => {
        try {
          const deleteBooks = await fetch(`http://localhost:5000/Books/${id}`, {
            method: "DELETE"
          });
    
          setBooks(books.filter(book => book.bookid !== id));
        } catch (err) {
          console.error(err.message);
        }
      };
    const getBooks = async () => {      
        try {
          const response = await fetch("http://localhost:5000/Books");
          const jsonData = await response.json();
    
          setBooks(jsonData);
        } catch (err) {
          console.error(err.message);
        }
      };
    useEffect(()=> {
        getBooks();
    }, []);
    return (
    <Fragment>
        {" "}
        <table class="table mt-5 text-center">
    <thead>
      <tr>
        <th>bookid</th>
        <th>supplierid</th>
        <th>authorid</th>
        <th>unitprice</th>
        <th>isbn</th>
        <th>circulation</th>
        <th>yearofpublication</th>
        <th>Edit</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      {/*<tr>
        <td>John</td>
        <td>Doe</td>
        <td>john@example.com</td>
      </tr> */}  
      {books.map(book => (
          <tr key={book.bookid}>
              <td>{book.bookid}</td>
              <td>{book.supplierid}</td>
              <td>{book.authorid}</td>
              <td>{book.unitprice}</td>
              <td>{book.isbn}</td>
              <td>{book.circulation}</td>
              <td>{book.yearofpublication}</td>
              <td>
                  <EditBook book = {book}></EditBook>
              </td>
              <td><button class="btn btn-danger" onClick={() => deleteBooks(book.bookid)}>Delete</button></td>
          </tr>
      ))}
      
    </tbody>
  </table>
    </Fragment>)
}

export default ListBooks;