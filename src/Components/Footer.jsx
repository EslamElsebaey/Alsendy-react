import React , {useEffect} from 'react'
import $ from "jquery"
import {Link} from "react-router-dom"

export default function Footer() {


  // footer nested menu


  useEffect(()=>{
    if($(window).width() <= 768) {
      $(".footer-title").click(function(){
        $(this).next().slideToggle(350);
        $(this).toggleClass("arrow-rotate");
        $(".footer-title").not($(this)).next().slideUp(300);
        $(".footer-title").not($(this)).removeClass("arrow-rotate");
      })
    }
  })



  return (
   <>
    <footer>
  <div className="container">
    <div className=" footer-items">
        <div className="quick-links">
          <h4 className="footer-title">روابط سريعة</h4>
          <ul className="ul-es quick-drop">
            <li>
              <a className="ancor-btn footer-ancor" href="about.html"> عن الشركة </a>
            </li>
            <li>   
                <Link className="ancor-btn footer-ancor" to="/QualityStandards"> معايير الرقابة النوعية</Link>
            </li>
            <li>
              <a className="ancor-btn footer-ancor" href="#"> فريق العمل
              </a>
            </li>
          
            <li>
              <a className="ancor-btn footer-ancor" href="branches.html"> فروعنا</a>
            </li>
          
            <li>
              <a className="ancor-btn footer-ancor" href="clients.html"> عملاؤنا</a>
            </li>
            <li>
              <Link className="ancor-btn footer-ancor" to="/kreston">مجموعة كرستون العالمية</Link>
            </li>
            <li>
              <a className="ancor-btn footer-ancor" href="blog.html">  المدونة  
              </a>
            </li>
            <li>
              <a className="ancor-btn footer-ancor" href="contact.html">  اتصل بنا  
              </a>
            </li>
          </ul>
        </div>
        <div className="services-links">
          <h4 className="footer-title">خدماتنا </h4>
          
          <ul className="ul-es quick-drop">
            <li>
              <a className="ancor-btn footer-ancor" href="#">التدقيق والمراجعة  </a>
            </li>
            <li>
              <Link to="/service" className="ancor-btn footer-ancor">  الاستشارات الزكوية والضريبية</Link>
            </li>
            <li>
              <a className="ancor-btn footer-ancor" href="#"> المحاسبة القضائية
              </a>
            </li>
          
            <li>
              <a className="ancor-btn footer-ancor" href="#"> التصفية للشركات
              </a>
            </li>
          
            <li>
              <a className="ancor-btn footer-ancor" href="#"> الحراسة القضائية
              </a>
            </li>
            <li>
              <a  className="ancor-btn footer-ancor" href="#"> التسجيل المحاسبي
              </a>
            </li>
            <li>
              <a  className="ancor-btn footer-ancor" href="#"> أعمال التفليسة
 
              </a>
            </li>
            <li>
              <a  className="ancor-btn footer-ancor" href="#"> مساعدة الشركات
 
              </a>
            </li>
          </ul>
        </div>
        <div className="contact">
          <h4 className="footer-title">معلومات التواصل  </h4>
          <ul className="ul-es quick-drop">
            <li>
              <i className="fab fa-whatsapp "></i>
              <div className="phones">
                <a className="ancor-btn footer-ancor" href="http://wa.me/+966532600666">+966532600666</a>
              </div>
            </li>
            <li>
              <i className="las la-phone "></i>
              <div className="phones">
                <a className="ancor-btn footer-ancor" href="tel:+966126123322">+966126123322</a>
              </div>
            </li>
            <li>
              <i className="las  la-envelope"></i>
              <a className="ancor-btn footer-ancor" href="mailto:info@rekazelhadarh.com">care@sbkreston.com</a>
            </li>
            <li>
              <div className="social">
                <a className="ancor-btn" href="#">
                  <i className="lab la-whatsapp"></i>
                 </a>
                <a className="ancor-btn" href="#">
                  <i className="lab la-linkedin-in"></i>
                </a>
                <a className="ancor-btn" href="#">
                  <i className="lab la-instagram"></i>
                </a>
               <a className="ancor-btn" href="#">
                <i className="lab la-twitter"></i>
               </a>
               <a className="ancor-btn" href="#">
                <i className="lab la-facebook-f"></i>
               </a>
              </div>
            </li>
          </ul>
        </div>
        <div className="newsletter">
          <h4 className="footer-title">النشرة البريدية </h4>
          <div className="nested">
           <p>اشترك في القائمة البريدية ليصلك جديد أخبارنا</p>
            <div className="message">
              <input type="text" placeholder="ادخل بريدك الالكترونى" />
              <button className="ancor-btn">
                <i className="las mail-icon la-arrow-left"></i>
              </button>
            </div>
          </div>
        </div>
    </div>
    <div className="copyright">
    <p>© شركة عبد القادر سندي ومازن بترجي 2023 </p>
    <div className="tasawk-sec">
      <p> صنع فى  </p>
      <a className="ancor-btn" href="#"><img src="images/tasawk-ar-dark.png" alt="" /></a>
    </div>
    </div>
  </div>
</footer>
   
   </>
  )
}
