import React , {useEffect} from 'react'
import mixitup from 'mixitup'
import { Link, Outlet } from 'react-router-dom';

export default function Blog() {



    useEffect(()=>{
        let mixitDiv = document.querySelector("#mix-container");
        var mixer = mixitup(mixitDiv, {
          animation: {
            effects: "fade scale(0.5)",
          },
        });
       })
  return (
    <>
    {/* <!-- Bread crumb  --> */}

<section className="breadcrumb-sec breadcrumb-container">
    <div className="breadcrumb-content">
        <div className="container">
            <div className="breadcrumb-details">
                <h2 className="page-head "> المدونة   </h2>
                <ol className="breadcrumb">
                  <li className="link-item">
                    <a className="bread-link" href="index.html">الرئيسيه</a>
                  </li>
                  <li className="active">
                    <span className="bread-current">  المدونة </span>
                  </li>
                </ol>
            </div>
          </div>
    </div>
   
  </section>

  {/* <!-- end of Bread crumb  --> */}



<div className="blog">
<div className="container">
    <div className="blog-parent" id="mix-container">
        <div className="mix-btn-content">
            <button className="mix-btn mixitup-control-active  ancor-btn" type="button" data-filter="all">
                الكل
            </button>
            <button className="mix-btn ancor-btn" type="button" data-filter=".category-a">
                المعايير الدولية
            </button>
            <button className="mix-btn ancor-btn" type="button" data-filter=".category-b">
                الانظمة و اللوائح
            </button>
            <button className="mix-btn ancor-btn" type="button" data-filter=".category-c">
                الثقافة المحاسبية
            </button>
        </div>
        <div className="mix category-a" data-order="1">
            <div className="blog-content">
              <div className="news-item">
                <div className="news-img-wrapper">
                  <a href="#"> <img src="images/blog/01.png" alt="image" /></a>
                  <div className="news-views">
                    <i className=" las la-eye"></i>
                    2158
                  </div>
                </div>
                  <div className="news-item-desc">
                    <Link to="/blogPost" className="ancor-btn main-desc-ancor">خلافاَ للإعتقاد السائد فإن لوريم إيبسوم ليس نصاَ عشوائياً </Link>
                  <p>خلافاَ للإعتقاد السائد فإن لوريم إيبسوم ليس نصاَ عشوائياً، بل إن له جذور في الأدب اللاتيني الكلاسيكي منذ العام 45 قبل الميلاد، مما يجعله أكثر من 2000 عام</p>
                    <a href="#" className="ancor-btn readmore">قراءة المزيد</a>
                  </div>
            </div>
            <div className="news-item">
              <div className="news-img-wrapper">
                <a href="#"> <img src="images/blog/02.png" alt="image" /></a>
                <div className="news-views">
                  <i className=" las la-eye"></i>
                  2158
                </div>
              </div>
                <div className="news-item-desc">
                   <Link to="/blogPost" className="ancor-btn main-desc-ancor">خلافاَ للإعتقاد السائد فإن لوريم إيبسوم ليس نصاَ عشوائياً </Link>
                <p>خلافاَ للإعتقاد السائد فإن لوريم إيبسوم ليس نصاَ عشوائياً، بل إن له جذور في الأدب اللاتيني الكلاسيكي منذ العام 45 قبل الميلاد، مما يجعله أكثر من 2000 عام</p>
                  <a href="#" className="ancor-btn readmore">قراءة المزيد</a>
                </div>
            </div>
            </div>
        </div>
        <div className="mix category-b" data-order="2">
            <div className="blog-content">
                  <div className="news-item">
                    <div className="news-img-wrapper">
                      <a href="#"> <img src="images/blog/03.png" alt="image" /></a>
                      <div className="news-views">
                        <i className=" las la-eye"></i>
                        2158
                      </div>
                    </div>
                      <div className="news-item-desc">
                         <Link to="/blogPost" className="ancor-btn main-desc-ancor">خلافاَ للإعتقاد السائد فإن لوريم إيبسوم ليس نصاَ عشوائياً </Link>
                      <p>خلافاَ للإعتقاد السائد فإن لوريم إيبسوم ليس نصاَ عشوائياً، بل إن له جذور في الأدب اللاتيني الكلاسيكي منذ العام 45 قبل الميلاد، مما يجعله أكثر من 2000 عام</p>
                        <a href="#" className="ancor-btn readmore">قراءة المزيد</a>
                      </div>
                  </div>
                  <div className="news-item">
                    <div className="news-img-wrapper">
                      <a href="#"> <img src="images/blog/04.png" alt="image" /></a>
                      <div className="news-views">
                        <i className=" las la-eye"></i>
                        2158
                      </div>
                    </div>
                      <div className="news-item-desc">
                         <Link to="/blogPost" className="ancor-btn main-desc-ancor">خلافاَ للإعتقاد السائد فإن لوريم إيبسوم ليس نصاَ عشوائياً </Link>
                      <p>خلافاَ للإعتقاد السائد فإن لوريم إيبسوم ليس نصاَ عشوائياً، بل إن له جذور في الأدب اللاتيني الكلاسيكي منذ العام 45 قبل الميلاد، مما يجعله أكثر من 2000 عام</p>
                        <a href="#" className="ancor-btn readmore">قراءة المزيد</a>
                      </div>
                  </div>
                
            </div>
             
        </div>
        <div className="mix category-c category-c" data-order="3">
            <div className="blog-content">
                  <div className="news-item">
                    <div className="news-img-wrapper">
                      <a href="#"> <img src="images/blog/05.png" alt="image" /></a>
                      <div className="news-views">
                        <i className=" las la-eye"></i>
                        2158
                      </div>
                    </div>
                      <div className="news-item-desc">
                         <Link to="/blogPost" className="ancor-btn main-desc-ancor">خلافاَ للإعتقاد السائد فإن لوريم إيبسوم ليس نصاَ عشوائياً </Link>
                      <p>خلافاَ للإعتقاد السائد فإن لوريم إيبسوم ليس نصاَ عشوائياً، بل إن له جذور في الأدب اللاتيني الكلاسيكي منذ العام 45 قبل الميلاد، مما يجعله أكثر من 2000 عام</p>
                        <a href="#" className="ancor-btn readmore">قراءة المزيد</a>
                      </div>
                  </div>
                  <div className="news-item">
                    <div className="news-img-wrapper">
                      <a href="#"> <img src="images/blog/06.png" alt="image" /></a>
                      <div className="news-views">
                        <i className=" las la-eye"></i>
                        2158
                      </div>
                    </div>
                      <div className="news-item-desc">
                         <Link to="/blogPost" className="ancor-btn main-desc-ancor">خلافاَ للإعتقاد السائد فإن لوريم إيبسوم ليس نصاَ عشوائياً </Link>
                      <p>خلافاَ للإعتقاد السائد فإن لوريم إيبسوم ليس نصاَ عشوائياً، بل إن له جذور في الأدب اللاتيني الكلاسيكي منذ العام 45 قبل الميلاد، مما يجعله أكثر من 2000 عام</p>
                        <a href="#" className="ancor-btn readmore">قراءة المزيد</a>
                      </div>
                  </div>
            </div>
           
        </div>
        <div className="mix  category-d" data-order="4">
            <div className="blog-content">
                <div className="news-item">
                    <div className="news-img-wrapper">
                      <a href="#"> <img src="images/blog/01.png" alt="image" /></a>
                      <div className="news-views">
                        <i className=" las la-eye"></i>
                        2158
                      </div>
                    </div>
                      <div className="news-item-desc">
                         <Link to="/blogPost" className="ancor-btn main-desc-ancor">خلافاَ للإعتقاد السائد فإن لوريم إيبسوم ليس نصاَ عشوائياً </Link>
                      <p>خلافاَ للإعتقاد السائد فإن لوريم إيبسوم ليس نصاَ عشوائياً، بل إن له جذور في الأدب اللاتيني الكلاسيكي منذ العام 45 قبل الميلاد، مما يجعله أكثر من 2000 عام</p>
                        <a href="#" className="ancor-btn readmore">قراءة المزيد</a>
                      </div>
                </div>
                <div className="news-item">
                    <div className="news-img-wrapper">
                      <a href="#"> <img src="images/blog/02.png" alt="image" /></a>
                      <div className="news-views">
                        <i className=" las la-eye"></i>
                        2158
                      </div>
                    </div>
                      <div className="news-item-desc">
                         <Link to="/blogPost" className="ancor-btn main-desc-ancor">خلافاَ للإعتقاد السائد فإن لوريم إيبسوم ليس نصاَ عشوائياً </Link>
                      <p>خلافاَ للإعتقاد السائد فإن لوريم إيبسوم ليس نصاَ عشوائياً، بل إن له جذور في الأدب اللاتيني الكلاسيكي منذ العام 45 قبل الميلاد، مما يجعله أكثر من 2000 عام</p>
                        <a href="#" className="ancor-btn readmore">قراءة المزيد</a>
                      </div>
                  </div>
            </div>
            
        </div>
    </div>
</div>
</div>




    
    </>
  )
}
