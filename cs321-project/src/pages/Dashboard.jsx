import React, { useState } from 'react';
import { Search } from '@carbon/react';
import { DataTable } from 'carbon-components-react';
const {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  TableHeader,
} = DataTable;

/*import {
  DataTable,
  Table,
  TableHead,
  TableRow,
  TableHeader,
  TableBody,
  TableCell,
} from '@carbon/react';*/


const rows = [
  {
    id: 'a',
    orderID: '001',
    action: 'Add'
  },
  {
    id: 'b',
    orderID: '002',
    action: 'Update'
  },
  {
    id: 'c',
    orderID: '003',
    action: 'Transfer'
  },
 ];
 
 
 const headers = [
  {
    key: 'orderID',
    header: '          Order ID',
  },
  {
    key: 'action',
    header: '         Action',
  },
  ];
 

const SearchBar = () => {
  return (
  <div style={{left: '0', right: '0', position: 'fixed', top: 100 }}
  >
    <Search
      closeButtonLabelText="Clear search input"
      defaultValue=""
      id="search-playground-1"
      labelText="Search "
      placeholder="Warehouse #"
      playgroundWidth={300}
      role="searchbox"
      size="md"
      type="text"
    />
  </div>
  )
}


const ActivityTable = () => {
  const rowStyle = {
    height: '50px' // Adjust the height to make rows wider
  };

  return (
    
    <DataTable 
      rows={rows}
      headers={headers}
      render={({ rows, headers, getHeaderProps }) => (
        <div className='table-container'>
        <TableContainer title="Latest Activity" >
          <Table className='table' >
            <TableHead>
              <TableRow>
                {headers.map(header => (
                  <TableHeader {...getHeaderProps({ header })}
                    >
                    {header.header}
                  </TableHeader>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map(row => (
                <TableRow key={row.id} style={rowStyle}>
                  {row.cells.map(cell => (
                    <TableCell key={cell.id} > {cell.value}</TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        </div>
      )}
    />
   
  );
}


const Dashboard = () => {

  

  return (
    <div style={{ paddingTop: '0px' }}>
      <SearchBar />
      <div className="info-boxes">
        <div className="info-box">
          <strong>Stock Value</strong>
          <div className = "bottom-text">
          $25000
          </div>
        </div>
        <div className="info-box">
          <strong>Stock Quantity</strong>
          <div className = "bottom-text">
          3500 units
          </div>
        </div>
        <div className="info-box">
          <strong>Gross Profit</strong>
          <div className = "bottom-text">
          $15000
          </div>
        </div>
      </div>
      <div className="activity-table">
      <ActivityTable />
      </div>
    </div>
  );
};

export default Dashboard