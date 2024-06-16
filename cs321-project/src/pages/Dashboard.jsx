import React, { useState, useEffect } from 'react';
import { Search } from '@carbon/react';
import { DataTable } from 'carbon-components-react';
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, get } from "firebase/database";

const {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  TableHeader,
} = DataTable;


const rows1 = [
  {
    id: '1',
    orderID: 'Z2h61h',
    action: 'Transfer',
    timestamp: '06/15/2024 17:32'
  },
  {
    id: '2',
    orderID: 'B3s49x',
    action: 'Add',
    timestamp: '06/15/2024 17:05'
  },
  {
    id: '3',
    orderID: 'A9w18l',
    action: 'Transfer',
    timestamp: '06/15/2024 16:48'
  },
  {
    id: '4',
    orderID: 'L7r53z',
    action: 'Manage',
    timestamp: '06/15/2024 16:11'
  },
  {
    id: '5',
    orderID: 'V6h49h',
    action: 'Add',
    timestamp: '06/15/2024 15:59'
  },
  {
    id: '6',
    orderID: 'L8t32y',
    action: 'Transfer',
    timestamp: '06/14/2024 16:18'
  },
 ];

 const rows2 = [
  {
    id: '1',
    orderID: 'H4f77r',
    action: 'Manage',
    timestamp: '06/15/2024 17:09'
  },
  {
    id: '2',
    orderID: 'e4T32i',
    action: 'Add',
    timestamp: '06/15/2024 17:02'
  },
  {
    id: '3',
    orderID: 'M0W20k',
    action: 'Transfer',
    timestamp: '06/15/2024 12:48'
  },
  {
    id: '4',
    orderID: 'q1p34F',
    action: 'Add',
    timestamp: '06/15/2024 11:11'
  },
  {
    id: '5',
    orderID: 'g7M80w',
    action: 'Transfer',
    timestamp: '06/15/2024 11:07'
  },
  {
    id: '6',
    orderID: 'd8R33y',
    action: 'Manage',
    timestamp: '06/15/2024 9:25'
  },
 ]

 const rows3 = [
  {
    id: '1',
    orderID: 'L4k26v',
    action: 'Transfer',
    timestamp: '06/15/2024 14:34'
  },
  {
    id: '2',
    orderID: 't3P02U',
    action: 'Manage',
    timestamp: '06/15/2024 14:00'
  },
  {
    id: '3',
    orderID: 'm3r41m',
    action: 'Manage',
    timestamp: '06/15/2024 13:55'
  },
  {
    id: '4',
    orderID: 'o2e56S',
    action: 'Add',
    timestamp: '06/15/2024 10:30'
  },
  {
    id: '5',
    orderID: 'y0d22g',
    action: 'Add',
    timestamp: '06/15/2024 10:16'
  },
  {
    id: '6',
    orderID: 'A5A79j',
    action: 'Add',
    timestamp: '06/15/2024 10:02'
  },
 ]


 const headers = [
  {
    key: 'orderID',
    header: '          Action ID',
  },
  {
    key: 'action',
    header: '         Action',
  },
  {
    key: 'timestamp',
    header: 'Timestamp'
  },
  ];
 

const SearchBar = ({onSearch}) => {

  const handleSearch = (event) => {
    onSearch(event.target.value);
  };

  return (
  <div style={{left: '0', right: '0', position: 'fixed', top: 100 }}>
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
      onChange={handleSearch}
    />
  </div>
  )
}


const ActivityTable = ({rows}) => {
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

const Dashboard = () => {
  const [searchValue, setSearchValue] = useState('');
  const [displayedRows, setDisplayedRows] = useState(rows1);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [stockValue, setStockValue] = useState(0);
  const [profit, setProfit] = useState(0);

  useEffect(() => {
    if (!searchValue) {
      return;
    }
    else if (searchValue === '3') {
      setDisplayedRows(rows3);
      setProfit(15125.25)
    } else if (searchValue == '2') {
      setDisplayedRows(rows2);
      setProfit(22348.47)
    }
    else {
      setDisplayedRows(rows1);
      setProfit(14926.01)
    }
  }, [searchValue]);

  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const snapshot = await get(ref(database, `warehouse/${searchValue}/products`));
        if (snapshot.exists()) {
          const products = snapshot.val();
          let total = 0;
          let value = 0;
          for (const productId in products) {
            total += parseFloat(products[productId].quantity);
            value += parseFloat(products[productId].price);
          }
          setTotalQuantity(total);
          setStockValue(value);
        } else {
          setTotalQuantity(0);
          setStockValue(0);
        }
      } catch (error) {
        console.error(error);
        setTotalQuantity(0);
        setStockValue(0);
      }
    };

    if (searchValue) {
      fetchData();
    }
  }, [searchValue]);

  return (
    <div style={{ paddingTop: '0px' }}>
      <SearchBar onSearch={setSearchValue}/>
      <div className="info-boxes">
        <div className="info-box">
          <strong>Stock Value</strong>
          <div className = "bottom-text"> ${stockValue.toFixed(2)}
          </div>
        </div>
        <div className="info-box">
          <strong>Stock Quantity</strong>
          <div className = "bottom-text"> {totalQuantity} units
          </div>
        </div>
        <div className="info-box">
          <strong>Gross Profit</strong>
          <div className = "bottom-text"> ${profit}
          </div>
        </div>
      </div>
      <div className="activity-table">
      <ActivityTable rows={displayedRows}/>
      </div>
    </div>
  );
};

export default Dashboard