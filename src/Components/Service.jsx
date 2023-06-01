import React from 'react'

function Service() {
  return (
   <>
   
   {/* <!-- Bread crumb  --> */}

    <section className="breadcrumb-sec breadcrumb-container">
        <div className="breadcrumb-content">
            <div className="container">
                <div className="breadcrumb-details">
                    <h2 className="page-head ">الاستشارات الزكوية والضريبية   </h2>
                    <ol className="breadcrumb">
                      <li className="link-item">
                        <a className="bread-link" href="index.html">الرئيسيه</a>
                      </li>
                      <li className="active">
                        <span className="bread-current"> الاستشارات الزكوية والضريبية </span>
                      </li>
                    </ol>
                </div>
              </div>
        </div>
       
      </section>

      {/* <!-- end of Bread crumb  --> */}

      <div className="service">
  <div className="container">
    <div className="icon-holder">
      <img src="images/service/service-icon.png" alt="" />
    </div>
    <p className="service-para">وأهم الخدمات المهنية بهذا القسم تتمثل في الآتي:</p>
    <div className="service-parent">
      <div className="service-item order-1">
        <div className="service-item-holder">
          <h3>تسجيل العملاء</h3>
          <p>القيام بتسجيل العملاء لدى الهيئة العامة للزكاة والدخل</p>
        </div>
      </div>
      <div className="service-item order-3">
        <div className="service-item-holder">
          <h3>تسجيل العملاء </h3>
          <p>القيام بإعداد الإقرارات الزكوية وضريبة الدخل وضريبة الاستقطاع وضريبة القيمة المضافة لعملائنا بما يتوافق مع الأنظمة ورفعها في برنامج قوائم</p>
        </div>
      </div>
      <div className="service-item order-5">
        <div className="service-item-holder">
          <h3>الرد على استفسارات     </h3>
        <p>مساعدة عملائنا في الرد على استفسارات الهيئة العامة للزكاة والدخل</p>
        </div>
      </div>
      <div className="service-item order-7">
        <div className="service-item-holder">
          <h3>تمثيل العملاء       </h3>
          <p>تمثيل العملاء في إجراءات الاعتراض والاستئناف على الربوط الزكوية والضريبية المقدمة من الهيئة العامة للزكاة والدخل</p>
        </div>
      </div>
      <div className="service-item order-2">
        <div className="service-item-holder">
          <h3>تهيئة الانظمة المالية </h3>
          <p>القيام بتهيئة الانظمة المالية للعملاء وموافقتها للأنظمة الزكوية والضريبية الصادرة من الهيئة العامة للزكاة والدخل </p>
        </div>
      </div>
     
      <div className="service-item order-4">
        <div className="service-item-holder">
          <h3>الشهادات الزكوية والضريبة  </h3>
         <p>مساعدة عملائنا بإصدار الشهادات الزكوية والضريبة     </p>
        </div>
      </div>
   
      <div className="service-item order-6">
        <div className="service-item-holder">
          <h3>مراجعة الربوط الزكوية والضريبية       </h3>
      <p>مراجعة الربوط الزكوية والضريبية للعملاء الصادرة من الهيئة العامة للزكاة والدخل اعداد واعداد الاعتراضات عنها      </p>
        </div>
      </div>
      
      <div className="service-item order-8">
        <div className="service-item-holder">
          <h3> تدريب وتنمية        </h3>
         <p>تدريب وتنمية الوعي والمعرفة في مجال الانظمة الزكوية والضريبية لعملائنا وتزويدهم بما يستجد من نظم متعلقة بالنظام الزكوي والأنظمة الضريبية ودراسة تأثير ذلك عليهم</p>
        </div>
      </div>
    </div>
  </div>
</div>



<div className="request-sec bg-blue">
  <div className="container">
    <div className="service-request-sec ">
      <div className="servic-request-cont">
        <h2>شركة عبد القادر سندي ومازن بترجي للاستشارات القانونية والمالية وعضو كرستون انترناشيونال</h2>
      <button  className="ancor-btn service-request-btn " data-toggle="modal" data-target="#exampleModal">اطلب خدمتك الآن</button>
      </div>
    </div>
  </div>
</div>
     
   </>
  )
}

export default Service
