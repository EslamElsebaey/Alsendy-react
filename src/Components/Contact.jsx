import React from 'react'

function Contact() {
  return (
    <>
    {/* <!-- Bread crumb  --> */}

<section className="breadcrumb-sec breadcrumb-container">
    <div className="breadcrumb-content">
        <div className="container">
            <div className="breadcrumb-details">
                <h2 className="page-head ">اتصل بنا   </h2>
                <ol className="breadcrumb">
                  <li className="link-item">
                    <a className="bread-link" href="index.html">الرئيسيه</a>
                  </li>
                  <li className="active">
                    <span className="bread-current"> اتصل بنا </span>
                  </li>
                </ol>
            </div>
          </div>
    </div>
   
  </section>

  {/* <!-- end of Bread crumb  --> */}
    
  <div className="contact-sec">
    <div className="container">
        <div className="contact-parent">
            <div className="contact-item">
                <div className="icon-holder">
                    <i className="las la-envelope"></i>
                </div>
                <span>راسلنا على</span>
                <a href="mailto:care@sbkreston.com" className="ancor-btn contact-method">care@sbkreston.com</a>
            </div>
            <div className="contact-item">
              <div className="icon-holder">
                <i className="las la-map-marker"></i>
              </div>
              <span> مقرنا الرئيسي</span>
              <h4 className="contact-method span-contact-method">حي النهضة - شارع الخلق الحسن 23513 - جدة</h4>
            </div>
            <div className="contact-item">
              <div className="icon-holder">
                <i className="las la-phone"></i>
              </div>
              <span> اتصل بنا على </span>
              <a href="tel:+966126123322" className="ancor-btn contact-method">+966126123322</a>
          </div>
          <div className="contact-item">
            <div className="icon-holder">
              <i className="lab la-whatsapp"></i>
            </div>
            <span>   تحدث الينا مباشرة </span>
            <a href="tel:+966532600666" className="ancor-btn contact-method">+966532600666</a>
        </div>
        </div>
        <div className="contact-form">
          <h2 className="title">نسعد بتواصلكم معنا لنقوم بالرد على
            استفساراتكم واستشاراتكم بأسرع وقت</h2>
            <form className="myform"> 
              <div className="general-input required">
                  <label className="myLabel "  htmlFor="">الاسم بالكامل </label>
                  <input className="myInput" required type="text"/>
              </div>
              <div className="general-input required">
                <label className="myLabel "  htmlFor="">رقم  الجوال </label>
                <input className="myInput" required type="tel"/>
            </div>
              <div className="general-input ">
                <label className="myLabel "  htmlFor="">البريد الالكترونى  </label>
                <input className="myInput" required type="email"/>
              </div>
              <div className="general-input required">
                <label className="myLabel "  htmlFor="">نص الرسالة   </label>
                <textarea className="mytextarea" ></textarea>
              </div>
              <div className="general-input submit-general-input ">
                  <button className="submitBtn"  type="submit" >ارسال</button>
              </div>
        </form>
        </div>
    </div>
</div>

    </>
  )
}

export default Contact
