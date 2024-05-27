import React from 'react'
import { Search } from '@carbon/react';
import '../index.css';
import {
  DataTable,
  Table,
  TableHead,
  TableRow,
  TableHeader,
  TableBody,
  TableCell,
} from '@carbon/react';

const rows = [
  {
    id: 'a',
    orderNum: '001',
    action: 'Add'
  },
  {
    id: 'b',
    orderNum: '002',
    action: 'Update'
  },
  {
    id: 'c',
    orderNum: '003',
    action: 'Transfer'
  },
];

const headers = [
  {
    key: 'orderNum',
    header: 'Order #',
  },
  {
    key: 'action',
    header: 'Action',
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
  return (
    <DataTable rows={rows} headers={headers}>
  {({ rows, headers, getTableProps, getHeaderProps, getRowProps }) => (
    <Table {...getTableProps()}>
      <TableHead>
        <TableRow>
          {headers.map((header) => (
            <TableHeader {...getHeaderProps({ header })}>
              {header.header}
            </TableHeader>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow {...getRowProps({ row })}>
            {row.cells.map((cell) => (
              <TableCell key={cell.id}>{cell.value}</TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )}
</DataTable>
  );
}


const Dashboard = () => {
  return (
    <div style={{ paddingTop: '0px' }}>
      <SearchBar />
      <div className="info-boxes">
        <div className="info-box">
          <h2>Total Stock Value</h2>
          <p>$10,000</p>
        </div>
        <div className="info-box">
          <h2>Total Stock Quantity</h2>
          <p>150 units</p>
        </div>
        <div className="info-box">
          <h2>Total Profit</h2>
          <p>$5,000</p>
        </div>
      </div>
      <h2>Latest Activity</h2>
      <div className="activity-table">
        <ActivityTable />
      </div>
    </div>
  );
};

export default Dashboard