const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

app.use(cors());
app.use(express.json());

//Routes//
//-----------------------------------
//create customer

app.post("/customers", async (req, res) => {
    try {
      const {  customername, customersurname, customerphone, customeraddress } = req.body;
      const newCustomer = await pool.query(
        'INSERT INTO "Customer" ( customername, customersurname, customerphone, customeraddress) VALUES($1, $2, $3, $4) RETURNING *',
        [ customername, customersurname, customerphone, customeraddress ]
      );
  
      res.json(newCustomer.rows[0]);
    } catch (err) {
      console.error(err.message);
    }
  });

//get all customers

app.get("/customers", async (req, res) => {
    try {
      const allCustomers = await pool.query('SELECT * FROM "Customer"');
      res.json(allCustomers.rows);
    } catch (err) {
      console.error(err.message);
    }
  });


//get customer

app.get("/customers/:id", async(req, res) => {
    try {
        const {id} = req.params;
        const customer =await pool.query('SELECT * FROM "Customer" WHERE customerid = $1', [id]);
        res.json(customer.rows[0]);
    } catch (error) {
        console.log(err.message);
        
    }
})

//update customer

app.put("/customers/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const { customername, customersurname, customerphone, customeraddress } = req.body;
      const updateCustomer = await pool.query(
        'UPDATE "Customer" SET customername = $1,customersurname=$2, customerphone=$3, customeraddress=$4   WHERE customerid = $5',
        [customername, customersurname, customerphone, customeraddress , id]
      );
  
      res.json("Customer was updated!");
    } catch (err) {
      console.error(err.message);
    }
  });
  

//delete customer
    app.delete("/customers/:id", async(req, res) => {
        try {
            const {id} = req.params;
            const deleteCustomer = await pool.query('DELETE FROM "Customer" WHERE customerid = $1',
            [id]);
            res.json("Customer was deleted")
        } catch (error) {
            console.log(err.message)
        }
    })
//--------------------------------
//
    app.get("/authors", async (req, res) => {
      try {
        const allAuthors = await pool.query('SELECT * FROM "Author"');
        res.json(allAuthors.rows);
      } catch (err) {
        console.error(err.message);
      }
    });

    app.post("/authors", async (req, res) => {
      try {
        const { authorname, authorsurname, placeofbirth, dateofbirth } = req.body;
        const newAuthor = await pool.query(
          'INSERT INTO "Author" (authorname, authorsurname, placeofbirth, dateofbirth) VALUES($1, $2, $3, $4) RETURNING *',
          [ authorname, authorsurname, placeofbirth, dateofbirth ]
        );
    
        res.json(newAuthor.rows[0]);
      } catch (err) {
        console.error(err.message);
      }
    });


    app.get("/authors/:id", async(req, res) => {
      try {
          const {id} = req.params;
          const author =await pool.query('SELECT * FROM "Author" WHERE authorid = $1', [id]);
          res.json(author.rows[0]);
      } catch (error) {
          console.log(err.message);
          
      }
  })

  app.put("/authors/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const { authorname, authorsurname, placeofbirth, dateofbirth } = req.body;
      const updateAuthor = await pool.query(
        'UPDATE "Author" SET authorname = $1,authorsurname=$2, placeofbirth=$3, dateofbirth=$4   WHERE authorid = $5',
        [authorname, authorsurname, placeofbirth, dateofbirth, id]
      );
  
      res.json("Author was updated!");
    } catch (err) {
      console.error(err.message);
    }
  });

  app.delete("/authors/:id", async(req, res) => {
    try {
        const {id} = req.params;
        const deleteAuthor = await pool.query('DELETE FROM "Author" WHERE authorid = $1',
        [id]);
        res.json("Author was deleted")
    } catch (error) {
        console.log(err.message)
    }
})
//-------------------------------
//supplier
app.get("/suppliers", async (req, res) => {
  try {
    const Allsuppliers = await pool.query('SELECT * FROM "Supplier"');
    res.json(Allsuppliers.rows);
  } catch (err) {
    console.error(err.message);
  }
});

