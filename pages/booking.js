

import React from 'react';
import fetch from 'isomorphic-unfetch';
import { Table } from 'reactstrap';
import {Container} from 'reactstrap';
function Todos ({data}){
    
    return(
    <div>
       <Container>
           <Table dark className = "right48" style = {{marginBottom:100}}>
           <thead style = {{fontSize:20}}>    
              <tr>
                 <th className="wrapper11">Name</th>
                  <th  className="wrapper11">Email</th>
                  <th  className="wrapper11">Phone</th>
                  <th  className="wrapper11">Barber</th>
                  <th  className="wrapper11">Date</th>
                  <th  className="wrapper11">Time</th>
                  <th  className="wrapper11">Service</th>
                  <th  className="wrapper11">Shop</th>
              </tr>
              
              </thead>
              {
       Array.from(data).map(user => 
               <tbody>
                      <tr>
                      <th className = "wrapper10">{user.name}</th>
                      <th className = "wrapper10">{user.email}</th>
                      <th className = "wrapper10">{user.phone}</th>
                      <th className = "wrapper10">{user.barber}</th>
                      <th className = "wrapper10">{user.date}</th>
                      <th className = "wrapper10">{user.time}</th>
                      <th className = "wrapper10">{user.service}</th>
                      <th className = "wrapper10">{user.shop}</th>
                      </tr>
               </tbody>
       )}
           </Table>
           
           
           </Container> 
       
   

      


</div>
    )


    
}

Todos.getInitialProps = async () =>{

    const resp = await fetch ('https://stark-island-63709.herokuapp.com/clem/{list}');
    const data = await resp.json();
   
    return {data}

}

export default Todos;