import React,{Fragment} from 'react';
import { Container } from "reactstrap";
import Header from '../components/header';
import Head from 'next/head';
const img = require("../assets/images/image3.jpg");



function Home(){
  let pageHeader = React.createRef();




  return (
     
    <div >
        <Head>
        <title>Dolyrus saloon</title>
        <meta charSet="utf-8" />
      
       <meta name="viewport" content="width=device-width, initial-scale=1.0" />
       <meta name="theme-color" content="#000000" />
      </Head>

    <div 
    style={{
      backgroundImage: "url(" + require("../assets/images/image3.jpg") + ")",
       
      backgroundPosition: 'center',
      backgroundSize: 'cover',
          backgroundRepeat: 'noRepeat',
          marginTop:30,
          height: 640,
       
         
          //opacity:0.83,
         
       
     
    }}
    className="page-header"
    data-parallax={true}
    ref={pageHeader}
    >
    <Header />
    <div className="filter" />
    <Container>
      <div className="right2">
        <h1>Dolyrus saloon. barber shop</h1>
        <h3>SELF CONFIDENCE.GROOMING.LIFESTYLE</h3>
        
     
      </div>
    </Container>
  
  </div>
  </div> 

  
  )
}

export default Home;
      
      