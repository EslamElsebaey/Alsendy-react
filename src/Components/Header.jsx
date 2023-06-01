import React, { useEffect } from 'react'
import $ from "jquery"
import {Link} from "react-router-dom"

export default function Header() {



  // nav nested menu



  useEffect(()=>{

    // open search box

$(".open-serach-btn").click(function(){
  $(".search").fadeToggle(300) ;
  $(".open-serach-btn i").toggleClass("la-times")
})

// nav nested menu
if($(window).width() <= 992) {
  $(".li-drop > a").click(function (e) {
    e.preventDefault() ;
    $(this).siblings(".ul-drop").slideToggle(300) ;
    $(this).toggleClass("icon-rotate");
    $(".li-drop a").not($(this)).siblings(".ul-drop").slideUp(300);
    $(".li-drop a").not($(this)).removeClass("icon-rotate");
    })
    }
    
   

 // open and close sideBar
let closeBtn = document.querySelector(".closeBtn"); 
let openBtn = document.querySelector(".bars"); 

closeBtn.addEventListener("click" , function(){
  $("nav").removeClass("open-nav");
  $("body").css("overflow" , "visible") ;
})

openBtn.addEventListener("click" , function(){
  $("nav").addClass("open-nav");  
  $("body").css("overflow" , "hidden") ;
})

  })



  return (
   <>
      
      <header>
      <div className="logo">
      <Link to="/home">   <img  src="images/logo.png" alt="" /> </Link>
      </div>
      <div className="main-header-cont">
      <div className="top-header">
      <div className="topheader-cont">
        <div className="links">
          <Link className="ancor-btn" to="/branches">فروعنا</Link>
          <Link className="ancor-btn" to="/blog">المدونة</Link>
          <Link to="/career" className="ancor-btn">التوظيف</Link>
        </div>
        <div className="social">
        
          <a   className="ancor-btn"  href="#">
            <i className="lab la-whatsapp"></i>
          </a>
          <a  className="ancor-btn"  href="#">
            <i className="lab la-linkedin-in"></i>
          </a>
          <a  className="ancor-btn"  href="#">
            <i className="lab la-instagram"></i>
          </a>
          <a  className="ancor-btn"  href="#">
            <i className="lab la-twitter"></i>
          </a>
          <a   className="ancor-btn" href="#">
            <i className="lab la-facebook-f"></i>
          </a>
        </div>
        
      </div>
      </div>
        <div className="search">
        <div className="search-item">
          <input type="text" placeholder="ابحث عن معلومات الشركة، خدماتنا، فروعنا، اخبارنا وغيرها  " />
          <button className="search-btn ancor-btn">
            <i className="las la-search"></i>
          </button>
        </div>
      </div>
 <nav>
     <div className="close-holder-mob">
        <button className="closeBtn"><i className="las closeIcon la-times"></i></button>
     </div>
       <div className="mynav">
           <ul className="ul_ee ul-es ul-navbar">
            
             <li>
             <Link className="nav-ancor" to="/home" >الرئيسية</Link>
             </li>
             <li>
              <Link to="/about" className="nav-ancor"> من نحن  </Link>
              
              </li>
             <li className="li-drop">
               <a href="#" className="nav-ancor">خدماتنا</a>
               <ul className="ul-drop ul-es">
                 <li><a className="ancor-btn" href="#"> التدقيق والمراجعة</a></li>
                 <li>
                  <Link className="ancor-btn" to="/service">الاستشارات الزكوية والضريبية</Link>
                  </li>
                 <li><a className="ancor-btn" href="#"> المحاسبة القضائية</a></li>
                 <li><a className="ancor-btn" href="#">التصفية للشركات  </a></li>
                 <li><a className="ancor-btn" href="#">   الحراسة القضائية</a></li>
                 <li><a className="ancor-btn" href="#">   التسجيل المحاسبي</a></li>
                 <li><a className="ancor-btn" href="#"> أعمال التفليسة  </a></li>
                 <li><a className="ancor-btn" href="#"> مساعدة الشركات   </a></li>
               </ul>
             </li>
             <li>
               <Link to="/clients" className="nav-ancor"> عملاؤنا   </Link>
             </li>
            <li className="li-drop">
              <a href="#" className="nav-ancor">المركز الاعلامى </a>
              <ul className="ul-drop ul-es">
                <li>
                  <Link className="ancor-btn" to="/images">   مكتبة الصور  </Link>
                  </li>
                <li>
                  <Link className="ancor-btn" to="/videos">     مكتبة الفيديو  </Link>
                  </li>
              </ul>
            </li>
             <li className="topheader-links">
              <a href="branches.html" className="nav-ancor"> فروعنا   </a>
            </li>
            <li className="topheader-links" >
              <Link className="ancor-btn" to="/blog">    المدونة </Link>
            </li>
            <li className="topheader-links" >
              <Link className="nav-ancor" to="/career">التوظيف</Link>
            </li>
             <li >
              <Link  className="nav-ancor" to="/contact">اتصل بنا  </Link>
             </li>
            

             <li >
               <a href="en.html" className="nav-ancor"> English</a>
             </li>
            
           </ul>
       </div>
      
   
  
 </nav>



      </div>
      
      <div className="bars-appointment-holder"> 
        <a href="#" className="book-appointment ancor-btn">حجز موعد </a>
        <button className="open-serach-btn ancor-btn"><i className="las   la-search"></i></button>
        <button className="bars ancor-btn"><i className="las   la-bars"></i></button>
      </div>
     
    </header>

   
   
   </>
  )
}
