import React from 'react'
import { 
  TextInput,
  Select,
  SelectItem,
  Button,
  Form,
  Stack
} from 'carbon-components-react'

function transfer(){
  console.log("Do db stuff");
  
};

const TransferMenu = () => {
  return (
    <div>
      <Form>
        <Stack>
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
          <TextInput id="id" labelText="Product ID"/>
          <TextInput id="q" labelText="Quantity"/>
          <Button type="submit" className="transfer-button" onClick={transfer}>
            Transfer
          </Button>
        </Stack>
      </Form>
    </div>
  )
}

export default TransferMenu