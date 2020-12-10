import React, {Fragment, useEffect, useState} from "react";

import EditAuthor from './EditAuthor';
const ListAuthors = () => {
    const [authors, setAuthors] = useState([]);
    //detele author function

    const deleteAuthor = async id => {
        try {
          const deleteAuthor = await fetch(`http://localhost:5000/Authors/${id}`, {
            method: "DELETE"
          });
    
          setAuthors(authors.filter(author => author.authorid !== id));
        } catch (err) {
          console.error(err.message);
        }
      };
    const getAuthors = async () => {      
        try {
          const response = await fetch("http://localhost:5000/Authors");
          const jsonData = await response.json();
    
          setAuthors(jsonData);
        } catch (err) {
          console.error(err.message);
        }
      };
    useEffect(()=> {
        getAuthors();
    }, []);
    return (
    <Fragment>
        {" "}
        <table class="table mt-5 text-center">
    <thead>
      <tr>
        <th>AuthorId</th>
        <th>AuthorName</th>
        <th>AuthorSurname</th>
        <th>PlaceOfBirth</th>
        <th>DateOfBirth</th>
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
      {authors.map(author => (
          <tr key={author.authorid}>
              <td>{author.authorid}</td>
              <td>{author.authorname}</td>
              <td>{author.authorsurname}</td>
              <td>{author.placeofbirth}</td>
              <td>{author.dateofbirth}</td>
              <td>
                  <EditAuthor author = {author}></EditAuthor>
              </td>
              <td><button class="btn btn-danger" onClick={() => deleteAuthor(author.authorid)}>Delete</button></td>
          </tr>
      ))}
      
    </tbody>
  </table>
    </Fragment>)
}

export default ListAuthors;