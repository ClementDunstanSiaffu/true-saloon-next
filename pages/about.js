import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Header from '../components/header';
import Head from 'next/head';
import img101 from '../assets/images/text-2.png';

function About(){

    return(
 
   <div >
        <Head>
        <title>Dolyrus Saloon</title>
        <meta charSet="utf-8" />
      
       <meta name="viewport" content="width=device-width, initial-scale=1.0" />
       <meta name="theme-color" content="#000000" />
      </Head>


        
        <div className = "right54" >
            <Header />
        <Container>
           <Row>
            <Col xs = "3"  >
            <div className = "right4" >
            <img src = {img101}  className = "right100"/>
            </div>
            </Col>
            <Col xs = "auto" >
            <div className = "right5">
            <h1 className = "right6">About Dolyrus Barber Shop</h1>
            <p className = "right7"> 
            <span >Dolyrus Barbershop came from the idea that there was no barbershops at that time which were able to 
                             provide all barber services for men in Tanzania.</span> <br />
            <span >  Clement interviewed his customers for four years and planned the barbershop in Tanzania
                                         which was opened in may 2013.</span> <br /> 
            {/*<span className = "right52">   </span> */}
            </p> <br />
    
            <p className = "right7">
            <span className = "right53">For the future we expect to provide more services that will 
            include not only men with all age but even women of all age</span>
            </p>
    
    
            </div>
            
            
            </Col>
            </Row>
            <footer>
            <div className = "right50">Clement Siaffu &copy;2020</div>
            </footer>
        </Container>
        </div>
         </div>
    )
    
}

export default About;