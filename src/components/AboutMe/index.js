import Image from "../../image/headshot.png";
import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
// import './style.css';



const AboutMe = () => {
    
    return (<div>
        <h1></h1>
        <img src={Image} alt="ME" />
            
      <Card>
        <CardBody>
            <CardImg></CardImg>
          <CardTitle tag="h5">About Me:</CardTitle>
         
          <CardText> My name is Matthew Ontiveros Burt and I was born in Fort Collins, Colorado. My hobbies and interests include
            playing music, traveling, playing poker, going to the gym, snowboarding, boating, reading, Star Wars, Marvel
            Comics, and of course, computer programming!
            I play a few instruments but mostly play the piano these days though I have experience playing the violin and
            guitar. I attended
            Colorado State University for my undergrad where I studied Liberal Arts. After school I worked in a variety
            of different fields
            and ultimately ended up working in Aero-Space manufacturing then COVID-19 hit. It was during this time that
            I dove deeper into coding
            and it was in that time that my ambition of becoming a developer was spawned.</CardText>
          
        </CardBody>
      </Card>
    </div>
  );

    };
 
export default AboutMe ;