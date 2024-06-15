import React, {useState, useEffect} from 'react'
import { 
  TextInput,
  Select,
  SelectItem,
  Button,
  Form,
} from 'carbon-components-react'

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


  useEffect(() => {
    if (productValue !== "" || quantityValue !== "" || warehouseFromValue !== "" || warehouseToValue !== "") {
      productInputTest();
      quantityInputTest();
      warehouseFromInputTest();
      warehouseToInputTest();
    }
  }, [productValue, quantityValue, warehouseFromValue, warehouseToValue]);

  useEffect(() => {
    if (warehouseFromPrev !== "" || warehouseToPrev !== "") {
      previousFromValueStoredTest();
      previousToValueStoredTest();
      newFromValueStoredTest();
      newToValueStoredTest();
    }
  }, [warehouseFromPrev, warehouseToPrev]);

  /*
  * Handles updating states for testing
  */
  const updateInputStates = (productId, quantity, warehouseFrom, warehouseTo) => {
    productChange(productId);
    quantityChange(quantity);
    warehouseFromChange(warehouseFrom);
    warehouseToChange(warehouseTo);
  }
  const updatePreviousWarehouseStates = (prevToVal, prevFromVal) => {
    warehouseToPrevChange(prevToVal);
    warehouseFromPrevChange(prevFromVal);
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


  async function sendData (warehouseNumber, productId, name, price, quantity, size, brand, type, description) {
    try {
        console.log("Initialization and database received");

        set(ref(database, 'warehouse/' + warehouseNumber + '/products/' + productId), {
            productId: productId,
            name: name,
            price: price,
            quantity: quantity,
            size: size,
            brand: brand,
            type: type,
            description: description,
        });
        console.log("Data sent");
    } catch (error) {
        console.log(error);
    }
  }

  // Function to create multiple products for each warehouse
  async function createProductsForWarehouses() {
    const products = [
      // Warehouse 1 products
      { warehouseNumber: "1", productId: "1", name: "Levi's Jeans", price: "18", quantity: "20", size: "medium", brand: "Levi's", type: "Clothing", description: "These jeans are durable and stylish" },
      { warehouseNumber: "1", productId: "2", name: "Samsung TV", price: "25", quantity: "35", size: "large", brand: "Samsung", type: "Electronics", description: "This television offers 4K resolution" },
      { warehouseNumber: "1", productId: "3", name: "Dell Monitor", price: "33", quantity: "50", size: "extra large", brand: "Dell", type: "Computers", description: "This monitor provides excellent color accuracy" },
      { warehouseNumber: "1", productId: "4", name: "Sony Headphones", price: "45", quantity: "25", size: "small", brand: "Sony", type: "Audio", description: "These headphones deliver high-fidelity sound" },
      { warehouseNumber: "1", productId: "5", name: "Nike Running Shoes", price: "55", quantity: "40", size: "medium", brand: "Nike", type: "Footwear", description: "These running shoes are lightweight and comfortable" },
      
      // Warehouse 2 products (some shared with Warehouse 1)
      { warehouseNumber: "2", productId: "1", name: "Levi's Jeans", price: "12", quantity: "20", size: "medium", brand: "Levi's", type: "Clothing", description: "These jeans are durable and stylish" },
      { warehouseNumber: "2", productId: "6", name: "Adidas Jacket", price: "20", quantity: "60", size: "large", brand: "Adidas", type: "Clothing", description: "This jacket is perfect for cold weather" },
      { warehouseNumber: "2", productId: "7", name: "Apple iPad", price: "30", quantity: "45", size: "extra large", brand: "Apple", type: "Technology", description: "This iPad is great for both work and play" },
      { warehouseNumber: "2", productId: "8", name: "Lego Set", price: "40", quantity: "30", size: "small", brand: "Lego", type: "Toys", description: "This Lego set is fun for all ages" },
      { warehouseNumber: "2", productId: "9", name: "Sony Headphones", price: "39", quantity: "25", size: "small", brand: "Sony", type: "Audio", description: "These headphones deliver high-fidelity sound" },
      
      // Warehouse 3 products (some shared with Warehouses 1 and 2)
      { warehouseNumber: "3", productId: "1", name: "Levi's Jeans", price: "9", quantity: "20", size: "medium", brand: "Levi's", type: "Clothing", description: "These jeans are durable and stylish" },
      { warehouseNumber: "3", productId: "3", name: "Dell Monitor", price: "35", quantity: "50", size: "extra large", brand: "Dell", type: "Computers", description: "This monitor provides excellent color accuracy" },
      { warehouseNumber: "3", productId: "10", name: "Nestle Cookies", price: "25", quantity: "90", size: "extra large", brand: "Nestle", type: "Food", description: "These cookies are made with high-quality ingredients" },
      { warehouseNumber: "3", productId: "11", name: "Puma Sports Shoes", price: "35", quantity: "70", size: "small", brand: "Puma", type: "Footwear", description: "These sports shoes are designed for performance" },
      { warehouseNumber: "3", productId: "12", name: "Bosch Toolkit", price: "45", quantity: "50", size: "medium", brand: "Bosch", type: "Tools", description: "This toolkit is ideal for home use" },
    ];

    for (const product of products) {
        await sendData(
            product.warehouseNumber,
            product.productId,
            product.name,
            product.price,
            product.quantity,
            product.size,
            product.brand,
            product.type,
            product.description
        );
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


  async function getProductData (warehouseNumber, productId) {
    await get(ref(database, `warehouse/` + warehouseNumber + `/products/` + productId + `/quantity`)).then((snapshot) => {
      if (snapshot.exists()) {
        console.log(snapshot.val());
        return snapshot.val();
      } else {
        console.log("No data available");
        return "0";
      }
    }).catch((error) => {
      console.error(`Error from getting product data ${error}`);
      return error;
    });
  }

  const transfer = async (e) => {
    e.preventDefault();
    // createProductsForWarehouses();
    // Create a FormData object from the form element
    const formData = new FormData(e.target);
    // createProductsForWarehouses();
    // Retrieve the data from the TextInput fields using their IDs
    const warehouseFrom = formData.get('w-from');
    const warehouseTo = formData.get('w-to');
    const productId = formData.get('id');
    const quantity = formData.get('q');
    updateInputStates(productId, quantity, warehouseFrom, warehouseTo);

    // createProductsForWarehouses();
    // getAllWarehouseData();

    //Connect to database and store previous values
    try{
      const prevToVal = await getProductData(warehouseTo, productId);
      const prevFromVal = await getProductData(warehouseFrom, productId);
      // updatePreviousWarehouseStates(prevToVal, prevFromVal);
      console.log("Prev To Quantity: " + prevToVal);
      console.log("Prev From Quantity" + prevFromVal);
  
      //Get integer values (ADD CASE TO SET 0 IF... product isn't in warehouse)
      const prevToInt = parseInt(prevToVal);
      const prevFromInt = parseInt(prevFromVal);
      const quantityInt = parseInt(quantity);
  
      //Add to To warehouse
      const newToVal = (prevToInt + quantityInt).toString();
      //Subtract from From warehouse
      const newFromVal = (prevFromInt - quantityInt).toString();
  
      console.log("New To Quantity: " + newToVal);
      console.log("New From Quantity" + newFromVal);
  
      //Change state if db values changed
      warehouseFromNewChange(warehouseFrom);
      warehouseToNewChange(warehouseTo);
  
      //Make the truck deliver animation (GUI)
      truckAnimation();
    }
    catch(error){
      console.log("Error in transfer: ", error);
    }
  };

  return (
    <div className="menu-container">
      <Form onSubmit={transfer} >
          <Select id="w-from" name="w-from" defaultValue="placeholder-item" labelText="From">
            <SelectItem disabled hidden value="placeholder-item" text="Choose a warehouse" />
            <SelectItem value="1" text="Warehouse 1" />
            <SelectItem value="2" text="Warehouse 2" />
            <SelectItem value="3" text="Warehouse 3" />
          </Select>
          <Select id="w-to" name="w-to" defaultValue="placeholder-item" labelText="To">
            <SelectItem disabled hidden value="placeholder-item" text="Choose a warehouse" />
            <SelectItem value="1" text="Warehouse 1" />
            <SelectItem value="2" text="Warehouse 2" />
            <SelectItem value="3" text="Warehouse 3" />
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