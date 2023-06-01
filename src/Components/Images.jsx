import React, { useEffect } from 'react'
// import $ from "jquery"
import '@fancyapps/fancybox';


export default function Images() {


  useEffect(()=> {
    // $('[data-fancybox="images-library"]').fancybox({
    //     buttons : [ 
    //       'slideShow',
    //       'share',
    //       'zoom',
    //       'fullScreen',
    //       'close'
    //     ],
    //   });
  })
            // fancybox
      
   
  return (
    <>
    {/* <!-- Bread crumb  --> */}

<section className="breadcrumb-sec breadcrumb-container">
    <div className="breadcrumb-content">
        <div className="container">
            <div className="breadcrumb-details">
                <h2 className="page-head ">مكتبة الصور   </h2>
                <ol className="breadcrumb">
                  <li className="link-item">
                    <a className="bread-link" href="index.html">الرئيسيه</a>
                  </li>
                  <li className="active">
                    <span className="bread-current"> مكتبة الصور </span>
                  </li>
                </ol>
            </div>
          </div>
    </div>
   
  </section>

  {/* <!-- end of Bread crumb  --> */}




<div className="images">
<div className="container">
    <div className="images-parent">
        <div className="image-item">
            <a  data-caption=" ما هى السلع و الخدمات" href="images/images library/01.png" data-fancybox="images-library">
                <div className="image-div">
                  <img src="images/images library/01.png" alt="" />
                  <div className="image-overlay">
                    <i className="las la-search-plus"></i>
                  </div>
                </div>
              </a>
        </div>
        <div className="image-item">
            <a  data-caption="خطوات افتتاح اجراء افلاس  " href="images/images library/02.png" data-fancybox="images-library">
                <div className="image-div">
                  <img src="images/images library/02.png" alt="" />
                  <div className="image-overlay">
                    <i className="las la-search-plus"></i>
                  </div>
                </div>
              </a>
        </div>
        <div className="image-item">
            <a data-caption="ما هى متطلبات التسجيل" href="images/images library/03.png" data-fancybox="images-library">
                <div className="image-div">
                  <img src="images/images library/03.png" alt="" />
                  <div className="image-overlay">
                    <i className="las la-search-plus"></i>
                  </div>
                </div>
              </a>
        </div>
        <div className="image-item">
            <a data-caption="خطوات تسجيل الافراد الذين يمارسون نشاط تجارى" href="images/images library/04.png" data-fancybox="images-library">
                <div className="image-div">
                  <img src="images/images library/04.png" alt="" />
                  <div className="image-overlay">
                    <i className="las la-search-plus"></i>
                  </div>
                </div>
              </a>
        </div>
        <div className="image-item">
            <a data-caption="شروط تسجيل المجموعة الضريبية " href="images/images library/05.png" data-fancybox="images-library">
                <div className="image-div">
                  <img src="images/images library/05.png" alt="" />
                  <div className="image-overlay">
                    <i className="las la-search-plus"></i>
                  </div>
                </div>
              </a>
        </div>
        <div className="image-item">
            <a data-caption="طرق تساعدك على توفير المال" href="images/images library/06.png" data-fancybox="images-library">
                <div className="image-div">
                  <img src="images/images library/06.png" alt="" />
                  <div className="image-overlay">
                    <i className="las la-search-plus"></i>
                  </div>
                </div>
              </a>
        </div>
        <div className="image-item">
            <a data-caption="الفاتورة الضريبية" href="images/images library/07.png" data-fancybox="images-library">
                <div className="image-div">
                  <img src="images/images library/07.png" alt="" />
                  <div className="image-overlay">
                    <i className="las la-search-plus"></i>
                  </div>
                </div>
              </a>
        </div>
        <div className="image-item">
            <a data-caption="الفاتورة الضريبية المبسطة" href="images/images library/08.png" data-fancybox="images-library">
                <div className="image-div">
                  <img src="images/images library/08.png" alt="" />
                  <div className="image-overlay">
                    <i className="las la-search-plus"></i>
                  </div>
                </div>
              </a>
        </div>
        <div className="image-item">
            <a data-caption="غرامة عدم تقديم الاقرار الضريبى " href="images/images library/09.png" data-fancybox="images-library">
                <div className="image-div">
                  <img src="images/images library/09.png" alt="" />
                  <div className="image-overlay">
                    <i className="las la-search-plus"></i>
                  </div>
                </div>
              </a>
        </div>
        <div className="image-item">
            <a data-caption="علامات تدل على انك بحاجة الى محاسب " href="images/images library/10.png" data-fancybox="images-library">
                <div className="image-div">
                  <img src="images/images library/10.png" alt="" />
                  <div className="image-overlay">
                    <i className="las la-search-plus"></i>
                  </div>
                </div>
              </a>
        </div>
        <div className="image-item">
            <a data-caption="متطلبات الافصاح المالى فى القاوئم المالية " href="images/images library/11.png" data-fancybox="images-library">
                <div className="image-div">
                  <img src="images/images library/11.png" alt="" />
                  <div className="image-overlay">
                    <i className="las la-search-plus"></i>
                  </div>
                </div>
              </a>
        </div>
        <div className="image-item">
            <a data-caption="اسباب اهمية المحاسب للنشاط التجارى" href="images/images library/12.png" data-fancybox="images-library">
                <div className="image-div">
                  <img src="images/images library/12.png" alt="" />
                  <div className="image-overlay">
                    <i className="las la-search-plus"></i>
                  </div>
                </div>
              </a>
        </div>
    </div>
</div>
</div>



    
    </>
  )
}
