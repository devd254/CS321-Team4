import React, { useState } from 'react';
import { DataTable, TableContainer, TableToolbar, TableToolbarSearch, TableCell, Button } from 'carbon-components-react';
import 'carbon-components/css/carbon-components.min.css';

//sample items
const initialItems = [
  { id: '1', name: 'Item 1', warehouse: '101', quantity: 10 },
  { id: '2', name: 'Item 2', warehouse: '102', quantity: 20 },
  { id: '3', name: 'Item 3', warehouse: '103', quantity: 15 },
];

const Management = () => {
  const [warehouseNumber, setWarehouseNumber] = useState('');
  const [filteredItems, setFilteredItems] = useState(initialItems);

  const handleChange = (e) => {
    const value = e.target.value;
    setWarehouseNumber(value);

    const filtered = initialItems.filter((item) => item.warehouse.includes(value));
    setFilteredItems(filtered);
  };

  const handleUpdate = (id) => {
    // Handle update logic
    console.log(`Update item with id: ${id}`);
  };

  const handleRestock = (id) => {
    // Handle restock logic
    console.log(`Restock item with id: ${id}`);
  };

  const handleRemove = (id) => {
    // Handle remove logic
    console.log(`Remove item with id: ${id}`);
  };

  return (
    <div class="management">
      <DataTable
        rows={filteredItems}
        headers={[
          { header: 'Product ID', key: 'id' },
          { header: 'Product Name', key: 'name' },
          { header: 'Warehouse', key: 'warehouse' },
          { header: 'Quantity', key: 'quantity' },
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
                  <tr {...getRowProps({ row })} key={row.id}>
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
