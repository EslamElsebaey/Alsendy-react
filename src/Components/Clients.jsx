import React, { useEffect } from 'react'
import mixitup from 'mixitup'

export default function Clients() {


       // Mixitup
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
                    <h2 className="page-head ">عملاؤنا </h2>
                    <ol className="breadcrumb">
                        <li className="link-item">
                            <a className="bread-link" href="index.html">الرئيسيه</a>
                        </li>
                        <li className="active">
                            <span className="bread-current"> عملاؤنا </span>
                        </li>
                    </ol>
                </div>
            </div>
        </div>

    </section>

    {/* <!-- end of Bread crumb  --> */}





    <div className="clients">
        <div className="container">
            <div className="clients-parent" id="mix-container">
                <div className="mix-btn-content">
                    <button className="mix-btn mixitup-control-active  ancor-btn" type="button" data-filter="all">
                        الكل
                    </button>
                    <button className="mix-btn ancor-btn" type="button" data-filter=".category-a">
                        شركات تجارية
                    </button>
                    <button className="mix-btn ancor-btn" type="button" data-filter=".category-b">
                        مقاولات
                    </button>
                    <button className="mix-btn ancor-btn" type="button" data-filter=".category-c">
                        مستشفيات وخدمات صحية
                    </button>
                    <button className="mix-btn ancor-btn" type="button" data-filter=".category-d">
                        مطاعم
                    </button>
                    <button className="mix-btn ancor-btn" type="button" data-filter=".category-e">
                        نقل
                    </button>
                    <button className="mix-btn ancor-btn" type="button" data-filter=".category-f">
                        صيانة
                    </button>
                    <button className="mix-btn ancor-btn" type="button" data-filter=".category-g">
                        استشارات
                    </button>
                    <button className="mix-btn ancor-btn" type="button" data-filter=".category-h">
                        خدمات
                    </button>
                    <button className="mix-btn ancor-btn" type="button" data-filter=".category-i">
                        خطوط جوية ووكالات سفر
                    </button>
                    <button className="mix-btn ancor-btn" type="button" data-filter=".category-j">
                        حاسب آلى
                    </button>
                    <button className="mix-btn ancor-btn" type="button" data-filter=".category-k">
                        الانشاءات
                    </button>
                    <button className="mix-btn ancor-btn" type="button" data-filter=".category-l">
                        تجارة القطاعي والجملة
                    </button>
                    <button className="mix-btn ancor-btn" type="button" data-filter=".category-m">
                        التصنيع
                    </button>
                    <button className="mix-btn ancor-btn" type="button" data-filter=".category-n">
                        الاستثمار
                    </button>
                    <button className="mix-btn ancor-btn" type="button" data-filter=".category-o">
                        عقارات
                    </button>
                    <button className="mix-btn ancor-btn" type="button" data-filter=".category-p">
                        اخرى
                    </button>

                </div>
                <div className="mix category-a" data-order="1">
                    <div className="clients-content">
                        <a className="client-item" data-fancybox="clients" href="images/clients/01.jpg">
                            <figure className="client-figure">
                                <img className="client-img" alt="" src="images/clients/01.jpg" className="img-fluid" />
                            </figure>
                        </a>
                        <a className="client-item" data-fancybox="clients" href="images/clients/01.jpg">
                            <figure className="client-figure">
                                <img className="client-img" alt="" src="images/clients/01.jpg" className="img-fluid" />
                            </figure>
                        </a>
                        <a className="client-item" data-fancybox="clients" href="images/clients/01.jpg">
                            <figure className="client-figure">
                                <img className="client-img" alt="" src="images/clients/01.jpg" className="img-fluid" />
                            </figure>
                        </a>
                        <a className="client-item" data-fancybox="clients" href="images/clients/01.jpg">
                            <figure className="client-figure">
                                <img className="client-img" alt="" src="images/clients/01.jpg" className="img-fluid" />
                            </figure>
                        </a>
                        <a className="client-item" data-fancybox="clients" href="images/clients/01.jpg">
                            <figure className="client-figure">
                                <img className="client-img" alt="" src="images/clients/01.jpg" className="img-fluid" />
                            </figure>
                        </a>
                        <a className="client-item" data-fancybox="clients" href="images/clients/01.jpg">
                            <figure className="client-figure">
                                <img className="client-img" alt="" src="images/clients/01.jpg" className="img-fluid" />
                            </figure>
                        </a>
                        <a className="client-item" data-fancybox="clients" href="images/clients/01.jpg">
                            <figure className="client-figure">
                                <img className="client-img" alt="" src="images/clients/01.jpg" className="img-fluid" />
                            </figure>
                        </a>
                        <a className="client-item" data-fancybox="clients" href="images/clients/01.jpg">
                            <figure className="client-figure">
                                <img className="client-img" alt="" src="images/clients/01.jpg" className="img-fluid" />
                            </figure>
                        </a>
                        <a className="client-item" data-fancybox="clients" href="images/clients/01.jpg">
                            <figure className="client-figure">
                                <img className="client-img" alt="" src="images/clients/01.jpg" className="img-fluid" />
                            </figure>
                        </a>
                        <a className="client-item" data-fancybox="clients" href="images/clients/01.jpg">
                            <figure className="client-figure">
                                <img className="client-img" alt="" src="images/clients/01.jpg" className="img-fluid" />
                            </figure>
                        </a>
                        <a className="client-item" data-fancybox="clients" href="images/clients/01.jpg">
                            <figure className="client-figure">
                                <img className="client-img" alt="" src="images/clients/01.jpg" className="img-fluid" />
                            </figure>
                        </a>
                        <a className="client-item" data-fancybox="clients" href="images/clients/01.jpg">
                            <figure className="client-figure">
                                <img className="client-img" alt="" src="images/clients/01.jpg" className="img-fluid" />
                            </figure>
                        </a>
                        <a className="client-item" data-fancybox="clients" href="images/clients/01.jpg">
                            <figure className="client-figure">
                                <img className="client-img" alt="" src="images/clients/01.jpg" className="img-fluid" />
                            </figure>
                        </a>
                        <a className="client-item" data-fancybox="clients" href="images/clients/01.jpg">
                            <figure className="client-figure">
                                <img className="client-img" alt="" src="images/clients/01.jpg" className="img-fluid" />
                            </figure>
                        </a>
                        <a className="client-item" data-fancybox="clients" href="images/clients/01.jpg">
                            <figure className="client-figure">
                                <img className="client-img" alt="" src="images/clients/01.jpg" className="img-fluid" />
                            </figure>
                        </a>
                        <a className="client-item" data-fancybox="clients" href="images/clients/01.jpg">
                            <figure className="client-figure">
                                <img className="client-img" alt="" src="images/clients/01.jpg" className="img-fluid" />
                            </figure>
                        </a>
                        <a className="client-item" data-fancybox="clients" href="images/clients/01.jpg">
                            <figure className="client-figure">
                                <img className="client-img" alt="" src="images/clients/01.jpg" className="img-fluid" />
                            </figure>
                        </a>
                        <a className="client-item" data-fancybox="clients" href="images/clients/01.jpg">
                            <figure className="client-figure">
                                <img className="client-img" alt="" src="images/clients/01.jpg" className="img-fluid" />
                            </figure>
                        </a>
                        <a className="client-item" data-fancybox="clients" href="images/clients/01.jpg">
                            <figure className="client-figure">
                                <img className="client-img" alt="" src="images/clients/01.jpg" className="img-fluid" />
                            </figure>
                        </a>
                        <a className="client-item" data-fancybox="clients" href="images/clients/01.jpg">
                            <figure className="client-figure">
                                <img className="client-img" alt="" src="images/clients/01.jpg" className="img-fluid" />
                            </figure>
                        </a>
                        <a className="client-item" data-fancybox="clients" href="images/clients/01.jpg">
                            <figure className="client-figure">
                                <img className="client-img" alt="" src="images/clients/01.jpg" className="img-fluid" />
                            </figure>
                        </a>
                        <a className="client-item" data-fancybox="clients" href="images/clients/01.jpg">
                            <figure className="client-figure">
                                <img className="client-img" alt="" src="images/clients/01.jpg" className="img-fluid" />
                            </figure>
                        </a>
                        <a className="client-item" data-fancybox="clients" href="images/clients/01.jpg">
                            <figure className="client-figure">
                                <img className="client-img" alt="" src="images/clients/01.jpg" className="img-fluid" />
                            </figure>
                        </a>
                        <a className="client-item" data-fancybox="clients" href="images/clients/01.jpg">
                            <figure className="client-figure">
                                <img className="client-img" alt="" src="images/clients/01.jpg" className="img-fluid" />
                            </figure>
                        </a>
                    </div>
                </div>
                <div className="mix category-b" data-order="2">
                    <div className="clients-content">
                        <a className="client-item" data-fancybox="clients" href="images/clients/01.jpg">
                            <figure className="client-figure">
                                <img className="client-img" alt="" src="images/clients/01.jpg" className="img-fluid" />
                            </figure>
                        </a>
                        <a className="client-item" data-fancybox="clients" href="images/clients/01.jpg">
                            <figure className="client-figure">
                                <img className="client-img" alt="" src="images/clients/01.jpg" className="img-fluid" />
                            </figure>
                        </a>
                        <a className="client-item" data-fancybox="clients" href="images/clients/01.jpg">
                            <figure className="client-figure">
                                <img className="client-img" alt="" src="images/clients/01.jpg" className="img-fluid" />
                            </figure>
                        </a>
                        <a className="client-item" data-fancybox="clients" href="images/clients/01.jpg">
                            <figure className="client-figure">
                                <img className="client-img" alt="" src="images/clients/01.jpg" className="img-fluid" />
                            </figure>
                        </a>
                        <a className="client-item" data-fancybox="clients" href="images/clients/01.jpg">
                            <figure className="client-figure">
                                <img className="client-img" alt="" src="images/clients/01.jpg" className="img-fluid" />
                            </figure>
                        </a>
                        <a className="client-item" data-fancybox="clients" href="images/clients/01.jpg">
                            <figure className="client-figure">
                                <img className="client-img" alt="" src="images/clients/01.jpg" className="img-fluid" />
                            </figure>
                        </a>
                        <a className="client-item" data-fancybox="clients" href="images/clients/01.jpg">
                            <figure className="client-figure">
                                <img className="client-img" alt="" src="images/clients/01.jpg" className="img-fluid" />
                            </figure>
                        </a>
                        <a className="client-item" data-fancybox="clients" href="images/clients/01.jpg">
                            <figure className="client-figure">
                                <img className="client-img" alt="" src="images/clients/01.jpg" className="img-fluid" />
                            </figure>
                        </a>
                        <a className="client-item" data-fancybox="clients" href="images/clients/01.jpg">
                            <figure className="client-figure">
                                <img className="client-img" alt="" src="images/clients/01.jpg" className="img-fluid" />
                            </figure>
                        </a>
                        <a className="client-item" data-fancybox="clients" href="images/clients/01.jpg">
                            <figure className="client-figure">
                                <img className="client-img" alt="" src="images/clients/01.jpg" className="img-fluid" />
                            </figure>
                        </a>
                        <a className="client-item" data-fancybox="clients" href="images/clients/01.jpg">
                            <figure className="client-figure">
                                <img className="client-img" alt="" src="images/clients/01.jpg" className="img-fluid" />
                            </figure>
                        </a>
                      
                     
                        <a className="client-item" data-fancybox="clients" href="images/clients/01.jpg">
                            <figure className="client-figure">
                                <img className="client-img" alt="" src="images/clients/01.jpg" className="img-fluid" />
                            </figure>
                        </a>
                        <a className="client-item" data-fancybox="clients" href="images/clients/01.jpg">
                            <figure className="client-figure">
                                <img className="client-img" alt="" src="images/clients/01.jpg" className="img-fluid" />
                            </figure>
                        </a>
                        <a className="client-item" data-fancybox="clients" href="images/clients/01.jpg">
                            <figure className="client-figure">
                                <img className="client-img" alt="" src="images/clients/01.jpg" className="img-fluid" />
                            </figure>
                        </a>
                        <a className="client-item" data-fancybox="clients" href="images/clients/01.jpg">
                            <figure className="client-figure">
                                <img className="client-img" alt="" src="images/clients/01.jpg" className="img-fluid" />
                            </figure>
                        </a>
                        <a className="client-item" data-fancybox="clients" href="images/clients/01.jpg">
                            <figure className="client-figure">
                                <img className="client-img" alt="" src="images/clients/01.jpg" className="img-fluid" />
                            </figure>
                        </a>
                    </div>
                </div>
                <div className="mix category-c category-c" data-order="3">
                    <div className="clients-content">
                        <a className="client-item" data-fancybox="clients" href="images/clients/01.jpg">
                            <figure className="client-figure">
                                <img className="client-img" alt="" src="images/clients/01.jpg" className="img-fluid" />
                            </figure>
                        </a>
                        <a className="client-item" data-fancybox="clients" href="images/clients/01.jpg">
                            <figure className="client-figure">
                                <img className="client-img" alt="" src="images/clients/01.jpg" className="img-fluid" />
                            </figure>
                        </a>
                        <a className="client-item" data-fancybox="clients" href="images/clients/01.jpg">
                            <figure className="client-figure">
                                <img className="client-img" alt="" src="images/clients/01.jpg" className="img-fluid" />
                            </figure>
                        </a>
                        <a className="client-item" data-fancybox="clients" href="images/clients/01.jpg">
                            <figure className="client-figure">
                                <img className="client-img" alt="" src="images/clients/01.jpg" className="img-fluid" />
                            </figure>
                        </a>
                        <a className="client-item" data-fancybox="clients" href="images/clients/01.jpg">
                            <figure className="client-figure">
                                <img className="client-img" alt="" src="images/clients/01.jpg" className="img-fluid" />
                            </figure>
                        </a>
                        <a className="client-item" data-fancybox="clients" href="images/clients/01.jpg">
                            <figure className="client-figure">
                                <img className="client-img" alt="" src="images/clients/01.jpg" className="img-fluid" />
                            </figure>
                        </a>
                        <a className="client-item" data-fancybox="clients" href="images/clients/01.jpg">
                            <figure className="client-figure">
                                <img className="client-img" alt="" src="images/clients/01.jpg" className="img-fluid" />
                            </figure>
                        </a>
                        <a className="client-item" data-fancybox="clients" href="images/clients/01.jpg">
                            <figure className="client-figure">
                                <img className="client-img" alt="" src="images/clients/01.jpg" className="img-fluid" />
                            </figure>
                        </a>
                        <a className="client-item" data-fancybox="clients" href="images/clients/01.jpg">
                            <figure className="client-figure">
                                <img className="client-img" alt="" src="images/clients/01.jpg" className="img-fluid" />
                            </figure>
                        </a>
                      
                     
                        <a className="client-item" data-fancybox="clients" href="images/clients/01.jpg">
                            <figure className="client-figure">
                                <img className="client-img" alt="" src="images/clients/01.jpg" className="img-fluid" />
                            </figure>
                        </a>
                        <a className="client-item" data-fancybox="clients" href="images/clients/01.jpg">
                            <figure className="client-figure">
                                <img className="client-img" alt="" src="images/clients/01.jpg" className="img-fluid" />
                            </figure>
                        </a>
                        <a className="client-item" data-fancybox="clients" href="images/clients/01.jpg">
                            <figure className="client-figure">
                                <img className="client-img" alt="" src="images/clients/01.jpg" className="img-fluid" />
                            </figure>
                        </a>
                        <a className="client-item" data-fancybox="clients" href="images/clients/01.jpg">
                            <figure className="client-figure">
                                <img className="client-img" alt="" src="images/clients/01.jpg" className="img-fluid" />
                            </figure>
                        </a>
                        <a className="client-item" data-fancybox="clients" href="images/clients/01.jpg">
                            <figure className="client-figure">
                                <img className="client-img" alt="" src="images/clients/01.jpg" className="img-fluid" />
                            </figure>
                        </a>
                    </div>
                </div>
                <div className="mix  category-d" data-order="4">
                    <div className="clients-content">
                        <a className="client-item" data-fancybox="clients" href="images/clients/01.jpg">
                            <figure className="client-figure">
                                <img className="client-img" alt="" src="images/clients/01.jpg" className="img-fluid" />
                            </figure>
                        </a>
                        <a className="client-item" data-fancybox="clients" href="images/clients/01.jpg">
                            <figure className="client-figure">
                                <img className="client-img" alt="" src="images/clients/01.jpg" className="img-fluid" />
                            </figure>
                        </a>
                        <a className="client-item" data-fancybox="clients" href="images/clients/01.jpg">
                            <figure className="client-figure">
                                <img className="client-img" alt="" src="images/clients/01.jpg" className="img-fluid" />
                            </figure>
                        </a>
                        <a className="client-item" data-fancybox="clients" href="images/clients/01.jpg">
                            <figure className="client-figure">
                                <img className="client-img" alt="" src="images/clients/01.jpg" className="img-fluid" />
                            </figure>
                        </a>
                        <a className="client-item" data-fancybox="clients" href="images/clients/01.jpg">
                            <figure className="client-figure">
                                <img className="client-img" alt="" src="images/clients/01.jpg" className="img-fluid" />
                            </figure>
                        </a>
                        <a className="client-item" data-fancybox="clients" href="images/clients/01.jpg">
                            <figure className="client-figure">
                                <img className="client-img" alt="" src="images/clients/01.jpg" className="img-fluid" />
                            </figure>
                        </a>
                        <a className="client-item" data-fancybox="clients" href="images/clients/01.jpg">
                            <figure className="client-figure">
                                <img className="client-img" alt="" src="images/clients/01.jpg" className="img-fluid" />
                            </figure>
                        </a>
                        <a className="client-item" data-fancybox="clients" href="images/clients/01.jpg">
                            <figure className="client-figure">
                                <img className="client-img" alt="" src="images/clients/01.jpg" className="img-fluid" />
                            </figure>
                        </a>
                        <a className="client-item" data-fancybox="clients" href="images/clients/01.jpg">
                            <figure className="client-figure">
                                <img className="client-img" alt="" src="images/clients/01.jpg" className="img-fluid" />
                            </figure>
                        </a>
                        <a className="client-item" data-fancybox="clients" href="images/clients/01.jpg">
                            <figure className="client-figure">
                                <img className="client-img" alt="" src="images/clients/01.jpg" className="img-fluid" />
                            </figure>
                        </a>
                        <a className="client-item" data-fancybox="clients" href="images/clients/01.jpg">
                            <figure className="client-figure">
                                <img className="client-img" alt="" src="images/clients/01.jpg" className="img-fluid" />
                            </figure>
                        </a>
                    </div>
                </div>
            </div>

        </div>
    </div>




    </>
  )
}
