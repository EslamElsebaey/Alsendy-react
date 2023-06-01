import React, { useEffect, useRef  } from 'react'
// import $ from "jquery"
import { Swiper, SwiperSlide } from "swiper/react";
import  { Pagination , Navigation , Autoplay  } from "swiper";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "swiper/css/navigation";


export default function Home() {


  useEffect(()=>{
    // Counters
    function startCounters (){
      const mySection = document.querySelector('.counter-sec'); 
      const mySectionOffsetTop = mySection.offsetTop; 
      const windowHeight = window.innerHeight; 
      
      window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY; 
        if (scrollPosition > mySectionOffsetTop - windowHeight) {
      
      
          let  numDivs  = document.querySelectorAll(".num-holder h4") ; 
          let interval = 5000 ; 
          
        numDivs.forEach((numDiv)=>{
          if(numDiv.innerHTML === "0"){
            let startValue = 0 ; 
            let endValue = parseInt(numDiv.dataset.num ) ; 
            let duration =  Math.floor(interval / numDiv.dataset.num )  ;
            let counter =  setInterval(() => {
            startValue++ ;
            numDiv.textContent = startValue ;
             if(startValue === endValue){
               clearInterval(counter)
            }
        }, duration);
          }
        
      } )
      
          
        }
      });
    }
    startCounters()
    // end of counters
  })
  
  const NewsSwiperRef = useRef(null)
  const mainBannerSwiperRef = useRef(null)

  return (
    <>
   
  
    {/* Main Bnanner */}
     <main className="mainBanner  ">
  <div className="mainBanner-parent">
    <Swiper
    // autoplay={{
    //   delay: 2500,
    //   disableOnInteraction: false,
    // }}
    onBeforeInit={(swiper)=>{
      mainBannerSwiperRef.current = swiper
    }}
        loop={true}
        grabCursor={true}
        spaceBetween={0}
        pagination={true}
        navigation={true}
        breakpoints= {
          {
            640: {
              slidesPerView: 1,
            },
          } 
        } 
        modules={[Pagination , Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
        <div className="mainslider-item   ">
          <a className="mainBanner-link"  >
            <img  src="images/home/mainBanner.jpg" alt='gggg' />
          </a>
          <div className="banner-desc">
            <span>خبرة وموثوقية  </span>
            <h2>سنوات من الخبرة مع فريق عمل متمرس حققنا فيها نجاحات متميزة أكسبتنا ثقة جميع عملاؤنا</h2>
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="mainslider-item   ">
          <a className="mainBanner-link"  >
            <img  src="images/home/mainBanner.jpg" alt='' />
          </a>
          <div className="banner-desc">
            <span>خبرة وموثوقية  </span>
            <h2>سنوات من الخبرة مع فريق عمل متمرس حققنا فيها نجاحات متميزة أكسبتنا ثقة جميع عملاؤنا</h2>
          </div>
          </div>
        </SwiperSlide>
      
    </Swiper>
    <div className="swiper-buttons">
    <div onClick={()=> mainBannerSwiperRef.current.slidePrev()}  className="swiper-button-prev">
            <i className="las la-long-arrow-alt-right"></i>
    </div>
    <div onClick={()=> mainBannerSwiperRef.current.slideNext()}  className="swiper-button-next">
      <i className="las la-long-arrow-alt-left"></i>
    </div>
    </div>
    
    </div>
    </main> 
    {/* About Section */}
    <div className="about">
      <div className="container">
        <div className="main-desc">
          <h2>شركة عبد القادر سندي ومازن بترجي
            للمحاسبة والمراجعة</h2>
            <p>نعمل في شركة سندي وبترجي على تقديم خدمات المراجعة والتدقيق والاستشارات المحاسبية والمالية والمحاسبة القضائية والخدمات الزكوية والضريبية بحرفية من خلال كوادر مهنية ذات خبرة وتأهيل عالي لتلبية احتياجات عملائنا ومساعدتهم في تحقيق أهدافهم </p>
            <a   className="ancor-btn readMore">قراءة المزيد</a>

        </div>
        <div className="vision-counter-sec">
          <div className="vision-parent">
            <div className="vision-item">
              <i className="vision-icon las la-eye"></i>
              <h3 className="vision-title">رؤيتنا</h3>
              <p className="vision-desc">أن تكون شركة سندي وبترجي رائدة في تقديم خدمات مراجعة وتدقيق الحسابات والاستشارات المحاسبية والمالية والمحاسبة القضائية والخدمات الزكوية والضريبية، في المملكة العربية السعودية </p>
            </div>
            <div className="vision-item">
              <i className="las vision-icon la-scroll"></i>
              <h3 className="vision-title">رسالتنا</h3>
              <p className="vision-desc">تقديم خدمات المراجعة والتدقيق والإستشارات المحاسبية والمالية والمحاسبة القضائية والخدمات الزكوية والضريبية بحرفية من خلال كوادر مهنية ذات خبرة وتأهيل عالي لتلبية احتياجات عملائنا ومساعدتهم في تحقيق أهدافهم.
              </p>
            </div>
          </div>
          <div className="counter-sec">
            <div className="counter-parent">
              <div className="counter-item">
                <div className="num-holder">
                  <h4  data-num="1000" className=" num ">0</h4>
                </div> 
                <span>عملاء وشركاء نجاح </span>
              </div>
              <div className="counter-item">
                <div className="num-holder"> <span>+</span> <h4  data-num="750" className=" num ">0</h4></div>
                <span> استشارة قانونية ومالية</span>
              </div>
              <div className="counter-item">
              <div className="num-holder"><h4  data-num="100" className=" num ">0</h4><span>%</span></div> 
                <span> توصيات ونجاحات في جميع الاستشارات</span>
              </div>
              <div className="counter-item">
                <div className="num-holder"><h4  data-num="5" className=" num ">0</h4></div> 
                <span> فروعٌ لنا حول المملكة</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> 
    {/* Services Section */}
    <div className="services">
      <div className="container">
        <h2 className="title">خدماتنا</h2>
        <div className="services-parent">
          <div className="service-item">
            <a href="#">
              <div>
                <img src="images/home/services/01.png" alt="" />
              </div>
            
            <h3>التدقيق والمراجعة</h3>
          </a>
          </div>
          <div className="service-item">
            <a href="#">
              <div> <img src="images/home/services/02.png" alt="" /></div>
          
            <h3> الاستشارات الزكوية والضريبية</h3>
          </a>
          </div>
          <div className="service-item">
            <a href="#">
            <div><img src="images/home/services/03.png" alt="" /></div>
            <h3> المحاسبة القضائية</h3>
          </a>
          </div>
          <div className="service-item">
            <a href="#">
          <div><img src="images/home/services/04.png" alt="" /></div> 
            <h3>  التصفية للشركات</h3>
          </a>
          </div>
          <div className="service-item">
            <a href="#">
          <div><img src="images/home/services/05.png" alt="" /></div> 
            <h3>    الحراسة القضائية</h3>
          </a>
          </div>
          <div className="service-item">
            <a href="#">
              <div> <img src="images/home/services/06.png" alt="" /></div>
          
            <h3>   التسجيل المحاسبي</h3>
          </a>
          </div>
          <div className="service-item">
            <a href="#">
              <div><img src="images/home/services/07.png" alt="" / ></div>
            
            <h3>    أعمال التفليسة</h3>
            </a>
          </div>
          <div className="service-item">
            <a href="#">
              <div> <img src="images/home/services/08.png" alt="" /></div>
          
            <h3>     مساعدة الشركات</h3>
          </a>
          </div>
        </div>
        <div className="service-request-sec">
          <div className="servic-request-cont">
            <h2>شركة عبد القادر سندي ومازن بترجي للاستشارات القانونية والمالية وعضو كرستون انترناشيونال</h2>
          <button  className="ancor-btn service-request-btn " data-toggle="modal" data-target="#exampleModal">اطلب خدمتك الآن</button>
          </div>
        </div>
      </div>
    </div> 
    {/* News Section  */}
  
      <div className="news news-swiper">
        <div className="container">
          <h2 className="title">المدونة  </h2>
          <div className="news-parent">
          <Swiper
          onBeforeInit={(swiper)=>{
            NewsSwiperRef.current = swiper
          }}
          loop={true}
          // autoplay={{
          //   delay: 2500,
          //   disableOnInteraction: false,
          // }}
              grabCursor={true}
              spaceBetween={30}
              pagination={true}
              navigation={true}
              breakpoints= {
                {
                  640: {
                    slidesPerView: 1,
                  },
                  768: {
                    slidesPerView: 2,
                  },
                } 
              } 
              modules={[Pagination , Navigation , Autoplay]}
              className="mySwiper"
            >
              <SwiperSlide>
              <div className="news-item">
                    <div className="news-img-wrapper">
                      <a  > <img src="images/home/news/01.png" alt="kkk" /></a>
                      <div className="news-views">
                        <i className=" las la-eye"></i>
                        2158
                      </div>
                    </div>
                      <div className="news-item-desc">
                        <a className="ancor-btn main-desc-ancor" href="blog-post.html">خلافاَ للإعتقاد السائد فإن لوريم إيبسوم ليس نصاَ عشوائياً    </a>
                      <p>خلافاَ للإعتقاد السائد فإن لوريم إيبسوم ليس نصاَ عشوائياً، بل إن له جذور في الأدب اللاتيني الكلاسيكي منذ العام 45 قبل الميلاد، مما يجعله أكثر من 2000 عام</p>
                        <a   className="ancor-btn readmore">قراءة المزيد</a>
                      </div>
                  </div>
              </SwiperSlide>
              <SwiperSlide>
              <div className="news-item">
                    <div className="news-img-wrapper">
                      <a  > <img src="images/home/news/01.png" alt="kkk" /></a>
                      <div className="news-views">
                        <i className=" las la-eye"></i>
                        2158
                      </div>
                    </div>
                      <div className="news-item-desc">
                        <a className="ancor-btn main-desc-ancor" href="blog-post.html">خلافاَ للإعتقاد السائد فإن لوريم إيبسوم ليس نصاَ عشوائياً    </a>
                      <p>خلافاَ للإعتقاد السائد فإن لوريم إيبسوم ليس نصاَ عشوائياً، بل إن له جذور في الأدب اللاتيني الكلاسيكي منذ العام 45 قبل الميلاد، مما يجعله أكثر من 2000 عام</p>
                        <a   className="ancor-btn readmore">قراءة المزيد</a>
                      </div>
                  </div>
              </SwiperSlide>
              <SwiperSlide>
              <div className="news-item">
                    <div className="news-img-wrapper">
                      <a  > <img src="images/home/news/02.png" alt="kkk" /></a>
                      <div className="news-views">
                        <i className=" las la-eye"></i>
                        2158
                      </div>
                    </div>
                      <div className="news-item-desc">
                        <a className="ancor-btn main-desc-ancor" href="blog-post.html">خلافاَ للإعتقاد السائد فإن لوريم إيبسوم ليس نصاَ عشوائياً    </a>
                      <p>خلافاَ للإعتقاد السائد فإن لوريم إيبسوم ليس نصاَ عشوائياً، بل إن له جذور في الأدب اللاتيني الكلاسيكي منذ العام 45 قبل الميلاد، مما يجعله أكثر من 2000 عام</p>
                        <a   className="ancor-btn readmore">قراءة المزيد</a>
                      </div>
                  </div>
              </SwiperSlide>
              <SwiperSlide>
              <div className="news-item">
                    <div className="news-img-wrapper">
                      <a  > <img src="images/home/news/01.png" alt="kkk" /></a>
                      <div className="news-views">
                        <i className=" las la-eye"></i>
                        2158
                      </div>
                    </div>
                      <div className="news-item-desc">
                        <a className="ancor-btn main-desc-ancor" href="blog-post.html">خلافاَ للإعتقاد السائد فإن لوريم إيبسوم ليس نصاَ عشوائياً    </a>
                      <p>خلافاَ للإعتقاد السائد فإن لوريم إيبسوم ليس نصاَ عشوائياً، بل إن له جذور في الأدب اللاتيني الكلاسيكي منذ العام 45 قبل الميلاد، مما يجعله أكثر من 2000 عام</p>
                        <a   className="ancor-btn readmore">قراءة المزيد</a>
                      </div>
                  </div>
              </SwiperSlide>
             
          </Swiper>
          <div onClick={ ()=> NewsSwiperRef.current.slidePrev() } className="swiper-button-prev">
                  <i className="las la-long-arrow-alt-left"></i>
              </div>
              <div onClick={ ()=> NewsSwiperRef.current.slideNext() }  className="swiper-button-next">
                <i className="las la-long-arrow-alt-right"></i>
          </div>
        
          </div>
        
        
        </div>
      </div> 




    
    </>
  )
}
