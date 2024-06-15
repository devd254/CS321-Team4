import React, { useState } from 'react';
import { DataTable, TableContainer, TableToolbar, TableToolbarSearch, TableCell, Button } from 'carbon-components-react';
import 'carbon-components/css/carbon-components.min.css';


// Sample items
const initialItems = [
  { id: '1', warehouseNumber: '1', productId: '1', productName: "Levi's Jeans", price: '15', quantity: '20', size: 'medium', brand: "Levi's", type: 'Clothing' },
  { id: '2', warehouseNumber: '1', productId: '2', productName: 'Samsung TV', price: '25', quantity: '35', size: 'large', brand: 'Samsung', type: 'Electronics' },
  { id: '3', warehouseNumber: '1', productId: '3', productName: 'Dell Monitor', price: '35', quantity: '50', size: 'extra large', brand: 'Dell', type: 'Computers' },
  { id: '4', warehouseNumber: '1', productId: '4', productName: 'Sony Headphones', price: '45', quantity: '25', size: 'small', brand: 'Sony', type: 'Audio' },
  { id: '5', warehouseNumber: '1', productId: '5', productName: 'Nike Running Shoes', price: '55', quantity: '40', size: 'medium', brand: 'Nike', type: 'Footwear' },
  { id: '6', warehouseNumber: '2', productId: '1', productName: "Levi's Jeans", price: '15', quantity: '20', size: 'medium', brand: "Levi's", type: 'Clothing' },
  { id: '7', warehouseNumber: '2', productId: '6', productName: 'Adidas Jacket', price: '20', quantity: '60', size: 'large', brand: 'Adidas', type: 'Clothing' },
  { id: '8', warehouseNumber: '2', productId: '7', productName: 'Apple iPad', price: '30', quantity: '45', size: 'extra large', brand: 'Apple', type: 'Technology' },
  { id: '9', warehouseNumber: '2', productId: '8', productName: 'Lego Set', price: '40', quantity: '30', size: 'small', brand: 'Lego', type: 'Toys' },
  { id: '10', warehouseNumber: '2', productId: '9', productName: 'Sony Headphones', price: '45', quantity: '25', size: 'small', brand: 'Sony', type: 'Audio' },
  { id: '11', warehouseNumber: '3', productId: '1', productName: "Levi's Jeans", price: '15', quantity: '20', size: 'medium', brand: "Levi's", type: 'Clothing' },
  { id: '12', warehouseNumber: '3', productId: '3', productName: 'Dell Monitor', price: '35', quantity: '50', size: 'extra large', brand: 'Dell', type: 'Computers' },
  { id: '13', warehouseNumber: '3', productId: '10', productName: 'Nestle Cookies', price: '25', quantity: '90', size: 'extra large', brand: 'Nestle', type: 'Food' },
  { id: '14', warehouseNumber: '3', productId: '11', productName: 'Puma Sports Shoes', price: '35', quantity: '70', size: 'small', brand: 'Puma', type: 'Footwear' },
  { id: '15', warehouseNumber: '3', productId: '12', productName: 'Bosch Toolkit', price: '45', quantity: '50', size: 'medium', brand: 'Bosch', type: 'Tools' },
];

const Management = () => {
  const [warehouseNumber, setWarehouseNumber] = useState('');
  const [items, setItems] = useState(initialItems);

  const handleChange = (e) => {
    const value = e.target.value;
    setWarehouseNumber(value);

    const filtered = initialItems.filter((item) => item.warehouseNumber.includes(value));
    setItems(filtered);
  };

  const handleUpdate = (rowId) => {
    const newPrice = prompt('What would you like the new price to be?');
    if (newPrice !== null) {
      // Find the product with the given row id and update the price
      const product = items.find((item) => item.id === rowId);
      const updatedItems = items.map((item) =>
        item.id === rowId ? { ...item, price: newPrice } : item
      );
      setItems(updatedItems);
      console.log(`Updated item price with id: ${product.productId}`);
    } else {
      console.log('Update cancelled');
    }
  };

  const handleRestock = (rowId) => {
    const newQuantity = prompt('How many items would you like to restock?');
    if (newQuantity !== null) {
      // Find the product with the given row id and update the quantity
      const product = items.find((item) => item.id === rowId);
      const updatedItems = items.map((item) =>
        item.id === rowId ? { ...item, quantity: parseInt(item.quantity) + parseInt(newQuantity) } : item
      );
      setItems(updatedItems);
      console.log(`Restocked item with id: ${product.productId}`);
    } else {
      console.log('Restock cancelled');
    }
  };

  const handleRemove = (rowId) => {
    const removeQuantity = prompt('How many items would you like to remove?');
    if (removeQuantity !== null) {
      // Find the product with the given row id and update the quantity
      const product = items.find((item) => item.id === rowId);
      const updatedItems = items.map((item) =>
        item.id === rowId ? { ...item, quantity: parseInt(item.quantity) - parseInt(removeQuantity) } : item
      );
      setItems(updatedItems);
      console.log(`Removed items from item with id: ${product.productId}`);
    } else {
      console.log('Remove cancelled');
    }
  };

  return (
    <div className="management">
      <DataTable
        rows={items}
        headers={[
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
                      <Button onClick={() => handleUpdate(row.id)} className="myButton">Update Price</Button>
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
