import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import img1 from '../assets/images/image5.jpg';
import img2 from '../assets/images/image6.jpg';
import img3 from '../assets/images/image4.jpg';
import img5 from  '../assets/images/image7.jpg';
import img4 from '../assets/images/image8.jpg';
import Header from '../components/header';
import Head from 'next/head';


function Service () {


    return(
        
   <div >
   <Head>
   <title>Dolyrus saloon</title>
   <meta charSet="utf-8" />
 
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="theme-color" content="#000000" />
 </Head>


        <div className = "right8">
            
         <Header />
         
        <Container >
            <div className = "right11">
            <h1 >Barber Services</h1>
            <p>Complimentary Beverage with Every Services</p>
            </div>

            <Row className = "right9">
            <Col xs = "3"><img src = {img1}  className = "right10"/>
            
            <div className = "right12">
               <h4>Shaves</h4>
               <p>From  $ 5</p>
           </div> 
            </Col>

            <Col xs = "3"><img src = {img2}  className = "right10"/>
            
            <div className = "right12">
               <h4>Hair trim</h4>
               <p>From  $ 2</p>
           </div> 
            
            </Col>
            
            <Col  xs = "3"><img src = {img3}  className = "right10" />
            <div className = "right12">
               <h4>Hair cuts</h4>
               <p>From  $ 1</p>
           </div>
            </Col>

            </Row>
       </Container>
     
       <Container  >
            <Row className = "right9">
           <Col xs = "3" ><img src = {img4}  className = "right10"/>
           <div className = "right12">
               <h4>beard trim</h4>
               <p>From  $ 3</p>
           </div>
           
           </Col>

           <Col xs = "3"><img src = {img5}  className = "right10" />
           <div className = "right12">
               <h4>kids hair cuts</h4>
               <p>From  $ 2</p>
           </div>
           
           </Col>

           <Col xs = "3">
               <div  className = "right13">
               
               <h4>make an appointement</h4>
               
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


export default Service