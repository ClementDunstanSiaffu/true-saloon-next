
import React from 'react';
import {Container} from 'reactstrap';
import Head from 'next/head';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import FacebookIcon from '@material-ui/icons/Facebook';
import Header from '../components/header';

function Contact (){



    return(
        <div >
        <Head>
        <title>Dolyrus saloon</title>
        <meta charSet="utf-8" />
      
       <meta name="viewport" content="width=device-width, initial-scale=1.0" />
       <meta name="theme-color" content="#000000" />
      </Head>
     


        <div className = "right23">
            <Container>
                <Header />
                <div className = "right24">
                     <h1>Contact Info</h1>
                     <p>Need some additional information ? Feel free to <br /> 
                         Get in touch for more information.
                    </p>

                    <p>Phone: (+255) 719 320 9567 <br />
                        Fax: (513) 352-4267 <br />
                        Email : dolyrusbarbershop@barber.com <br />
                    </p>

                    <p>
                    Monday - Saturday : 10am - 7pm <br />
                    Sunday : 10am - 5pm 
                    </p>
                </div>
                <footer>
                    <span className = "right61" >
                       <TwitterIcon fontSize = "large" style = {{width:50,height:50}}  className = "right44" />
                       <InstagramIcon  fontSize = "large"  style = {{width:50,height:50}}  className = "right44"  />
                       <FacebookIcon fontSize = "large"  style = {{width:50,height:50}}  className = "right44" />
                    </span>
                    <div className = "right49">Clement Siaffu &copy;2020</div>
                </footer>
            </Container>
        </div>
        </div>
    )
}

export default Contact;