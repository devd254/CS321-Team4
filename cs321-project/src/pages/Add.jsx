import {NumberInput, TextArea, Select, SelectItem, Button} from '@carbon/react';
import './../App.css';
import React, {useState} from 'react';

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
//   databaseURL: "https://DATABASE_NAME.REGION.firebasedatabase.app"
// };

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// const database = getDatabase(app);

/*
 More Documentation for database stuff here (MUST READ)
 https://firebase.google.com/docs/database/web/read-and-write?authuser=0&hl=en#web
*/
// async function sendData (warehouseNumber, productId, price, quantity, size, brand, type, description) {
//   try{
//     console.log("Initilization and database received");
    
//     set(ref(database, 'warehouse/' + warehouseNumber), {
//       warehouseNumber: warehouseNumber,
//       productId: productId,
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

const Add = () => {
  const [name, setName] = useState(''); 
  const [price, setPrice] = useState('');
  const [count, setCount] = useState('');
  const [wareHouse, setWareHouse] = useState('');
  const [brandName, setBrandName] = useState('');
  const [type, setType] = useState('');
  const [description, setDescription] = useState('');
  const handleTextInput = (e) =>{
    setName(e.target.value);
  }
  const handlePriceInput = (e) =>{
    setPrice(e.target.value);
  }
  const handleCountInput = (e) => {
    setCount(e.targe.value);
  }
  const handleWareHouse = (e) =>{
    setWareHouse(e.target.value);
  }
  const handleBrandName = (e) =>{
    setBrandName(e.target.value);
  }
  const handleType = (e) =>{
    setBrandName(e.target.value);
  }
  const handleDescription = (e) =>{
    setBrandName(e.target.value);
  }

  return (
    <>
    <div className = "add">
      <div className = "text_1">
        <h1 className='text'>ADD PRODUCT</h1>
        {/*Name Text Bar*/}
        <div className = "input">
          <label htmlFor="product-name" className="input-label">ID:</label>
          <div className = "text-input">
            <NumberInput
              min={0} invalidText="Number is not valid" hideSteppers = {true}
            />
          </div>
        </div>
        {/*Price Text Bar*/}
        <div className = "input">
          <label htmlFor="product-name" className="input-label">Price:</label>
          <div className = "number-input">
            <span className="dollar">$</span>
            <NumberInput
              id="carbon-number" min={0} invalidText="Number is not valid" hideSteppers = {true} step={0.01}
            />
          </div>
        </div>
        {/*Stock Number Text Bar*/}
        <div className = "input">
          <label htmlFor="product-name" className="input-label">Count:</label>
          <div className = "count-input">
            <NumberInput
              min={0} invalidText="Number is not valid" hideSteppers = {true}
            />
            </div>
          </div>
        {/*Warehouse Number Text Bar*/}
        <div className = "input">
          <label htmlFor="product-name" className="input-label">Warehouse #:</label>
          <div className = "location">
          <Select className = "location-box" noLabel>
            <SelectItem disabled text="Select an option to add the Product" />
            <SelectItem value="option-1" text="Option 1" />
            <SelectItem value="option-2" text="Option 2" />
            <SelectItem value="option-3" text="Option 3" />
          </Select>
            </div>
          </div>
        {/*Size Text Bar*/}
        <div className = "input">
          <label htmlFor="product-name" className="input-label">Size:</label>
          <div className = "size">
          <Select className = "size-box" noLabel>
            <SelectItem disabled text="Select an option to add the Size...../" />
            <SelectItem value="option-1" text="Small" />
            <SelectItem value="option-2" text="Medium" />
            <SelectItem value="option-3" text="Large" />
          </Select>
            </div>
          </div>
        {/*Brand Bar*/}
        <div className = "input">
          <label htmlFor="product-name" className="input-label">Brand:</label>
          <div className = "brand-name">
            <TextArea
            rows={1}
            />
          </div>
        </div>
        {/*Type Bar*/}
        <div className = "input">
          <label htmlFor="product-name" className="input-label">Type:</label>
          <div className = "type">
          <Select className = "type-box" noLabel>
            <SelectItem disabled text="Select an option to add the Type...../" />
            <SelectItem value="option-1" text="Small" />
            <SelectItem value="option-2" text="Medium" />
            <SelectItem value="option-3" text="Large" />
          </Select>
            </div>
          </div>
        {/*Brand Bar*/}
        <div className = "input">
          <label htmlFor="product-name" className="input-label">Desc:</label>
          <div className = "description">
            <TextArea
            rows={1}
            />
          </div>
        </div>
        {/*Button*/}
        <div className = "">
          <div className = "button">
          <Button onClick={true}>
            ADD
          </Button>
          </div>
        </div>

      </div>
      <div className='warehouse-location'>
        <div className='text_2'>
        <h1 className='text2'>Add New Warehouse Location</h1>
        <div className= 'warehouse-loc'>
          <TextArea
          rows={1} 
          placeholder='Enter warehouse location...' />
        </div>
        <div className='warehouse-button'>
          <Button onClick={true}>
            ADD LOCATION
          </Button>
        </div>
      </div>
      </div>
      <div className='type'>
        <div className='type-option'>
        <h1 className='type-option-style'>Create New Product Type</h1>
        <div className= 'warehouse-loc'>
          <TextArea
          rows={1} 
          placeholder='Enter type of product to be created...' />
        </div>
        <div className='warehouse-button'>
          <Button onClick={true}>
            ADD TYPE
          </Button>
        </div>
      </div>
      </div>
    </div>
    </>
  )
}
export default Add