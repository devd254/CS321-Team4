import React from 'react'
import { 
  TextInput,
  Select,
  SelectItem,
  Button,
  Form,
} from 'carbon-components-react'
import { useState } from 'react';

const TransferMenu = ( {truckAnimation} ) => {
  const [dbTestNew, dbTestChanged] = useState("");
  const [dbTestPrev, dbTestBefore] = useState("");
  const [prodTest, prodTestChange] = useState("");
  const [quantityTest, quantityTestChange] = useState("");

  const getPreviousValues = () => {
    
  }

  const handleTransfer = (e) => {
    e.preventDefault();
    console.log("Do db stuff");
    // Create a FormData object from the form element
    const formData = new FormData(e.target);
  
    // Retrieve the data from the TextInput fields using their IDs
    const productId = formData.get('id');
    const quantity = formData.get('q');
    //Change state if prodId and quantity changed
    prodTestChange(productId);
    quantityTestChange(quantity);
  
    console.log(`Product ID: ${productId}`);
    console.log(`Quantity: ${quantity}`);
    
    //Change state if db values changed
    dbTestBefore("previous database value");
    dbTestChanged("new database value");
    //Make the truck deliver animation
    console.log("Truck delivering");
    truckAnimation();
  };

  return (
    <div className="menu-container">
      <Form onSubmit={handleTransfer} >
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