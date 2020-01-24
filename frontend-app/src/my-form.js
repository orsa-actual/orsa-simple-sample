import React from 'react';
import {
  Select,
  Option,
  Button
} from 'shared-components';

function MyForm() {
  const onClick = () => alert('Woohoo!');
  return (
    <div className="App">
      <Select>
        <Option value="CA">CA</Option>
        <Option value="OR">OR</Option>
        <Option value="FL">FL</Option>
        <Option value="TX">TX</Option>
      </Select>
      <Button onClick={onClick}>Submit</Button>
    </div>
  );
}

export default MyForm;