app.post("/suppliers", async (req, res) => {
  try {
    const { phone, taxnumber, primarybankaccount } = req.body;
    const newSupplier = await pool.query(
      'INSERT INTO "Supplier" (phone, taxnumber, primarybankaccount) VALUES($1, $2, $3) RETURNING *',
      [ phone, taxnumber, primarybankaccount ]
    );

    res.json(newSupplier.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});


app.get("/suppliers/:id", async(req, res) => {
  try {
      const {id} = req.params;
      const supplier =await pool.query('SELECT * FROM "Supplier" WHERE supplierid = $1', [id]);
      res.json(supplier.rows[0]);
  } catch (error) {
      console.log(err.message);
      
  }
})

app.put("/suppliers/:id", async (req, res) => {
try {
  const { id } = req.params;
  const { phone, taxnumber, primarybankaccount } = req.body;
  const updateAuthor = await pool.query(
    'UPDATE "Supplier" SET phone = $1,taxnumber=$2, primarybankaccount=$3  WHERE supplierid = $4',
    [phone, taxnumber, primarybankaccount, id]
  );

  res.json("Supplier was updated!");
} catch (err) {
  console.error(err.message);
}
});

app.delete("/suppliers/:id", async(req, res) => {
try {
    const {id} = req.params;
    const supplierDelete = await pool.query('DELETE FROM "Supplier" WHERE supplierid = $1',
    [id]);
    res.json("Supplier was deleted")
} catch (error) {
    console.log(err.message)
}
})

//--------------------------------
//order

app.get("/orders", async (req, res) => {
  try {
    const allorders = await pool.query('SELECT * FROM "Order"');
    res.json(allorders.rows);
  } catch (err) {
    console.error(err.message);
  }
});

app.post("/orders", async (req, res) => {
  try {
    const { orderdate, totalamount, customerid } = req.body;
    const newOrder = await pool.query(
      'INSERT INTO "Order" (orderdate, totalamount, customerid) VALUES($1, $2, $3) RETURNING *',
      [ orderdate, totalamount, customerid ]
    );

    res.json(newOrder.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});


app.get("/orders/:id", async(req, res) => {
  try {
      const {id} = req.params;
      const order =await pool.query('SELECT * FROM "Order" WHERE orderid = $1', [id]);
      res.json(order.rows[0]);
  } catch (error) {
      console.log(err.message);
      
  }
})

app.put("/orders/:id", async (req, res) => {
try {
  const { id } = req.params;
  const { orderdate, totalamount, customerid } = req.body;
  const updateOrder = await pool.query(
    'UPDATE "Order" SET orderdate = $1,totalamount=$2, customerid=$3  WHERE orderid = $4',
    [orderdate, totalamount, customerid, id]
  );

  res.json("Order was updated!");
} catch (err) {
  console.error(err.message);
}
});

app.delete("/orders/:id", async(req, res) => {
try {
    const {id} = req.params;
    const orderDelete = await pool.query('DELETE FROM "Order" WHERE orderid = $1',
    [id]);
    res.json("Order was deleted")
} catch (error) {
    console.log(err.message)
}
})

//--------------------------------


app.post("/books", async (req, res) => {
  try {
    const {  supplierid, authorid, unitprice, isbn, circulation, yearofpublication } = req.body;
    const newBook = await pool.query(
      'INSERT INTO "Books" ( supplierid, authorid, unitprice, isbn, circulation, yearofpublication) VALUES($1, $2, $3, $4, $5, $6) RETURNING *',
      [ supplierid, authorid, unitprice, isbn, circulation, yearofpublication ]
    );

    res.json(newBook.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

//get all books

app.get("/books", async (req, res) => {
  try {
    const allBooks = await pool.query('SELECT * FROM "Books"');
    res.json(allBooks.rows);
  } catch (err) {
    console.error(err.message);
  }
});


//get book

app.get("/books/:id", async(req, res) => {
  try {
      const {id} = req.params;
      const book =await pool.query('SELECT * FROM "Books" WHERE bookid = $1', [id]);
      res.json(book.rows[0]);
  } catch (error) {
      console.log(err.message);
      
  }
})

//update customer

app.put("/books/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { supplierid, authorid, unitprice, isbn, circulation, yearofpublication } = req.body;
    const updateCustomer = await pool.query(
      'UPDATE "Books" SET supplierid =$1,authorid=$2, unitprice=$3, isbn=$4, circulation=$5, yearofpublication=$6  WHERE bookid = $7',
      [supplierid, authorid, unitprice, isbn, circulation, yearofpublication , id]
    );

    res.json("Book was updated!");
  } catch (err) {
    console.error(err.message);
  }
});


//delete customer
  app.delete("/books/:id", async(req, res) => {
      try {
          const {id} = req.params;
          const deleteBook = await pool.query('DELETE FROM "Books" WHERE bookid = $1',
          [id]);
          res.json("Book was deleted")
      } catch (error) {
          console.log(err.message)
      }
  })

//--------------------------------


app.post("/orderitems", async (req, res) => {
  try {
    const {  orderid, bookid, unitprice, quantity } = req.body;
    const newOrderItem = await pool.query(
      'INSERT INTO "OrderItem" ( orderid, bookid, unitprice, quantity) VALUES($1, $2, $3, $4) RETURNING *',
      [ orderid, bookid, unitprice, quantity  ]
    );

    res.json(newOrderItem.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

//get all orderitems

app.get("/orderitems", async (req, res) => {
  try {
    const allOrderItems = await pool.query('SELECT * FROM "OrderItem"');
    res.json(allOrderItems.rows);
  } catch (err) {
    console.error(err.message);
  }
});


//get orderitems

app.get("/orderitems/:id", async(req, res) => {
  try {
      const {id} = req.params;
      const orderitem =await pool.query('SELECT * FROM "OrderItem" WHERE orderitemid = $1', [id]);
      res.json(orderitem.rows[0]);
  } catch (error) {
      console.log(err.message);
      
  }
})

//update orderitems

app.put("/orderitems/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { orderid, bookid, unitprice, quantity } = req.body;
    const updateCustomer = await pool.query(
      'UPDATE "OrderItem" SET orderid = $1,bookid=$2, unitprice=$3, quantity=$4   WHERE orderitemid = $5',
      [orderid, bookid, unitprice, quantity , id]
    );

    res.json("OrderItem was updated!");
  } catch (err) {
    console.error(err.message);
  }
});


//delete orderitems
  app.delete("/orderitems/:id", async(req, res) => {
      try {
          const {id} = req.params;
          const deleteOrderItem = await pool.query('DELETE FROM "OrderItem" WHERE orderitemid = $1',
          [id]);
          res.json("OrderItem was deleted")
      } catch (error) {
          console.log(err.message)
      }
  })


app.listen(5000, ()=> {
    console.log("serves has started")
});
