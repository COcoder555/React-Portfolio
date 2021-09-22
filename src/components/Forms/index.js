import { formatMs } from '@material-ui/core';
import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const Forms = (props) => {
  return (

      
    <Form>
      <FormGroup>
        <Label for="exampleEmail">Name</Label>
        <Input type="email" name="email" id="exampleEmail" placeholder="Enter name here" />
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Email</Label>
        <Input type="password" name="password" id="examplePassword" placeholder="Enter email here" />
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Message</Label>
        <Input type="password" name="password" id="examplePassword" placeholder="Please leave a mesage here" />
      </FormGroup>
     </Form>
  );
}

export default Forms;