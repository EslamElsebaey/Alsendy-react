import React from 'react'

export default function Videos() {
  return (
   <>
   
   {/* <!-- Bread crumb  --> */}

    <section className="breadcrumb-sec breadcrumb-container">
        <div className="breadcrumb-content">
            <div className="container">
                <div className="breadcrumb-details">
                    <h2 className="page-head ">مكتبة الفيديو   </h2>
                    <ol className="breadcrumb">
                      <li className="link-item">
                        <a className="bread-link" href="index.html">الرئيسيه</a>
                      </li>
                      <li className="active">
                        <span className="bread-current"> مكتبة الفيديو </span>
                      </li>
                    </ol>
                </div>
              </div>
        </div>
       
      </section>

      {/* <!-- end of Bread crumb  --> */}




<div className="videos">
    <div className="container">
        <div className="videos-parent">
            <div className="video-item">
                <a className="position-relative" target="_blank"  href="https://www.youtube.com/watch?v=8E9GUDzGZ1Q&ab_channel=%D8%B3%D9%86%D8%AF%D9%8A%D8%A8%D8%AA%D8%B1%D8%AC%D9%8A">
                    <div >
                      <img className="video-img" src="images/videos library/01.png" alt="" />
                      <div className="video-overlay"></div>
                    </div>  
                    <img className="player-icon" src="images/videos library/youtube-icon.png" alt="" />
                  </a>
            </div>
            <div className="video-item">
                <a className="position-relative" target="_blank"  href="https://www.youtube.com/watch?v=8E9GUDzGZ1Q&ab_channel=%D8%B3%D9%86%D8%AF%D9%8A%D8%A8%D8%AA%D8%B1%D8%AC%D9%8A">
                    <div >
                      <img className="video-img" src="images/videos library/02.png" alt="" />
                      <div className="video-overlay"></div>
                    </div>  
                    <img className="player-icon" src="images/videos library/youtube-icon.png" alt="" />
                  </a>
            </div>
            <div className="video-item">
                <a className="position-relative" target="_blank"  href="https://www.youtube.com/watch?v=8E9GUDzGZ1Q&ab_channel=%D8%B3%D9%86%D8%AF%D9%8A%D8%A8%D8%AA%D8%B1%D8%AC%D9%8A">
                    <div >
                      <img className="video-img" src="images/videos library/03.png" alt="" />
                      <div className="video-overlay"></div>
                    </div>  
                    <img className="player-icon" src="images/videos library/youtube-icon.png" alt="" />
                  </a>
            </div>
        </div>
    </div>
</div>

   
   </>
  )
}
