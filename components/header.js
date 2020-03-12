import React,{useState} from 'react';
import Link from 'next/link';
import classnames from 'classnames';
import {
  Collapse,
  Container,
  NavbarBrand,
  NavItem,
  Navbar,
  Nav,
  NavLink,
} from 'reactstrap';
import img100 from '../assets/images/logo.png';


 

function Header (){
  
  const [navbarCollapse,setNavbarCollapse] = useState(false);

  const toggleNavbarCollapse = () =>{
      setNavbarCollapse(!navbarCollapse);
      document.documentElement.classList.toggle("nav-open");
  }







    return(
     <Navbar 
      className = {classnames("fixed-top",)}
      expand = "lg"
     >
     <Container>
     <div className="right">
            <NavbarBrand
            
            style={{paddingLeft: "0"}}
              //data-placement="bottom"
             
              //target="_blank"
              //title="Coded by Creative Tim"
              //tag={Link}
            
            > 
           <img src={img100}  className="logo" ></img>
            </NavbarBrand>
            

            
            <button 
              aria-expanded={navbarCollapse}
              className={classnames("navbar-toggler navbar-toggler", {
                toggled: navbarCollapse
              })}
              onClick={toggleNavbarCollapse}
              
            >
              <div  className = "wrapper">
              <span className="navbar-toggler-bar bar1" />
              <span className="navbar-toggler-bar bar2" />
              <span className="navbar-toggler-bar bar3" />
              </div>
            </button>
            </div>
         
       
         <Collapse
           // className="justify-content-end"
            navbar
            isOpen={navbarCollapse}
          >
            <div className = "contain">
           <Nav navbar>
           <NavItem >
           <Link href="/index" >
               <a target = "_self"  className = "nav-link" >Home </a>
            </Link>
            </NavItem>

            <NavItem /*style = {right3}*/>
           
               <Link href = "/about">
                 <a target = "_self"  className="nav-link">About us</a>
                 </Link>
               </NavItem>
           
            <NavItem /*style = {right3}*/>
            <Link href="/service">
               <a target = "_self"  className = "nav-link">Services </a>
            </Link>
            </NavItem>
            
            <NavItem /*style = {right3}*/>
            <Link href="/barber" >
               <a target = "_self"  className = "nav-link">Barbers </a>
            </Link>
            </NavItem>
           
            <NavItem /*style = {right3}*/>
            <Link href="/price" >
               <a target = "_self"  className = "nav-link">Pricing</a>
            </Link>
            </NavItem>
          
            <NavItem>
            <Link href="/location" >
               <a target = "_self"  className = "nav-link">Location</a>
            </Link>
            </NavItem>
           
            <NavItem >
            <Link href="/contact" >
               <a target = "_self" className = "nav-link">Contacts</a>
            </Link>
            </NavItem>

            <NavItem /*style = {right3}*/>
            <Link href="/appoint" >
               <a target = "_self"  className = "nav-link">Appointment</a>
            </Link>
            </NavItem>
        
          </Nav>
          </div>
          </Collapse>
        </Container>
         </Navbar>
    )
}

export default Header;