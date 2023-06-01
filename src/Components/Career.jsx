import React, { useEffect } from 'react'
import $ from "jquery"

function Career() {


    useEffect(()=>{
        // trigger file button 
        $(".add-file").click(function(e){
            e.preventDefault() ;
        $(this).siblings("input[type='file'").click()
        })
    } , [])
  return (
   <>
   {/* <!-- Bread crumb  --> */}

<section className="breadcrumb-sec breadcrumb-container">
    <div className="breadcrumb-content">
        <div className="container">
            <div className="breadcrumb-details">
                <h2 className="page-head "> التوظيف   </h2>
                <ol className="breadcrumb">
                  <li className="link-item">
                    <a className="bread-link" href="index.html">الرئيسيه</a>
                  </li>
                  <li className="active">
                    <span className="bread-current"> التوظيف  </span>
                  </li>
                </ol>
            </div>
          </div>
    </div>
   
  </section>

  {/* <!-- end of Bread crumb  --> */}
   
   
<div className="career">
    <div className="container">
       
        <div className="contact-form">
          <h2 className="title">ترى نفسك مؤهل ؟ انضم إلينا الآن</h2>
            <form className="myform"> 
              <div className="general-input required">
                  <label className="myLabel "  htmlFor="">الاسم بالكامل </label>
                  <input className="myInput"  type="text" />
              </div>
              <div className="general-input required">
                <label className="myLabel "  htmlFor="">رقم  الجوال </label>
                <input className="myInput"  type="tel" />
            </div>
              <div className="general-input ">
                <label className="myLabel "  htmlFor="">البريد الالكترونى  </label>
                <input className="myInput"  type="email" />
              </div>
              <div className="general-input   required">
                <label className="myLabel "  htmlFor="">السيرة الذاتية </label>
                <div className="myinput-holder">   
                    <input className="myInput"  type="file"  name="" id="" />
                    <span className="add-file">اضافة ملف </span>
                </div>
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

export default Career
