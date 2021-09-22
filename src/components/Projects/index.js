import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image1 from "../../image/RGFS.png";
import Image2 from "../../image/UCS.png";
import Image3 from "../../image/WDB.png"



const Projects = () =>{

    return(
        <div>
     <Card >
        <CardBody >
          <a href = 'https://really-good-fake-store.herokuapp.com/'>
        <img src={Image1} alt="Really Good Fake Store" />
        </a>


          <CardTitle tag="h5">Card title</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
          <CardText>This project is a mock e-commerce store called "Really Good Fake Store"." I worked with a team to develop this full-stack application that
                     allows the user to view products and add them to a cart when logged in. Because E-commerce websites make up about 10% of the internet. 
                     Our goal was to build this mock store with our current coding skills to create something similar to what we might see in the feild.</CardText>
        </CardBody>

        <CardBody>
        <a href = 'https://maximosandoval.github.io/urban-cipher/'>
        <img src={Image2} alt="Urban Cipher" />
        </a>

            <CardImg></CardImg>
          <CardTitle tag="h5">Card title</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
          <CardText> This project is called "Urban Cipher." On this project I worked with a team to develop an app that allows the user to search 
                    for thier favorite song and artist then look up words they don't know deffinitions to using "Urban Dictionary" and "Merriam-Webster."  </CardText>
          
        
        </CardBody>



        <CardBody>
        <a href = 'https://cocoder555.github.io/Weather-Dashboard-/'>
        <img src={Image3} alt="Weather Dashboard" />
        </a>

            <CardImg ></CardImg>
          <CardTitle tag="h5">Card title</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
          <CardText> This project is called "Weather Dashboard." On this project I devloped an application that allows the user to input a city and be given current and up to date weather
                    information as well as a five day forecast. 
                    </CardText>
        </CardBody>
      </Card>
      


        </div>
        
    )

};






export default Projects