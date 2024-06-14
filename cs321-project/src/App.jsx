import React from "react"
import './App.css'
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Navbar from './components/Navbar'
import Dashboard from './pages/Dashboard'
import Management from './pages/Management'
import Add from './pages/Add'
import Transfer from './pages/Transfer'
import Reports from './pages/Reports'

// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getDatabase, ref, set, get } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurement Id is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDl5QW8q32mb73NIZ4bsdbvxWhTsOVsqAY",
//   authDomain: "cs321-54da7.firebaseapp.com",
//   projectId: "cs321-54da7",
//   storageBucket: "cs321-54da7.appspot.com",
//   messagingSenderId: "962075931184",
//   appId: "1:962075931184:web:2df37385a444bc7c5e73f5",
//   measurementId: "G-6DF1PBCBTN",
//   databaseURL: "https://cs321-54da7-default-rtdb.firebaseio.com"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// const database = getDatabase(app);

/*
 More Documentation for database stuff here (MUST READ)
 https://firebase.google.com/docs/database/web/read-and-write?authuser=0&hl=en#web
*/
// async function sendData (warehouseNumber, productName, productId, price, quantity, size, brand, type, description) {
//   try{
//     console.log("Initilization and database received");
//     set(ref(database, 'warehouse/' + warehouseNumber), {
//       productId: productId,
//       productName: productName,
//       price: price,
//       quantity: quantity,
//       size: size,
//       brand: brand,
//       type: type,
//       description: description,
//     });
//     console.log("Data sent");
//     console.log();
//   }
//   catch(error){
//     console.log(error);
//   }
// }

// async function getData (warehouseNumber) {
//   // const dbRef = ref(database);
//   get(ref(database, `warehouse/${warehouseNumber}`)).then((snapshot) => {
//     if (snapshot.exists()) {
//       console.log(snapshot.val());
//     } else {
//       console.log("No data available");
//     }
//   }).catch((error) => {
//     console.error(error);
//   });
// }


function App() {
  // useEffect(() => {
  //   sendData("2", "High Performance Shoe", "5", "20", "15", "medium", "Nike", "Sporting Goods", "This shoe is designed for high performance");
  //   getData("1");
  // }, []);
  return (
    <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />}/>
          <Route path="/management" element={<Management />} />
          <Route path="/add" element={<Add />} />
          <Route path="/transfer" element={<Transfer />} />
          <Route path="/reports" element={<Reports />} />
        </Routes>
    </Router>
  )
}
export default App
