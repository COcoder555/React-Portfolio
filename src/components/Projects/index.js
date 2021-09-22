import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image1 from "../../image/RGFS.png";
import Image2 from "../../image/UCS.png";
import Image3 from "../../image/WDB.png";
import Image4 from "../../image/WDS.png";
import image5 from "../../image/BPSC.png";
import image6 from "../../image/FT2.png";
import "../../App.css"



const Projects = () => {

  return (
    <div>
      <Card >
        <CardBody >
          <a href='https://really-good-fake-store.herokuapp.com/'>
            <img src={Image1} alt="Really Good Fake Store" />
          </a>

          <CardTitle tag="h5">Really Good Fake Store</CardTitle>
          <a href="https://github.com/abanae/Really-Good-Fake-Store">
            <CardSubtitle tag="h6" className="mb-2 text-muted">Github</CardSubtitle>
          </a>
          <CardText>This project is a mock e-commerce store called "Really Good Fake Store"." I worked with a team to develop this full-stack application that
            allows the user to view products and add them to a cart when logged in. Because E-commerce websites make up about 10% of the internet.
            Our goal was to build this mock store with our current coding skills to create something similar to what we might see in the feild.</CardText>
        </CardBody>
        <hr />
        <CardBody>
          <a href='https://maximosandoval.github.io/urban-cipher/'>
            <img src={Image2} alt="Urban Cipher" />
          </a>

          <CardImg></CardImg>
          <CardTitle tag="h5">Urban Cipher</CardTitle>
          <CardTitle tag="h5">Really Good Fake Store</CardTitle>
          <a href="https://github.com/maximosandoval/urban-cipher">

            <CardSubtitle tag="h6" className="mb-2 text-muted">Github</CardSubtitle>
          </a>
          <CardText> This project is called "Urban Cipher." On this project I worked with a team to develop an app that allows the user to search
            for thier favorite song and artist then look up words they don't know deffinitions to using "Urban Dictionary" and "Merriam-Webster."  </CardText>


        </CardBody>

        <hr />

        <CardBody>
          <a href='https://cocoder555.github.io/Weather-Dashboard-/'>
            <img src={Image3} alt="Weather Dashboard" />
          </a>

          <CardImg ></CardImg>

          <CardTitle tag="h5">Weather Dashboard</CardTitle>
          <a href="https://github.com/COcoder555/Weather-Dashboard-">
            <CardSubtitle tag="h6" className="mb-2 text-muted">Github</CardSubtitle>
          </a>         
           <CardText> This project is called "Weather Dashboard." On this project I devloped an application that allows the user to input a city and be given current and up to date weather
            information as well as a five day forecast.
          </CardText>
        </CardBody>


        <hr />

        <CardBody>
          <a href='https://cocoder555.github.io/Day-Planner-/'>
            <img src={Image4} alt="Weather Dashboard" />
          </a>

          <CardImg ></CardImg>
          <CardTitle tag="h5">Work Day Scheduler</CardTitle>
          <a href="https://github.com/COcoder555/Day-Planner-">
            <CardSubtitle tag="h6" className="mb-2 text-muted">Github</CardSubtitle>
          </a> 
          <CardText> This application acts as a day planner for the user. The application allows the user to shedule and save daily events.
          </CardText>
        </CardBody>

        <hr />

        <CardBody>
          <a href='https://limitless-waters-43419.herokuapp.com/'>
            <img src={image5} alt="Weather Dashboard" />
          </a>

          <CardImg ></CardImg>
          <CardTitle tag="h5">The Tech Board</CardTitle>
          <a href="https://github.com/COcoder555/The-Tech-Board-">
            <CardSubtitle tag="h6" className="mb-2 text-muted">Github</CardSubtitle>
          </a>           
          <CardText> This is a full stack application that allows the user to post, delete, and update, pots and comments while logged in. A Tech Blog.
          </CardText>
        </CardBody>

        <hr />
        <CardBody>
          <a href='https://vast-shore-87215.herokuapp.com/'>
            <img src={image6} alt="Fit Track" />
          </a>

          <CardImg ></CardImg>
          <CardTitle tag="h5">Fit-Track</CardTitle>
          <a href="https://github.com/COcoder555/Fit-Track">
            <CardSubtitle tag="h6" className="mb-2 text-muted">Github</CardSubtitle>
          </a>            <CardText> Fit-Track is a full stack application that enables the user to keep track of their workouts. The user is able to add exercises to thier workouts, track duration time and see other statistics the pertain to their workouts.
          </CardText>
        </CardBody>
      </Card>



    </div>

  )

};






export default Projects