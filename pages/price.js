//import {saloon,servi} from  './store'; 
import React,{useState} from 'react';
import {Container} from 'reactstrap';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Paper from '@material-ui/core/Paper';
import { Table } from 'reactstrap';
import fetch from 'isomorphic-unfetch';
import Header from '../components/header';
import Head from 'next/head';



function Pricing({saloon,servi}){

const [value,setValue]  = useState(0);

const handleChange = (event,newValue) => {

    setValue(newValue);
}

return(


<div >
   <Head>
   <title>Dolyrus saloon</title>
   <meta charSet="utf-8" />
 
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="theme-color" content="#000000" />
 </Head>


    <div className = "right45">
      <Container>
        <Header />
          <div className = "right46">
              <h1>Barber Prices</h1>
              <p>Pricing Information</p>
            
           
            <Tabs
             value={value}
             onChange = {handleChange}
             indicatorColor="primary"
             textColor="primary"
             centered
             className = "right47"
             
            >

           {saloon.map(salo => <Tab label = {salo} style = {{fontSize:15,color:"brown",fontWeight:900,
           
             }} />)}
          </Tabs>

          <Table dark className = "right48" style = {{marginBottom:100}}>
            <thead style = {{fontSize:20}}>
              <tr>
                <th>STYLE</th>
                <th>PRICE</th>
                <th>TIME</th>
              </tr>
            </thead>

           {servi.map((serv,i) => 
           (<tbody>{serv.saloon === saloon[value]  ? 

            (<tr>
                
                 <th style = {{padding:30}}>{serv.tilte}</th>
                 <th style = {{padding:30}}>{serv.price}</th>
                 <th style = {{padding:30}}>{serv.time}</th>
          
          </tr>)
        
             : " " }
           </tbody>))}
            
            </Table>
           
          </div>
          <footer>
            <div className = "right51">Clement Siaffu &copy;2020</div>
            </footer>
      </Container>
    </div>
    </div>
)}



Pricing.getInitialProps =  async () => {
  let url;
  let urls;
 
 /*  if(HOSTNAME){
      url = `{HOSTNAME}/api/things/saloon`
      urls = `{HOSTNAME}/api/things/servi` 
   }
   else {
     url = 'http://localhost:3000/api/things/saloon';
     urls = 'http://localhost:3000/api/things/servi';
   } */ 
   
   url = 'https://true-saloon-next.now.sh//api/things/saloon';
   urls = 'https://true-saloon-next.now.sh/api/things/servi';

  const response = await fetch (url)
  const response1 = await fetch (urls)

  
  const saloon = await response.json();
  const servi = await response1.json();
  return{saloon,servi}
}

export default Pricing;