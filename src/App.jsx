
function App() {

  return (
    <>
      <div className="page-wrapper home-1" data-background="assets/img/bg/page-bg-1.jpg">

        {/* <div id="preloader">
          <div className="loader_line"></div>
        </div> */}

        <div className="bostami-header-area mb-30 z-index-5">
          <div className="container">
            <div className="bostami-header-wrap">
              <div className="row align-items-center">

                <div className="col-6">
                  <div className="bostami-header-logo">
                    <a className="site-logo" href="../index.html">
                      <img src="assets/img/logo/logo-2.png" alt=""/>
                    </a>
                  </div>
                </div>

                <div className="col-6">
                  <div className="bostami-header-menu-btn text-right">
                    <div className="dark-btn dark-btn-stored dark-btn-icon">
                      <i className="fa-light fa-moon"></i>
                      <i className="fa-light fa-sun"></i>
                    </div>
                    <div className="menu-btn toggle_menu">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            <div className="mobile-menu-wrap">
              <div className="mobile-menu mobile_menu">
              </div>
            </div>

          </div>
        </div>

        <div className="container z-index-3">
          <div className="row">

            <div className="col-xxl-3 col-xl-3">
              <div className="bostami-parsonal-info-area">
                <div className="bostami-parsonal-info-wrap">

                  <div className="bostami-parsonal-info-img">
                    <img src="assets/img/parsonal-info/parson-img-1.png" alt="avatar"/>
                  </div>

                  <h4 className="bostami-parsonal-info-name">
                    <a href="#">Bostami Hassan</a>
                  </h4>
                  <span className="bostami-parsonal-info-bio mb-15">Ui/Ux Designer</span>

                  <ul className="bostami-parsonal-info-social-link mb-30">
                    <li>
                      <a href="#" className="facebook">
                        <i className="fa-brands fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="twitter">
                        <i className="fa-brands fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="instagram">
                        <i className="fa-brands fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="linkedin">
                        <i className="fa-brands fa-linkedin-in"></i>
                      </a>
                    </li>
                  </ul>

                  <div className="bostami-parsonal-info-contact mb-30">
                    <div className="bostami-parsonal-info-contact-item phone">
                      <div className="icon">
                        <i className="fa-solid fa-mobile-screen-button"></i>
                      </div>
                      <div className="text">
                        <span>Phone</span>
                        <p>+123 456 7890</p>
                      </div>
                    </div>


                    <div className="bostami-parsonal-info-contact-item email">
                      <div className="icon">
                        <i className="fa-regular fa-envelope-open-text"></i>
                      </div>
                      <div className="text">
                        <span>Email</span>
                        <p>example@mail.com</p>
                      </div>
                    </div>

                    <div className="bostami-parsonal-info-contact-item location">
                      <div className="icon">
                        <i className="fa-solid fa-location-dot"></i>
                      </div>
                      <div className="text">
                        <span>Location</span>
                        <p>Hong kong china</p>
                      </div>
                    </div>

                    <div className="bostami-parsonal-info-contact-item calendar">
                      <div className="icon">
                        <i className="fa-light fa-calendar-days"></i>
                      </div>
                      <div className="text">
                        <span>Birthday</span>
                        <p>May 27, 1990</p>
                      </div>
                    </div>
                  </div>

                  <div className="bostami-parsonal-info-btn">
                    <a className="btn-1" href="#">
                      <span className="icon">
                        <i className="fa-regular fa-download"></i>
                      </span>
                      download cv
                    </a>
                  </div>

                </div>
              </div>
            </div>

            <div className="col-xxl-8 col-xl-9">
              <div className="bostami-page-content-wrap">

                <div className="section-wrapper pl-60 pr-60 pt-60">
                  <div className="bostami-page-title-wrap mb-35">
                    <h2 className="page-title">about</h2>
                    <p>I'm Creative Director and UI/UX Designer from Sydney, Australia, working in web
                      development and print media. I enjoy turning complex problems into simple, beautiful
                      and intuitive designs.</p>
                    <p>My aim is to bring across your message and identity in the most creative way. I
                      created web design for many famous brand companies.</p>
                  </div>
                </div>

                <div className="section-wrapper pl-60 pr-60">

                  <div className="bostami-section-title-wrap mb-30">
                    <h3 className="section-title">What I do!</h3>
                  </div>

                  <div className="bostami-what-do-wrap mb-30">
                    <div className="row">

                      <div className="col-xxl-6 col-xl-6 col-lg-6">
                        <div className="bostami-what-do-item bg-prink">
                          <div className="icon">
                            <i className="fa-light fa-swatchbook"></i>
                          </div>
                          <div className="text">
                            <h4 className="title">Ui/Ux Design</h4>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                              euismod tincidunt volutpat.</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-xxl-6 col-xl-6 col-lg-6">
                        <div className="bostami-what-do-item bg-catkrill">
                          <div className="icon">
                            <i className="fa-regular fa-grid-2"></i>
                          </div>
                          <div className="text">
                            <h4 className="title">App Development</h4>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                              euismod tincidunt volutpat.</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-xxl-6 col-xl-6 col-lg-6">
                        <div className="bostami-what-do-item  bg-catkrill">
                          <div className="icon">
                            <i className="fa-regular fa-camera-retro"></i>
                          </div>
                          <div className="text">
                            <h4 className="title">Photography</h4>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                              euismod tincidunt volutpat.</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-xxl-6 col-xl-6 col-lg-6">
                        <div className="bostami-what-do-item bg-prink bg-blue">
                          <div className="icon">
                            <i className="fa-regular fa-code"></i>
                          </div>
                          <div className="text">
                            <h4 className="title">Web Development</h4>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                              euismod tincidunt volutpat.</p>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>

                </div>

                <div className="section-wrapper bg-light-white-2 pt-45 pb-60 pl-60 pr-60">

                  <div className="bostami-section-title-wrap text-center mb-50">
                    <h3 className="section-title">clinet</h3>
                  </div>

                  <div className="bostami-client-slider">
                    <div className="swiper-container client_slide_active">
                      <div className="swiper-wrapper">

                        <div className="swiper-slide">
                          <img className="bostami-client-slider-logo"
                            src="assets/img/client/client-logo-1.png" alt="" />
                        </div>

                        <div className="swiper-slide">
                          <img className="bostami-client-slider-logo"
                            src="assets/img/client/client-logo-2.png" alt="" />
                        </div>

                        <div className="swiper-slide">
                          <img className="bostami-client-slider-logo"
                            src="assets/img/client/client-logo-3.png" alt="" />
                        </div>

                        <div className="swiper-slide">
                          <img className="bostami-client-slider-logo"
                            src="assets/img/client/client-logo-4.png" alt="" />
                        </div>

                      </div>
                    </div>
                  </div>

                </div>

                <div className="footer-copyright text-center pt-25 pb-25">
                  <span>© 2024 All Rights Reserved by <a href="https://themeforest.net/user/elite-themes24"
                    target="_blank" rel="noopener noreferrer">elite-themes24</a>.</span>
                </div>

              </div>
            </div>

            <div className="col-xxl-1 d-xxl-block d-none">
              <div className="bostami-main-menu-wrap">
                <nav className="bastami-main-menu main_menu">
                  <ul>
                    <li className="active">
                      <a href="index.html">
                        <span>
                          <i className="fa-light fa-address-card"></i>
                        </span>
                        about
                      </a>
                    </li>
                    <li>
                      <a href="resume.html">
                        <span>
                          <i className="fa-light fa-file-user"></i>
                        </span>
                        Resume
                      </a>
                    </li>
                    <li>
                      <a href="portfolio.html">
                        <span>
                          <i className="fa-light fa-briefcase"></i>
                        </span>
                        Works
                      </a>
                    </li>
                    <li>
                      <a href="blog.html">
                        <span>
                          <i className="fa-light fa-newspaper"></i>
                        </span>
                        Blogs
                      </a>
                    </li>
                    <li>
                      <a href="contact.html">
                        <span>
                          <i className="fa-light fa-address-book"></i>
                        </span>
                        contact
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default App
