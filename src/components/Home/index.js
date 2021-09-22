import Image from "../../image/headshot.png";
import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

import stylesheet from "./stylesheet";

const Home = () =>{


    return(
        <div>
          
 <img src={Image} alt="ME" />

 <Card>
        <CardBody>
          <stylesheet/>
            <CardImg></CardImg>
          <CardTitle tag="h5">Full Stack Developer/Software Engineer</CardTitle>
          <CardText>HTML CSS JavaScript JQuery Node.js PHP Express React.js Mongo DB MySQL Command_Line Git  </CardText>
         
        </CardBody>
      </Card>
        </div>
    )
}


export default Home;