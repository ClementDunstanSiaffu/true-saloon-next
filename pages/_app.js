import React from 'react'

import 'bootstrap/dist/css/bootstrap.css';
import '../assets/stylesheets/bootstrap.css';
import '../assets/stylesheets/style.css';
import '../assets/stylesheets/custom.css';
import "../assets/css/bootstrap.min.css";
import "../assets/demo/demo.css";
import "../assets/scss/paper-kit.scss";


export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}