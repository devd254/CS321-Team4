import React from 'react'
import { 
  TextInput,
  Select,
  SelectItem,
  Button,
  Form,
} from 'carbon-components-react'
import { useState } from 'react';

import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, get } from "firebase/database";

const TransferMenu = ({truckAnimation}) => {
  //Input values
  const [productValue, productChange] = useState("");
  const [quantityValue, quantityChange] = useState("");
  const [warehouseFromValue, warehouseFromChange] = useState("");
  const [warehouseToValue, warehouseToChange] = useState("");
  //DB values
  const [warehouseFromNew, warehouseFromNewChange] = useState("");
  const [warehouseFromPrev, warehouseFromPrevChange] = useState("");
  const [warehouseToNew, warehouseToNewChange] = useState("");
  const [warehouseToPrev, warehouseToPrevChange] = useState("");

  //Test 1
  /*
  * Ensures that the prev value after transferring is stored
  * Will log to console if prev warehouse value is stored
  * Output based on if value is stored
  */
  const previousFromValueStoredTest = () => {
    if(warehouseFromPrev.localeCompare("") == 0){
      console.log("Test 1 failed!");
    }
    else{
      console.log("Test 1 passed!");
    }
  }
  //Test 2
  /*
  * Ensures that the prev value after transferring is stored
  * Will log to console if prev warehouse value is stored
  * Output based on if value is stored
  */
  const previousToValueStoredTest = () => {
    if(warehouseToPrev.localeCompare("") == 0){
      console.log("Test 2 failed!");
    }
    else{
      console.log("Test 2 passed!");
    }
  }
  //Test 3
  /*
  * Ensures that the new value after transferring is stored
  * Will log to console if new warehouse value is stored
  * Output based on if value is stored
  */
  const newToValueStoredTest = () => {
    if(warehouseToNew.localeCompare("") == 0){
      console.log("Test 3 failed!");
    }
    else{
      console.log("Test 3 passed!");
    }
  }
  //Test 4
  /*
  * Ensures that the new value after transferring is stored
  * Will log to console if new warehouse value is stored
  * Output based on if value is stored
  */
  const newFromValueStoredTest = () => {
    if(warehouseFromNew.localeCompare("") == 0){
      console.log("Test 4 failed!");
    }
    else{
      console.log("Test 4 passed!");
    }
  }
  //Test 5
  /*
  * Ensures product input is properly stored
  * Will log to console if product input stored
  * Output based on if input was stored
  */
  const productInputTest = () => {
    if(productValue.localeCompare("") == 0){
      console.log("Test 5 failed!");
    }
    else{
      console.log("Test 5 passed!");
    }
  }
  //Test 6
  /*
  * Ensures quantity input is properly stored
  * Will log to console if quantity input stored
  * Output based on if input was stored
  */
  const quantityInputTest = () => {
    if(quantityValue.localeCompare("") == 0){
      console.log("Test 6 failed!");
    }
    else{
      console.log("Test 6 passed!");
    }
  }
  //Test 7
  /*
  * Ensures warehouse input is properly stored
  * Will log to console if warehouse input stored
  * Output based on if input was stored
  */
  const warehouseFromInputTest = () => {
    if(warehouseFromValue.localeCompare("") == 0){
      console.log("Test 7 failed!");
    }
    else{
      console.log("Test 7 passed!");
    }
  }
  //Test 8
  /*
  * Ensures warehouse input is properly stored
  * Will log to console if warehouse input stored
  * Output based on if input was stored
  */
  const warehouseToInputTest = () => {
    if(warehouseToValue.localeCompare("") == 0){
      console.log("Test 8 failed!");
    }
    else{
      console.log("Test 8 passed!");
    }
  }
  //Test 9
  /*
  * Ensures that the warehouse sending the transfer sent the user provided value
  * Will log to console that the test passed
  * Output based on difference between warehouse value after and before transfer
  */
  const warehouseFromTransferTest = () => {
    //Will most likely store as int later
    const newInt = parseInt(warehouseFromNew, 10);
    const prevInt = parseInt(warehouseFromPrev, 10);
    const quantityTransfered = parseInt(quantityValue, 10);
    if(Math.abs(newInt - prevInt) != quantityTransfered){
      console.log("Test 9 failed!");
    }
    else{
      console.log("Test 9 passed!");
    }
  }
  //Test 10
  /*
  * Ensures that the warehouse receiving the transfer received the user provided value
  * Will log to console that the test passed
  * Output based on difference between warehouse value after and before transfer
  */
  const warehouseToTransferTest = () => {
    //Will most likely store as int later
    const newInt = parseInt(warehouseToNew, 10);
    const prevInt = parseInt(warehouseToPrev, 10);
    const quantityTransfered = parseInt(quantityValue, 10);
    if(Math.abs(newInt - prevInt) != quantityTransfered){
      console.log("Test 10 failed!");
    }
    else{
      console.log("Test 10 passed!");
    }
  }



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
    databaseURL: "https://cs321-54da7-default-rtdb.firebaseio.com"
  };

// Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const database = getDatabase(app);


  async function sendData (warehouseNumber, productId, price, quantity, size, brand, type, description) {
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
    }
    catch(error){
      console.log(error);
    }
  }

  async function getAllWarehouseData () {
    get(ref(database, `warehouse`)).then((snapshot) => {
      if (snapshot.exists()) {
        console.log(snapshot.val());
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });
  }

  const transfer = (e) => {
    e.preventDefault();
    console.log("Do db stuff");
    // sendData("2", "High Performance Shoe", "5", "20", "15", "medium", "Nike", "Sporting Goods", "This shoe is designed for high performance");
    // sendData("3", "Organic Cotton Pants", "8", "30", "50", "large", "Adidas", "Clothing", "These pants are made from organic cotton");
    // sendData("4", "Latest Sony Headphones", "12", "40", "25", "extra large", "Sony", "Electronics", "This is the latest model of the Sony headphones");
    // sendData("5", "Modern Microwave Oven", "20", "50", "10", "small", "Samsung", "Appliances", "This microwave oven has a modern design");
    // sendData("6", "Innovative iPhone", "25", "60", "5", "medium", "Apple", "Technology", "This iPhone features the latest innovations");
    // sendData("7", "Unique Lego Set", "30", "70", "40", "large", "Lego", "Toys", "This Lego set includes various unique pieces");
    // sendData("8", "Latest Honda Civic", "35", "80", "20", "extra large", "Honda", "Automotive", "This is the latest model of the Honda Civic");
    // sendData("9", "Limited Edition Coca-Cola", "40", "90", "35", "small", "Coca-Cola", "Beverages", "This is a limited edition Coca-Cola bottle");
    // sendData("10", "Premium Chocolate Bar", "45", "100", "60", "medium", "Nestle", "Food", "This chocolate bar is made with premium ingredients");
    // sendData("11", "Comfort Sneakers", "50", "110", "70", "large", "Puma", "Footwear", "These sneakers are designed for comfort and style");
    // sendData("12", "Professional Drill", "55", "120", "80", "extra large", "Bosch", "Tools", "This drill is perfect for professional use");
    // sendData("13", "Latest Technology Laptop", "60", "130", "90", "small", "HP", "Computers", "This laptop is equipped with the latest technology");
    // sendData("14", "High Performance Desktop", "65", "140", "100", "medium", "Dell", "Computers", "This desktop computer offers great performance");
    // sendData("15", "High Resolution Camera", "70", "150", "110", "large", "Canon", "Cameras", "This camera features high resolution and durability");
    // sendData("16", "Immersive PlayStation", "75", "160", "120", "extra large", "Sony", "Gaming", "This PlayStation offers an immersive gaming experience");
    // sendData("17", "Sleek Smartphone", "80", "170", "130", "small", "Samsung", "Mobile Phones", "This smartphone has a sleek design and powerful features");
    // sendData("18", "Energy Efficient Refrigerator", "85", "180", "140", "medium", "LG", "Home Appliances", "This refrigerator is energy efficient and spacious");
    // sendData("19", "High-Quality Speakers", "90", "190", "150", "large", "Bose", "Audio", "These speakers provide high-quality sound");
    // sendData("20", "Effective Vacuum Cleaner", "95", "200", "160", "extra large", "Dyson", "Home Appliances", "This vacuum cleaner is highly effective and easy to use");
    

    getAllWarehouseData();
    //Connect to database and store previous values
    const prevToVal = "";
    const prevFromVal = "";
    warehouseToPrevChange(prevToVal);
    warehouseFromPrevChange(prevFromVal);

    // Create a FormData object from the form element
    const formData = new FormData(e.target);
  
    // Retrieve the data from the TextInput fields using their IDs
    const warehouseFrom = formData.get('w-from');
    const warehouseTo = formData.get('w-to');
    const productId = formData.get('id');
    const quantity = formData.get('q');

    //Change state if prodId and quantity changed
    productChange(productId);
    quantityChange(quantity);
    warehouseFromChange(warehouseFrom);
    warehouseToChange(warehouseTo);
  
    console.log(`Product ID: ${productId}`);
    console.log(`Quantity: ${quantity}`);

    //Subtract from From warehouse

    //Add to To warehouse
    
    //Change state if db values changed
    warehouseFromNewChange(warehouseFrom);
    warehouseToNewChange(warehouseTo);

    //Make the truck deliver animation (GUI)
    console.log("Truck deliver");
    truckAnimation();
  };

  return (
    <div className="menu-container">
      <Form onSubmit={transfer} >
          <Select id="w-from" defaultValue="placeholder-item" labelText="From">
            <SelectItem disabled hidden value="placeholder-item" text="Choose a warehouse" />
            <SelectItem value="option-1" text="Warehouse 1" />
            <SelectItem value="option-2" text="Warehouse 2" />
            <SelectItem value="option-3" text="Warehouse 3" />
          </Select>
          <Select id="w-to" defaultValue="placeholder-item" labelText="To">
            <SelectItem disabled hidden value="placeholder-item" text="Choose a warehouse" />
            <SelectItem value="option-1" text="Warehouse 1" />
            <SelectItem value="option-2" text="Warehouse 2" />
            <SelectItem value="option-3" text="Warehouse 3" />
          </Select>
          <TextInput id="id" name="id" labelText="Product ID"/>
          <TextInput id="q" name="q" labelText="Quantity"/>
          <Button type="submit" className="transfer-button">
            Transfer
          </Button>
      </Form>
    </div>
  )
}

export default TransferMenu