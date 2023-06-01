import React from 'react';
import ReactDOM from 'react-dom/client';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import "bootstrap/dist/css/bootstrap.min.css"
import "popper.js/dist/popper.min.js"
import "select2/dist/js/select2.min.js"
import "select2/dist/css/select2.min.css"
import "../node_modules/line-awesome/dist/line-awesome/css/line-awesome.min.css";
import "swiper/swiper.min.css";
import "swiper/css";
import "jquery/dist/jquery.min.js"
import  '@fancyapps/fancybox/dist/jquery.fancybox.min.js'
import  '@fancyapps/fancybox/dist/jquery.fancybox.min.css'
import '../src/style/main.css';



import App from './App';
import { BrowserRouter } from 'react-router-dom';

// window.jQuery = jQuery;
const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  
  <div>
    <BrowserRouter>
    <App />
    </BrowserRouter>
     
    

  </div>
   
  
);


