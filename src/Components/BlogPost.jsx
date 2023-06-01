/* eslint-disable jsx-a11y/anchor-is-valid */
import React , {useRef} from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore , { Pagination , Navigation , Autoplay  } from "swiper";

export default function BlogPost() {


  SwiperCore.use([Autoplay])
  const pagination = {
    clickable: true,
  };

  
  const blogPostRef = useRef();

  return (
    <>
    
    {/* <!-- Bread crumb  --> */}

    <section className="breadcrumb-sec breadcrumb-container blog-post-breadcrumb" >
        <div className="breadcrumb-content">
            <div className="container">
                <div className="breadcrumb-details">
                    <h2 className="page-head "> خلافاَ للإعتقاد السائد فإن لوريم إيبسوم ليس نصاَ عشوائياً   </h2>
                    <ol className="breadcrumb">
                      <li className="link-item">
                        <a className="bread-link" href="index.html">الرئيسيه</a>
                      </li>
                      <li className="link-item">
                        <a className="bread-link" href="blog.html">المدونة</a>
                      </li>
                      <li className="active">
                        <span className="bread-current">  خلافاَ للإعتقاد السائد فإن لوريم إيبسوم ليس نصاَ عشوائياً </span>
                      </li>
                    </ol>
                </div>
              </div>
        </div>
       
      </section>

      {/* <!-- end of Bread crumb  --> */}


<div className="blog-post">
    <div className="container">
        <div className="mycontainer">
            <div className="banner-holder">
                <img src="images/blog-post/banner.png" alt="" />
            </div>
            <div className="post-details">
                <div>
                    <i className="las la-calendar"></i>
                    <span>13 يناير 2023</span>
                </div>
                <div>
                    <i className="las la-eye"></i>
                    <span>1422</span>
                </div>
            </div>
            <p  className="post-text">هنالك العديد من الأنواع المتوفرة لنصوص لوريم إيبسوم، ولكن الغالبية تم تعديلها بشكل ما عبر إدخال بعض النوادر أو الكلمات العشوائية إلى النص. إن كنت تريد أن تستخدم نص لوريم إيبسوم ما، عليك أن تتحقق أولاً أن ليس هناك أي كلمات أو عبارات محرجة أو غير لائقة مخبأة في هذا النص. بينما تعمل جميع مولّدات نصوص لوريم إيبسوم على الإنترنت على إعادة تكرار مقاطع من نص لوريم إيبسوم نفسه عدة مرات بما تتطلبه الحاجة، يقوم مولّدنا هذا باستخدام كلمات من قاموس يحوي على أكثر من 200 كلمة لا تينية، مضاف إليها مجموعة من الجمل النموذجية، لتكوين نص لوريم إيبسوم ذو شكل منطقي قريب إلى النص الحقيقي. وبالتالي يكون النص الناتح خالي من التكرار، أو أي كلمات أو عبارات غير لائقة أو ما شابه. وهذا ما يجعله أول مولّد نص لوريم إيبسوم حقيقي على الإنترنت.</p>
            <p className="post-text">هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها. ولذلك يتم استخدام طريقة لوريم إيبسوم لأنها تعطي توزيعاَ طبيعياَ -إلى حد ما- للأحرف عوضاً عن استخدام "هنا يوجد محتوى نصي، هنا يوجد محتوى نصي" فتجعلها تبدو (أي الأحرف) وكأنها نص مقروء. العديد من برامح النشر المكتبي وبرامح تحرير صفحات الويب تستخدم لوريم إيبسوم بشكل إفتراضي كنموذج عن النص، وإذا قمت بإدخال "lorem ipsum" في أي محرك بحث ستظهر العديد من المواقع الحديثة العهد في نتائج البحث. على مدى السنين ظهرت نسخ جديدة ومختلفة من نص لوريم إيبسوم، أحياناً عن طريق الصدفة، وأحياناً عن عمد كإدخال بعض العبارات الفكاهية إليها.</p>
            <div className="tags">
                <a href="#" className="ancor-btn">لوريم</a>
                <a href="#" className="ancor-btn">ايبسوم</a>
                <a href="#" className="ancor-btn">المحتوى</a>
                <a href="#" className="ancor-btn">النشر</a>
                <a href="#" className="ancor-btn">المكتبى</a>
            </div>
            <div className="share-sec">
                <a href="#" className="ancor-btn facebook">
                    <i className="fab fa-facebook"></i>
                    <span>فيسبوك</span>
                </a>
                <a href="#" className="ancor-btn twitter ">
                    <i className="lab la-twitter"></i>
                    <span>تويتر</span>
                </a>
                <a href="#" className="ancor-btn general linkedin">
                    <i className="lab la-linkedin-in"></i>
                </a>
                <a href="#" className="ancor-btn general tumblr">
                    <i className="fab fa-tumblr"></i>
                </a>
                <a href="#" className="ancor-btn general pinterest">
                    <i className="fab fa-pinterest"></i>
                </a>
                <a href="#" className="ancor-btn general reddit">
                    <i className="fab fa-reddit"></i>
                </a>
                <a href="#" className="ancor-btn general vk">
                    <i className="fab fa-vk"></i>
                </a>
                <a href="#" className="ancor-btn general mail">
                    <i className="fas fa-envelope"></i>
                </a>
                <a href="#" className="ancor-btn general print">
                    <i className="las la-print"></i>
                </a>
            </div>
            <div className="prev-next-articles">
                <a href="#" className="ancor-btn prev-article">
                    <i className="las la-angle-right"></i>
                    المقال السابق
                </a>
                <a href="#" className="ancor-btn next-article">
                    المقال التالي
                    <i className="las la-angle-left"></i>
                </a>
            </div>
        </div>
        <div className="another-articles">
            <h2 className="title">مقالات اخرى قد تهمك</h2>
            <div className="blog-post-parent">
            <Swiper
          onBeforeInit={(swiper) => {
            blogPostRef.current = swiper;
          }}
          loop={true}
          // autoplay={{
          //   delay: 2500,
          //   disableOnInteraction: false,
          // }}
              grabCursor={true}
              spaceBetween={30}
              pagination={pagination}
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
          <div onClick={() => blogPostRef.current.slidePrev()}  className="swiper-button-prev">
                  <i className="las la-long-arrow-alt-left"></i>
          </div>
          <div onClick={() => blogPostRef.current.slideNext()}  className="swiper-button-next">
            <i className="las la-long-arrow-alt-right"></i>
          </div>
          
        </div>
        </div>
      
    </div>
</div>

    </>
  )
}
