
import $ from 'jquery';
// import jQuery from 'jquery';
// import mixitup from 'mixitup'
// import '@fancyapps/fancybox';

import { useEffect } from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Home';
import {Route , Routes} from "react-router-dom"
import About from './Components/About';
import Clients from './Components/Clients';
import Images from './Components/Images';
import Videos from './Components/Videos';
import Blog from './Components/Blog';
import BlogPost from './Components/BlogPost';
import Branches from './Components/Branches';
import Career from './Components/Career';
import Contact from './Components/Contact';
import Kreston from './Components/Kreston';
import QualityStandards from './Components/QualityStandards';
import Service from './Components/Service';





function App() {

 
  // $('[data-fancybox="images-library"]').fancybox({
  //   buttons : [ 
  //     'slideShow',
  //     'share',
  //     'zoom',
  //     'fullScreen',
  //     'close'
  //   ],
  // });
  
    

  
  // window.jQuery = jQuery;
 

  useEffect(()=>{
    
$(window).on("load", function () {
  $(".preloader").fadeOut();
})

         // to top button
 $(window).scroll(function(){
  if($(window).scrollTop() > 150){
    $(".toTop").addClass("showToTop");
  }else{
    $(".toTop").removeClass("showToTop")
  }
})

$(".toTop").click(function(){
  $('html, body').animate({scrollTop:0}, 500);
}) 
    // fire select2
$('.myselect').select2();


$('.myform select').select2({
  minimumResultsForSearch: -1
});

$(".select2-selection").focus(function(){
  $(".select2-selection--single").toggleClass("rotate-select-icon");
 })

  } , [])

  return (
   <>
        {/* preloader  */}
    <div className="preloader">
      <div className="progress">
        <div className="progress-bar"></div>
      </div>
    </div>
     {/* end of preloader  */}

   {/* to top button */}
   <button className="toTop">
    <i className="las toTop-icon  la-long-arrow-alt-up"></i>
  </button>
   {/* to top button */}




    
   <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/home" element={ <Home/>}/>
      <Route path="/clients" element={ <Clients/>}/>
      <Route path="/images" element={ <Images/>}/>
      <Route path="/videos" element={ <Videos/>}/>
      <Route path="/blog" element={ <Blog/>}/>
      <Route path="/blogPost" element={ <BlogPost/>}/>
      <Route path="/branches" element={ <Branches/>}/>
      <Route path="/career" element={ <Career/>}/>
      <Route path="/contact" element={ <Contact/>}/>
      <Route path="/Kreston" element={ <Kreston/>}/>
      <Route path="/QualityStandards" element={ <QualityStandards/>}/>
      <Route path="/service" element={ <Service/>}/>
    </Routes>
  
   
    <Footer/>


        {/* Request service Modal  */}
        <div   className="modal fade " id="exampleModal"  tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">استمارة طلب خدمة</h5>
        </div>
        <div className="modal-body">
          <form className="myform"> 
                <div className="general-input required">
                    <label className="myLabel "  htmlFor="">الاسم بالكامل </label>
                    <input className="myInput" required type="text" />
                </div>
                <div className="general-input required">
                  <label className="myLabel "  htmlFor="">رقم  الجوال </label>
                  <input className="myInput" required type="tel" />
              </div>
                <div className="general-input ">
                  <label className="myLabel "  htmlFor="">البريد الالكترونى  </label>
                  <input className="myInput" required type="email" />
                </div>
                <div className="general-input   required select-general-input">
                  <label className="myLabel "  htmlFor=""> الخدمة</label>
                  <select className=" myselect general-input required " >
                      <option  disabled defaultValue value="">  اختر من القائمة  </option>
                      <option  value="خدمة 1">خدمة 1  </option>
                      <option  value="خدمة 2">خدمة 2</option>
                  </select>
              </div>
                <div className="general-input required">
                  <label className="myLabel "  htmlFor="">التفاصيل   </label>
                  <textarea className="mytextarea" ></textarea>
                </div>
                <div className="general-input submit-general-input ">
                    <button className="submitBtn"  type="submit" >ارسال</button>
                </div>
          </form>
        </div>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <i className="las la-times"></i>
        </button>
      </div>
    
    </div>
   
        </div>

   </>
  );
}

export default App;
