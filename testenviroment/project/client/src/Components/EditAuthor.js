import React, {Fragment, useState} from "react";

const EditAuthor = ({author}) => {
    const [authorname, setAuthorname] = useState(author.authorname);
    const [authorsurname, setAuthorsurname] = useState(author.authorsurname);
    const [placeofbirth, setPlaceofbirth] = useState(author.placeofbirth);
    const [dateofbirth, setDateofbirt] = useState(author.dateofbirth);
    //create edit function to edit data in modal

    const updateAuthor = async e => {
        e.preventDefault();
        try {
          const body = { authorname, authorsurname, placeofbirth, dateofbirth  };
          const response = await fetch(
            `http://localhost:5000/Authors/${author.authorid}`,
            {
              method: "PUT",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(body)
            }
          );
    
          window.location = "http://localhost:3000/author";
        } catch (err) {
          console.error(err.message);
        }
      };

    return (
        <Fragment>
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target={`#id${author.authorid}`}>
          Edit
        </button>
        
       
        <div class="modal" id={`id${author.authorid}`} >
          <div class="modal-dialog">
            <div class="modal-content">
        
           
              <div class="modal-header">
                <h4 class="modal-title">Edit Author</h4>
                <button type="button" class="close" data-dismiss="modal" onClick={()=> {
                    setAuthorname(author.authorname);
                    setAuthorsurname(author.authorsurname);
                    setPlaceofbirth(author.placeofbirth);
                    setDateofbirt(author.dateofbirth);
                }}>&times;</button>
              </div>
        
  
              <div class="modal-body">
                <input type="text" className="formControl" value={authorname} onChange={e => setAuthorname(e.target.value)}></input>
                <input type="text" className="formControl" value={authorsurname} onChange={e => setAuthorsurname(e.target.value)}></input>
                <input type="text" className="formControl" value={placeofbirth} onChange={e => setPlaceofbirth(e.target.value)}></input>
                <input type="text" className="formControl" value={dateofbirth} onChange={e => setDateofbirt(e.target.value)}></input>
              </div>
        
              <div class="modal-footer">
                <button type="button" class="btn btn-primary" data-dismiss="modal" onClick={e => updateAuthor(e)}>Edit</button>
                <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
              </div>
        
            </div>
          </div>
        </div></Fragment>
    )
}

export default EditAuthor;