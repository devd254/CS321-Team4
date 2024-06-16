import {NumberInput, TextArea, Select, SelectItem, Button} from '@carbon/react';
import React, {useState} from 'react';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, set, get } from "firebase/database";
import './../App.css';



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
const analytics = getAnalytics(app);
const database = getDatabase(app);


async function sendData (warehouseNumber, productId, name, price, quantity, size, brand, type, description) {
  try{
    console.log("Initilization and database received");
   
    set(ref(database, 'warehouse/' + warehouseNumber + '/products/' + productId), {
      productId: productId,
      name: name,
      price: price,
      quantity: quantity,
      size: size,
      brand: brand,
      type: type,
      description: description
    });
    console.log("Data sent");
  }
  catch(error){
    console.log(error);
  }

}
async function sendDataWarehouse (warehouseNumber, productID) {
  try{
    console.log("Initilization and database received");
   
    set(ref(database, 'warehouse/' + warehouseNumber + '/products/' + productId), {
      productID: productID
    });
    console.log("Data sent");
  }
  catch(error){
    console.log(error);
  }

}

const Add = () => {
  const [id, setID] = useState(''); 
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [count, setCount] = useState('');
  const [wareHouse, setWareHouse] = useState('');
  const [size, setSize] = useState('');
  const [brandName, setBrandName] = useState('');
  const [type, setType] = useState('');
  const [description, setDescription] = useState('');
  const [newWarehouse, setNewWarehouse] = useState('');

  const handleTextInput = (e) =>{
    let replace =(e.target.value).replace(/\d/, '');
    setID(replace);
  }
  const handlePriceInput = (e) =>{
    let replace =(e.target.value).replace(/\d/, '');
    setPrice(replace);

  }
  const handleQuantityInput = (e) => {
    let replace =(e.target.value).replace(/\d/, '');
    setCount(replace);
  }
  const handleWareHouseInput = (e) =>{
    setWareHouse(e.target.value);
  }
  const handleSizeInput = (e) =>{
    setSize(e.target.value);
  }
  const handleBrandNameInput = (e) =>{
    setBrandName(e.target.value);
  }
  const handleTypeInput = (e) =>{
    setType(e.target.value);
  
  }
  const handleDescriptionInput = (e) =>{
    setDescription(e.target.value);
  }

  const handleAdd = () => {
    sendData(wareHouse, id, name, price, count, size, brandName, type, description);
  }

  const handleNewWareHouseInput = (e) => {
    let replace =(e.target.value).replace(/\d/, '');
    setName(replace);
    setNewWarehouse(replace);
  }

  const handleWareHouseAdd = () =>{
    sendDataWarehouse(newWarehouse, id);
  }

  const handleProductNameInput = (e) =>{
    setName(e.target.value);
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
            <NumberInput id = "product-id"
              min={0} invalidText="Number is not valid" hideSteppers = {true} onChange={handleTextInput}
            />
          </div>
        </div>
        {/*Price Text Bar*/}
        <div className = "input">
          <label htmlFor="product-name" className="input-label">Price:</label>
          <div className = "number-input">
            <span className="dollar">$</span>
            <NumberInput 
              id="carbon-number" min={0} invalidText="Number is not valid" hideSteppers = {true} step={0.01} onChange={handlePriceInput}
            />
          </div>
        </div>
        {/*Stock Number Text Bar*/}
        <div className = "input">
          <label htmlFor="product-name" className="input-label">Quantity:</label>
          <div className = "count-input">
            <NumberInput id = "quantity-id"
              min={0} invalidText="Number is not valid" hideSteppers = {true}  onChange={handleQuantityInput}
            />
            </div>
          </div>
        {/*Warehouse Number Text Bar*/}
        <div className = "input">
          <label htmlFor="product-name" className="input-label">Warehouse #:</label>
          <div className = "location">
          <Select id = "warehouse-id" className = "location-box" noLabel onChange={handleWareHouseInput}>
            <SelectItem value="1" text="Option 1" />
            <SelectItem value="2" text="Option 2" />
            <SelectItem value="3" text="Option 3" />
          </Select>
            </div>
          </div>
        {/*Size Text Bar*/}
        <div className = "input">
          <label htmlFor="product-name" className="input-label">Size:</label>
          <div className = "size">
          <Select id = "size-id" className = "size-box" noLabel onChange={handleSizeInput}>
            <SelectItem value="option-1" text="Small" />
            <SelectItem value="option-2" text="Medium" />
            <SelectItem value="option-3" text="Large" />
          </Select>
            </div>
          </div>
        {/*Brand Bar*/}
        <div className = "input">
          <label htmlFor="product-name" className="input-label">Brand:</label>
          <div className = "brand-name" >
            <TextArea id = "brand-id"  labelText={false}
            rows={1} onChange={handleBrandNameInput}
            />
          </div>
        </div>
        {/*Type Bar*/}
        <div className = "input">
          <label htmlFor="product-name" className="input-label">Type:</label>
          <div className = "type">
          <Select id = "type-id" className = "type-box" noLabel onChange={handleTypeInput} >
            <SelectItem value="Small" text="Small" />
            <SelectItem value="Medium" text="Medium" />
            <SelectItem value="Large" text="Large" />
          </Select>
            </div>
          </div>
        {/*Description Bar*/}
        <div className = "input">
          <label htmlFor="product-name" className="input-label">Desc:</label>
          <div className = "description">
            <TextArea id = "desc-id" className = "desc-box" labelText={false}
            rows={1} onChange={handleDescriptionInput}
            />
          </div>
        </div>
        {/*Button*/}
        <div className = "">
          <div className = "button">
          <Button onClick={handleAdd}>
            ADD
          </Button>
          </div>
        </div>

      </div>
      <div className='warehouse-location'>
        <div className='text_2'>
        <h1 className='text2'>Add New Warehouse</h1>
        <div className= 'warehouse-loc'>
          <NumberInput id = "product-id"
            min={0} invalidText="Number is not valid" hideSteppers = {true} onChange={handleNewWareHouseInput} labelText="wareHouse-location" placeholder='Enter warehouse location...'
          />
        </div>
        <div className='warehouse-button'>
          <Button onClick={handleWareHouseAdd}>
            ADD LOCATION
          </Button>
        </div>
      </div>
      </div>
      <div className='type'>
        <div className='type-option'>
        <h1 className='type-option-style'>Create New Product Name</h1>
        <div className= 'warehouse-loc'>
          <TextArea
          rows={1} 
          placeholder='Enter name of product to be stored...' onChange={handleProductNameInput}/>
        </div>
      </div>
      </div>
    </div>
    </>
  )
}
export default Add


