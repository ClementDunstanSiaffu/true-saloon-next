
import React from 'react';
import {Container,Row,Col} from 'reactstrap';
import img9 from '../assets/images/image14.jpg';
import img10 from '../assets/images/image15.jpg';
import img11 from  '../assets/images/image16.jpg';
import Head from 'next/head';
import Header from '../components/header';



function Location () {


    return (
        <div >
        <Head>
        <title>Dolyrus saloon</title>
        <meta charSet="utf-8" />
      
       <meta name="viewport" content="width=device-width, initial-scale=1" />
       <meta name="theme-color" content="#000000" />
      </Head>




        <div className = "right21">
           <Container>
               <Header />
               <div className = "right22">
                   <h1>Our Locations</h1>
                   <h7>Choose Your Nearby Barber</h7>
               </div>

               
               <Row className = "right9">
            <Col xs = "3"><img src = {img9}  className = "right10"/>
            <div className = "right25">
               <h4>Arusha</h4>
           </div> 
           <div className = "right26">
                   <h3>ADDRESS</h3>
                   <h4>AIM Mall</h4>
                   <p>Arush, A104</p>
                
            </div>
             
            <div className = "right27">
                <h4>BARBERSHOP HOURS</h4>
                <p><span className = "right55">Mon - Sat : 10am - 7pm</span></p>
                <p><span className = "right56">Sunday : 10am - 5pm</span></p>
            </div>

            </Col>

            <Col xs = "3"><img src = {img10}  className = "right10"/>
            
            <div className = "right25">
               <h4>DSM</h4>
            </div> 
            <div className = "right26">
                   <h3>ADDRESS</h3>
                   <h4>Mlimani city</h4>
                   <p>DSM, IL 60601</p>
            </div> 

            <div className = "right27">
                <h4>BARBERSHOP HOURS</h4>
                <p>Mon - Sat : 10am - 7pm</p>
                <p>Sunday : 10am - 5pm</p>
            </div>

            </Col>
            
            <Col  xs = "3"><img src = {img11}  className = "right10" />
            <div className = "right25">
               <h4>Mwanza</h4>
            </div>
           <div className = "right26">
                   <h3>ADDRESS</h3>
                   <h4>Rock city Mall</h4>
                   <p>Mwanza,10018</p>
                   
            </div>

            <div className = "right27">
                <h4>BARBERSHOP HOURS</h4>
                <p>Mon - Sat : 10am - 7pm</p>
                <p>Sunday : 10am - 5pm</p>
            </div>
            </Col>

               </Row>
               <footer>
            <div className = "right49">Clement Siaffu &copy;2020</div>
            </footer>
           </Container>
        </div>
        </div>
    )
}

export default Location;