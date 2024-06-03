import {useEffect, React} from "react"
import './App.css'
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Navbar from './components/Navbar'
import Dashboard from './pages/Dashboard'
import Management from './pages/Management'
import Add from './pages/Add'
import Transfer from './pages/Transfer'
import Reports from './pages/Reports'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, set } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurement Id is optional
const firebaseConfig = {
  apiKey: "AIzaSyDl5QW8q32mb73NIZ4bsdbvxWhTsOVsqAY",
  authDomain: "cs321-54da7.firebaseapp.com",
  projectId: "cs321-54da7",
  storageBucket: "cs321-54da7.appspot.com",
  messagingSenderId: "962075931184",
  appId: "1:962075931184:web:2df37385a444bc7c5e73f5",
  measurementId: "G-6DF1PBCBTN",
  databaseURL: "https://DATABASE_NAME.REGION.firebasedatabase.app"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const database = getDatabase(app);

async function sendData (warehouseNumber, productId, price, quantity, size, brand, type, description) {
  try{
    set(ref(database, 'warehouse/' + warehouseNumber), {
      warehouseNumber: warehouseNumber,
      productId: productId,
      price: price,
      quantity: quantity,
      size: size,
      brand: brand,
      type: type,
      description: description,
    });
  }
  catch(error){
    console.log(error);
  }
}

function App() {
  useEffect(() => {
    sendData("1", "1", "10", "30", "small", "Gucci", "Consumer", "This bag is so cool this is a description");
  }, []); // Empty dependency array means this runs once when the component mounts
  return (
    <Router>
      <Navbar />
      {sendData("1", "1", "10", "30", "small", "Gucci", "Consumer", "This bag is so cool this is a description")}
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
