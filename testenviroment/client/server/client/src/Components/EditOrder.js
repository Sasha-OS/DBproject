import React, {Fragment, useState} from "react";

const EditOrder = ({order}) => {
    const [orderdate, setOrderdate] = useState(order.orderdate);
    const [totalamount, setTotalamount] = useState(order.totalamount);
    const [customerid, setCustomerid] = useState(order.customerid);
    //create order function to edit data in modal

    const updateOrder = async e => {
        e.preventDefault();
        try {
          const body = { orderdate, totalamount, customerid };
          const response = await fetch(
            `http://localhost:5000/Orders/${order.orderid}`,
            {
              method: "PUT",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(body)
            }
          );
    
          window.location = "http://localhost:3000/order";
        } catch (err) {
          console.error(err.message);
        }
      };

    return (
        <Fragment>
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target={`#id${order.orderid}`}>
          Edit
        </button>
        
       
        <div class="modal" id={`id${order.orderid}`} >
          <div class="modal-dialog">
            <div class="modal-content">
        
           
              <div class="modal-header">
                <h4 class="modal-title">Edit Order</h4>
                <button type="button" class="close" data-dismiss="modal" onClick={()=> {
                    setOrderdate(order.orderdate);
                    setTotalamount(order.totalamount);
                    setCustomerid(order.customerid);
                }}>&times;</button>
              </div>
        
  
              <div class="modal-body">
                <input type="text" className="formControl" value={orderdate} onChange={e => setOrderdate(e.target.value)}></input>
                <input type="text" className="formControl" value={totalamount} onChange={e => setTotalamount(e.target.value)}></input>
                <input type="text" className="formControl" value={customerid} onChange={e => setCustomerid(e.target.value)}></input>
              </div>
        
              <div class="modal-footer">
                <button type="button" class="btn btn-primary" data-dismiss="modal" onClick={e => updateOrder(e)}>Edit</button>
                <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
              </div>
        
            </div>
          </div>
        </div></Fragment>
    )
}

export default EditOrder;