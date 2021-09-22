import { formatMs } from '@material-ui/core';
import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const Forms = (props) => {
  return (

      
    <Form>
      <FormGroup>
        <Label for="exampleEmail">Email</Label>
        <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Phone Number</Label>
        <Input type="password" name="password" id="examplePassword" placeholder="Enter Phone # here" />
      </FormGroup>
      </Form>
  );
}

export default Forms;