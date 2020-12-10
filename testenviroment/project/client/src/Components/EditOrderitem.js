import React, {Fragment, useState} from "react";

const EditOrderitem = ({orderitem}) => {
    const [orderid, setOrderid] = useState(orderitem.orderid);
    const [bookid, setBookid] = useState(orderitem.bookid);
    const [unitprice, setUnitprice] = useState(orderitem.unitprice);
    const [quantity, setQuantity] = useState(orderitem.quantity);

    //create order function to edit data in modal

    const updateOrderitem = async e => {
        e.preventDefault();
        try {
          const body = { orderid, bookid, unitprice, quantity };
          const response = await fetch(
            `http://localhost:5000/Orderitems/${orderitem.orderitemid}`,
            {
              method: "PUT",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(body)
            }
          );
    
          window.location = "http://localhost:3000/orderitem";
        } catch (err) {
          console.error(err.message);
        }
      };

    return (
        <Fragment>
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target={`#id${orderitem.orderitemid}`}>
          Edit
        </button>
        
       
        <div class="modal" id={`id${orderitem.orderitemid}`} >
          <div class="modal-dialog">
            <div class="modal-content">
        
           
              <div class="modal-header">
                <h4 class="modal-title">Edit OrderItem</h4>
                <button type="button" class="close" data-dismiss="modal" onClick={()=> {
                    setOrderid(orderitem.orderid);
                    setBookid(orderitem.bookid);
                    setUnitprice(orderitem.unitprice);
                    setQuantity(orderitem.quantity)
                }}>&times;</button>
              </div>
        
  
              <div class="modal-body">
                <input type="text" className="formControl" value={orderid} onChange={e => setOrderid(e.target.value)}></input>
                <input type="text" className="formControl" value={bookid} onChange={e => setBookid(e.target.value)}></input>
                <input type="text" className="formControl" value={unitprice} onChange={e => setUnitprice(e.target.value)}></input>
                <input type="text" className="formControl" value={quantity} onChange={e => setQuantity(e.target.value)}></input>

              </div>
        
              <div class="modal-footer">
                <button type="button" class="btn btn-primary" data-dismiss="modal" onClick={e => updateOrderitem(e)}>Edit</button>
                <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
              </div>
        
            </div>
          </div>
        </div></Fragment>
    )
}

export default EditOrderitem;