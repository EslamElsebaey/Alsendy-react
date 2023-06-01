import React , {useRef , useEffect} from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import  { Pagination , Navigation   } from "swiper";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "swiper/css/navigation";


export default function About() {

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
  

  const officeRef = useRef();

  return (
    <>
    
   

    <section className="breadcrumb-sec breadcrumb-container">
        <div className="breadcrumb-content">
            <div className="container">
                <div className="breadcrumb-details">
                    <h2 className="page-head ">عن الشركة  </h2>
                    <ol className="breadcrumb">
                      <li className="link-item">
                        <a className="bread-link" href="index.html">الرئيسيه</a>
                      </li>
                      <li className="active">
                        <span className="bread-current"> عن الشركة</span>
                      </li>
                    </ol>
                </div>
              </div>
        </div>
       
      </section>

      {/* <!-- about-page-sec --> */}
 <div className="about-page-sec">
  <div className="container">
    <div className="main-desc">
      <h2>شركة عبد القادر سندي ومازن بترجي
        للمحاسبة والمراجعة</h2>
       <p>نعمل في شركة سندي وبترجي على تقديم خدمات المراجعة والتدقيق والاستشارات المحاسبية والمالية والمحاسبة القضائية والخدمات الزكوية والضريبية بحرفية من خلال كوادر مهنية ذات خبرة وتأهيل عالي لتلبية احتياجات عملائنا ومساعدتهم في تحقيق أهدافهم، ونحن نعمل على هذا الهدف منذ بدأ تأسيس المكاتب المكونة للشركة وممارستها المهنة بالمملكة العربية السعودية في التواريخ التالية:
    </p>

    </div>
    <div className="office-swiper">
        <div className="office-parent">
        <Swiper
       onBeforeInit={(swiper) => {
        officeRef.current = swiper;
      }}
   
    autoplay={{
      delay: 2500,
      disableOnInteraction: false,
    }}
        loop={true}
        pagination={true}
        grabCursor={true}
        spaceBetween={0}
        navigation={true}
        breakpoints = {
          {
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            767: {
              slidesPerView: 2,
              grid: {
                rows: 2,
              },
              spaceBetween: 30,
            },
            992: {
              slidesPerView: 2,
              grid: {
                rows: 2,
              },
              spaceBetween: 30,
            },
            1200: {
              slidesPerView: 3,
              grid: {
                rows: 2,
              },
              spaceBetween: 30,
            },
          }
        }  
        modules={[Pagination , Navigation]}
        className="mySwiper"
      >
      
        <SwiperSlide>
        <div className="office-item">
                    <div className="office-item-cont">
                      <div className="img-holder">
                        <img src="/images/about/office-img.png"  alt="" />
                      </div>
                      <div className="office-item-details">
                        <h3>مكتب عبدالقادر علي سندي</h3>
                        <p>مكتب عبدالقادر على سندي قيد سجل المحاسبين القانونيين رقم (117) فى 1403/03/18هـ</p>
                      </div>
                    </div>
                  </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="office-item">
                    <div className="office-item-cont">
                      <div className="img-holder">
                        <img src="/images/about/office-img.png"  alt="" />
                      </div>
                      <div className="office-item-details">
                        <h3>مكتب عبدالقادر علي سندي</h3>
                        <p>مكتب عبدالقادر على سندي قيد سجل المحاسبين القانونيين رقم (117) فى 1403/03/18هـ</p>
                      </div>
                    </div>
                  </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="office-item">
                    <div className="office-item-cont">
                      <div className="img-holder">
                        <img src="/images/about/office-img.png"  alt="" />
                      </div>
                      <div className="office-item-details">
                        <h3>مكتب عبدالقادر علي سندي</h3>
                        <p>مكتب عبدالقادر على سندي قيد سجل المحاسبين القانونيين رقم (117) فى 1403/03/18هـ</p>
                      </div>
                    </div>
                  </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="office-item">
                    <div className="office-item-cont">
                      <div className="img-holder">
                        <img src="/images/about/office-img.png"  alt="" />
                      </div>
                      <div className="office-item-details">
                        <h3>مكتب عبدالقادر علي سندي</h3>
                        <p>مكتب عبدالقادر على سندي قيد سجل المحاسبين القانونيين رقم (117) فى 1403/03/18هـ</p>
                      </div>
                    </div>
                  </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="office-item">
                    <div className="office-item-cont">
                      <div className="img-holder">
                        <img src="/images/about/office-img.png"  alt="" />
                      </div>
                      <div className="office-item-details">
                        <h3>مكتب عبدالقادر علي سندي</h3>
                        <p>مكتب عبدالقادر على سندي قيد سجل المحاسبين القانونيين رقم (117) فى 1403/03/18هـ</p>
                      </div>
                    </div>
                  </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="office-item">
                    <div className="office-item-cont">
                      <div className="img-holder">
                        <img src="/images/about/office-img.png"  alt="" />
                      </div>
                      <div className="office-item-details">
                        <h3>مكتب عبدالقادر علي سندي</h3>
                        <p>مكتب عبدالقادر على سندي قيد سجل المحاسبين القانونيين رقم (117) فى 1403/03/18هـ</p>
                      </div>
                    </div>
                  </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="office-item">
                    <div className="office-item-cont">
                      <div className="img-holder">
                        <img src="/images/about/office-img.png"  alt="" />
                      </div>
                      <div className="office-item-details">
                        <h3>مكتب عبدالقادر علي سندي</h3>
                        <p>مكتب عبدالقادر على سندي قيد سجل المحاسبين القانونيين رقم (117) فى 1403/03/18هـ</p>
                      </div>
                    </div>
                  </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="office-item">
                    <div className="office-item-cont">
                      <div className="img-holder">
                        <img src="/images/about/office-img.png"  alt="" />
                      </div>
                      <div className="office-item-details">
                        <h3>مكتب عبدالقادر علي سندي</h3>
                        <p>مكتب عبدالقادر على سندي قيد سجل المحاسبين القانونيين رقم (117) فى 1403/03/18هـ</p>
                      </div>
                    </div>
                  </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="office-item">
                    <div className="office-item-cont">
                      <div className="img-holder">
                        <img src="/images/about/office-img.png"  alt="" />
                      </div>
                      <div className="office-item-details">
                        <h3>مكتب عبدالقادر علي سندي</h3>
                        <p>مكتب عبدالقادر على سندي قيد سجل المحاسبين القانونيين رقم (117) فى 1403/03/18هـ</p>
                      </div>
                    </div>
                  </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="office-item">
                    <div className="office-item-cont">
                      <div className="img-holder">
                        <img src="/images/about/office-img.png"  alt="" />
                      </div>
                      <div className="office-item-details">
                        <h3>مكتب عبدالقادر علي سندي</h3>
                        <p>مكتب عبدالقادر على سندي قيد سجل المحاسبين القانونيين رقم (117) فى 1403/03/18هـ</p>
                      </div>
                    </div>
                  </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="office-item">
                    <div className="office-item-cont">
                      <div className="img-holder">
                        <img src="/images/about/office-img.png"  alt="" />
                      </div>
                      <div className="office-item-details">
                        <h3>مكتب عبدالقادر علي سندي</h3>
                        <p>مكتب عبدالقادر على سندي قيد سجل المحاسبين القانونيين رقم (117) فى 1403/03/18هـ</p>
                      </div>
                    </div>
                  </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="office-item">
                    <div className="office-item-cont">
                      <div className="img-holder">
                        <img src="/images/about/office-img.png"  alt="" />
                      </div>
                      <div className="office-item-details">
                        <h3>مكتب عبدالقادر علي سندي</h3>
                        <p>مكتب عبدالقادر على سندي قيد سجل المحاسبين القانونيين رقم (117) فى 1403/03/18هـ</p>
                      </div>
                    </div>
                  </div>
        </SwiperSlide>
      
    </Swiper>
    <div onClick={() => officeRef.current.slideNext()} className="swiper-button-prev">
            <i className="las la-long-arrow-alt-left"></i>
    </div>
    <div  onClick={() => officeRef.current.slidePrev()} className="swiper-button-next">
      <i className="las la-long-arrow-alt-right"></i>
    </div>
    
  </div>
    </div>
  </div>
</div> 
{/* <!-- end of about-page-sec --> */}
{/* <!--priorities-sec  --> */}
<div className="priorities-sec">
<div className="container">
  <h2 className="title">
    محاور أولوياتنا واهدافنا الإستراتيجية
  </h2>
  <div className="priorities-parent">
      <div className="priority-item">
        <div className="img-holder">
          <img src="/images/about/priorities/01.png"  alt="" />
        </div>
        <h3>العملاء</h3>
        <p>تلبية احتياجات عملائنا ومساعدتهم في تحقيق اهدافهم وتعزيز الثقة والولاء</p>
      </div>
      <div className="priority-item">
        <div className="img-holder">
          <img src="/images/about/priorities/02.png"  alt="" />
        </div>
        <h3>العمليات الداخلية</h3>
        <p>تقديم الخدمات بمهنية واحترافية والسرعة في الإنجاز والتنسيق الفعال مع الجهات ذات العلاقة والدراسة الدائمة لإحتياجات أصحاب العلاقة والبحث عن أفضل الممارسات لتلبيتها </p>
      </div>
      <div className="priority-item">
        <div className="img-holder">
          <img src="/images/about/priorities/03.png"  alt="" />
        </div>
        <h3>التعلم والنمو </h3>
      <p>استقطاب واستبقاء كوادر راغبة وقادرة على الأداء وبناء مناخ عمل مهني وايجابي والتأهيل المهني للكوادر والاستخدام الأمثل للتقنية</p>
      </div>
  </div>
</div>
</div>

{/* <!-- end of priorities-sec  --> */}
{/* <!-- vision-counter-sec --> */}
<div className="about-page-vision-counter">
    <div className="container">
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

{/* <!-- end of vision-counter-sec --> */}

     
    </>
  )
}
