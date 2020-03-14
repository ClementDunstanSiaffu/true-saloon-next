import React from 'react';
import {Container,Col, Row, Button, Form, FormGroup, Label, Input} from 'reactstrap';

import PersonIcon from '@material-ui/icons/Person';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import Head from 'next/head';



function Appointment() {
   

return(
    <div >
    <Head>
    <title>Dolyrus saloon</title>
    <meta charSet="utf-8" />
  
   <meta name="viewport" content="width=device-width, initial-scale=1.0" />
   <meta name="theme-color" content="#000000" />
  </Head>
 


   <div className = "right19">
   <Container>
     <div className = "right20">
         <h1>Appointment</h1>
          <h3 >Book Your Service</h3>
          <p>Sign up to our newsletters and get the most of our community advices 
              about hair and beard styles to improve your life style</p>
     </div>
     <div className = "right28">
     <Form>
      <Row form className = "right29">
        <Col md={6}>
          <FormGroup>
            <Label for="exampleEmail" className = "right35">Your name</Label>
            <Input type="email" name="email" id="exampleEmail" />
             <PersonIcon fontSize = "large" className = "right43" />
          </FormGroup>
        </Col>

        <Col md={6}>
          <FormGroup>
            <Label for="examplePassword" className = "right36">Your email</Label>
            <Input type="password" name="password" id="examplePassword"  />
            <EmailIcon fontSize = "large" className = "right43" />
          </FormGroup>
        </Col>
       </Row>
     
      
       <Row form className = "right30">
        <Col md={6}>
          <FormGroup>
            <Label for="exampleEmail" className = "right37">Your phone</Label>
            <Input type="email" name="email" id="exampleEmail"  />
            <PhoneIcon fontSize = "large" className = "right43" />
          </FormGroup>
        </Col>

        <Col md={6}>
          <FormGroup>
            <Label for="examplePassword" className = "right38">Choose a barber</Label>
            <Input type="select" name="password" id="examplePassword" placeholder="choose a barber" >
            <option>Choose a barber</option>
            <option>Michael Cowder</option>
            <option>Christian Clark</option>
            <option>Revatus Jonas</option>
            </Input>
          </FormGroup>
        </Col>
       </Row>
     
       
      <Row form className = "right31">
        <Col md={6}>
          <FormGroup>
            <Label for="exampleEmail" className = "right39">Date</Label>
            <Input type="email" name="email" id="exampleEmail" placeholder = "(Ex:12/01/2020)" />
          </FormGroup>
          </Col>

         <Col md={6}>
          <FormGroup>
            <Label for="examplePassword" className = "right40">Time</Label>
            <Input type="password" name="password" id="examplePassword" placeholder="(Ex:07:00pm)" />
          </FormGroup>
         </Col>
       </Row>
      
       <FormGroup className = "right32">
            <Label for="examplePassword" className = "right41">services</Label>
            <Input type="select" name="password" id="examplePassword" placeholder="password placeholder" >
            <option>Choose a service</option>
            <option>Shaves</option>
            <option>Hair cut</option>
            <option>Trim</option>
            </Input>
          </FormGroup>

        <FormGroup className = "right33">
            <Label for="examplePassword" className = "right42">Choose a Barbershop</Label>
            <Input type="select" name="password" id="examplePassword" placeholder="password placeholder" >
            <option>Choose a barbershop</option>
            <option>Arusha</option>
            <option>Dar es salaam</option>
            <option>Mwanza</option>
            </Input>
        </FormGroup>

        <FormGroup check>
        <Input type="checkbox" name="check" id="exampleCheck"/>
       
        </FormGroup>
      <Button className = "right34">Book an appointment</Button>

  
      
        
       
    </Form>
     </div>
     <footer>
            <div className = "right51">Clement Siaffu &copy;2020</div>
            </footer>
     </Container>
   </div>
   </div>
)
    
}

export default Appointment;