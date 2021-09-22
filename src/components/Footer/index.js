import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import './style.css';

const Footer = (props) => {
  return (
    <div>
      <Card>
        <CardBody>
            <CardImg></CardImg>
          <CardTitle tag="h5">MADE WITH LOVE</CardTitle>
        </CardBody>
      </Card>
    </div>
  );
};

export default Footer;