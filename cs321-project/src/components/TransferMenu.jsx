import React from 'react'
import { 
  TextInput,
  Select,
  SelectItem,
  Button,
  Form,
} from 'carbon-components-react'
import { useState } from 'react';

const TransferMenu = () => {
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
  const transfer = (e) => {
    e.preventDefault();
    console.log("Do db stuff");

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