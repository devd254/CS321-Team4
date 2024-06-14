import React, { useState, useEffect } from 'react';
import { DataTable, TableContainer, TableToolbar, TableToolbarSearch, TableCell, Button } from 'carbon-components-react';
import 'carbon-components/css/carbon-components.min.css';
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, get } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDl5QW8q32mb73NIZ4bsdbvxWhTsOVsqAY",
  authDomain: "cs321-54da7.firebaseapp.com",
  projectId: "cs321-54da7",
  storageBucket: "cs321-54da7.appspot.com",
  messagingSenderId: "962075931184",
  appId: "1:962075931184:web:2df37385a444bc7c5e73f5",
  measurementId: "G-6DF1PBCBTN",
  databaseURL: "https://cs321-54da7-default-rtdb.firebaseio.com"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

/*
 More Documentation for database stuff here (MUST READ)
 https://firebase.google.com/docs/database/web/read-and-write?authuser=0&hl=en#web
*/
async function sendData (warehouseNumber, productName, productId, price, quantity, size, brand, type, description) {
  try{
    console.log("Initilization and database received");
    set(ref(database, 'warehouse/' + warehouseNumber), {
      productId: productId,
      productName: productName,
      price: price,
      quantity: quantity,
      size: size,
      brand: brand,
      type: type,
      description: description,
    });
    console.log("Data sent");
    console.log();
  }
  catch(error){
    console.log(error);
  }
}

async function getData (warehouseNumber) {
  // const dbRef = ref(database);
  get(ref(database, `warehouse/${warehouseNumber}`)).then((snapshot) => {
    if (snapshot.exists()) {
      console.log(snapshot.val());
    } else {
      console.log("No data available");
    }
  }).catch((error) => {
    console.error(error);
  });
}

//sample items
const initialItems = [
  {id: '1', warehouseNumber: '1', productId: '18927', productName: 'Shirt', price: '10', quantity: '100', size: 'M', brand: 'Nike', type: 'Clothing'},
  {id: '2', warehouseNumber: '1', productId: '22728', productName: 'Pants', price: '20', quantity: '50', size: 'L', brand: 'Adidas', type: 'Clothing'},
  {id: '3', warehouseNumber: '2', productId: '18927', productName: 'Shirt', price: '10', quantity: '100', size: 'M', brand: 'Nike', type: 'Clothing'},
];

const Management = () => {

  const [warehouseNumber, setWarehouseNumber] = useState('');
  const [filteredItems, setFilteredItems] = useState(initialItems);

  const handleChange = (e) => {
    const value = e.target.value;
    setWarehouseNumber(value);

    const filtered = initialItems.filter((item) => item.warehouseNumber.includes(value));
    setFilteredItems(filtered);
  };

  const handleUpdate = (productId) => {
    // Handle update logic
    console.log(`Update item with id: ${productId}`);
  };

  const handleRestock = (productId) => {
    // Handle restock logic
    console.log(`Restock item with id: ${productId}`);
  };

  const handleRemove = (productId) => {
    // Handle remove logic
    console.log(`Remove item with id: ${productId}`);
  };

  return (
    <div className="management">
      <DataTable
        rows={filteredItems}
        headers={[ //warehouseNumber, productId, productName, price, quantity, size, brand, type
          { header: 'Warehouse', key: 'warehouseNumber' },
          { header: 'Product ID', key: 'productId' },
          { header: 'Product Name', key: 'productName' },
          { header: 'Price($)', key: 'price' },
          { header: 'Quantity', key: 'quantity' },
          { header: 'Size', key: 'size' },
          { header: 'Brand', key: 'brand' },
          { header: 'Type', key: 'type' },
        ]}
        render={({ rows, headers, getRowProps }) => (
          <TableContainer title="Management">
            <TableToolbar>
              <TableToolbarSearch onChange={handleChange} />
            </TableToolbar>
            <table>
              <thead>
                <tr>
                  {headers.map((header) => (
                    <th key={header.key} className="headerCell">{header.header}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={row.id}>
                    {row.cells.map((cell) => (
                      <TableCell key={cell.id} className='DataTableCell'>{cell.value}</TableCell>
                    ))}
                    <TableCell>
                      <Button onClick={() => handleUpdate(row.id)} className="myButton">Update</Button>
                      <Button onClick={() => handleRestock(row.id)} className="myButton">Restock</Button>
                      <Button onClick={() => handleRemove(row.id)} className="myButton">Remove</Button>
                    </TableCell>
                  </tr>
                ))}
              </tbody>
            </table>
          </TableContainer>
        )}
      />
    </div>
  );
};

export default Management;
