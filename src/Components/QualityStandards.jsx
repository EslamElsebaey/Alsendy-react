import React from 'react'

function QualityStandards() {
  return (
  <>
  {/* <!-- Bread crumb  --> */}

<section className="breadcrumb-sec breadcrumb-container">
    <div className="breadcrumb-content">
        <div className="container">
            <div className="breadcrumb-details">
                <h2 className="page-head ">معايير الرقابة النوعية   </h2>
                <ol className="breadcrumb">
                  <li className="link-item">
                    <a className="bread-link" href="index.html">الرئيسيه</a>
                  </li>
                  <li className="active">
                    <span className="bread-current"> معايير الرقابة النوعية </span>
                  </li>
                </ol>
            </div>
          </div>
    </div>
   
  </section>

  {/* <!-- end of Bread crumb  --> */}
  
  
<div className="quality-standards">
    <div className="container">
        <h2 className="title">يقوم المكتب بتطبيق الرقابة النوعية وعناصرها المتمثلة فى:</h2>
        <div className="quality-standards-parent">
            <div className="quality-standards-item">
                <div className="icon-holder">
                    <i className="las la-rocket"></i>
                </div>
                <h4>الاستقلال والإلتزام بقواعد سلوك وآداب المهنة</h4>
            </div>
            <div className="quality-standards-item">
                <div className="icon-holder">
                    <i className="las la-question"></i>
                </div>
                
                <h4>تخصيص المساعدين للعمليات</h4>
            </div>
            <div className="quality-standards-item">
                <div className="icon-holder">
                    <i className="las la-comments"></i>
                </div>
               
                <h4>المشورة</h4>
            </div>
            <div className="quality-standards-item">
                <div className="icon-holder">
                    <i className="las la-user-tie"></i>
                </div>
                
                <h4>الاشراف</h4>
            </div>
            <div className="quality-standards-item">
                <div className="icon-holder">
                    <i className="las la-user-plus"></i>
                </div>
               
                <h4>التوظيف</h4>
            </div>
            <div className="quality-standards-item">
                <div className="icon-holder">
                    <i className="las la-lightbulb"></i>
                </div>
               
                <h4>التطوير المهني والتدريب</h4>
            </div>
            <div className="quality-standards-item">
                <div className="icon-holder">
                    <i className="las la-tachometer-alt"></i>
                </div>
               
                <h4>تقييم اداء الموظفين وترقيتهم</h4>
            </div>
            <div className="quality-standards-item">
                <div className="icon-holder">
                    <i className="las la-handshake"></i>
                </div>
                 <h4>العمال واستمرارية العلاقه بهم</h4>
            </div>
        </div>
    </div>
</div>

  </>
  )
}

export default QualityStandards
