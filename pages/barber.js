import React from 'react';

import {Container,Row, Col} from 'reactstrap';
import img6 from '../assets/images/image11.jpg';
import img7 from  '../assets/images/image12.jpg';
import img8 from  '../assets/images/image13.jpg';

import Header from '../components/header';
import Head from 'next/head';

function Barber(){


    return(
         
   <div >
   <Head>
   <title>Dolyrus saloon</title>
   <meta charSet="utf-8" />
 
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="theme-color" content="#000000" />
 </Head>


        <div className = "right14">
            <Header />
          <Container>
              <div className = "right15">
                  <h1>Barber Squad</h1>
                  <p>Meet Barber Squad Team</p>
              </div>
              <Row className = "right17">
                  <Col xs = "3"><img src = {img6} className = "right16" />
                  <div className = "right18">
                   <h4>Michael Cowder</h4>
                   <p ><span className = "right60">Mwanza_|@Mike_cowder</span></p>
                   </div>
                  </Col>

                  <Col xs = "3"><img src = {img7} className = "right16"/>
                  <div className = "right18">
                   <h4>Christian clark</h4>
                   <p>Arusha|@Christ_clark</p>
                   </div>
                  </Col>

                  <Col xs = "3"><img src = {img8} className = "right16"/>
                  <div className = "right18">
                  <h4>Revatus Jonas</h4>
                  <p>DSM|@Revatus_Jonas</p>
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

export default Barber;