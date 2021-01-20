import HeroBanner from "../containers/LandingPage/HeroBanner";
import ContactUs from "../containers/LandingPage/ContactUs";
import ClientsCarousel from "../containers/LandingPage/ClientsCarousel";
import Plans from "../containers/LandingPage/Plans";
import Titles from "../components/Titles/Titles";
import Fade from "react-reveal/Fade";

const Home = () => {
  return (
    <>
      <HeroBanner></HeroBanner>
      <body>
        <section id="services" className="section-padding">
          <div className="container">
            <div className="section-header text-center">
              <Fade big>
                <Titles>Our Services</Titles>
              </Fade>
            </div>
            <div className="row">
              <div className="col-md-6 col-lg-4 col-xs-12">
                <Fade big delay={400}>
                  <div className="services-item">
                    <div className="icon">
                      <i className="lni-cog"></i>
                    </div>
                    <div className="services-content">
                      <h3 className="header">
                        <a href="#">Easy To Used</a>
                      </h3>
                      <p>
                        Ut maximus enim dolor. Aenean auctor risus eget
                        tincidunt lobortis. Donec tincidunt bibendum gravida.
                      </p>
                    </div>
                  </div>
                </Fade>
              </div>

              <div className="col-md-6 col-lg-4 col-xs-12">
                <Fade big delay={500}>
                  <div className="services-item">
                    <div className="icon">
                      <i className="lni-stats-up"></i>
                    </div>
                    <div className="services-content">
                      <h3 className="header">
                        <a href="#">Awesome Design</a>
                      </h3>
                      <p>
                        Ut maximus enim dolor. Aenean auctor risus eget
                        tincidunt lobortis. Donec tincidunt bibendum gravida.
                      </p>
                    </div>
                  </div>
                </Fade>
              </div>

              <div className="col-md-6 col-lg-4 col-xs-12">
                <Fade big delay={600}>
                  <div className="services-item">
                    <div className="icon">
                      <i className="lni-users"></i>
                    </div>
                    <div className="services-content">
                      <h3 className="header">
                        <a href="#">Easy To Customize</a>
                      </h3>
                      <p>
                        Ut maximus enim dolor. Aenean auctor risus eget
                        tincidunt lobortis. Donec tincidunt bibendum gravida.{" "}
                      </p>
                    </div>
                  </div>
                </Fade>
              </div>
            </div>
          </div>
        </section>

        <div className="about-area section-padding bg-gray">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-12 col-xs-12 info">
                <div className="about-wrapper wow fadeInLeft">
                  <div>
                    <div className="site-heading">
                      <p className="mb-3">Manage Statistics</p>
                      <h2 className="header section-title">
                        Detailed Statistics of your Company
                      </h2>
                    </div>
                    <div className="content">
                      <p>
                        Praesent imperdiet, tellus et euismod euismod, risus
                        lorem euismod erat, at finibus neque odio quis metus.
                        Donec vulputate arcu quam. Morbi quis tincidunt ligula.
                        Sed rutrum tincidunt pretium. Mauris auctor, purus a
                        pulvinar fermentum, odio dui vehicula lorem, nec
                        pharetra justo risus quis mi. Ut ac ex sagittis, viverra
                        nisl vel, rhoncus odio.
                      </p>
                      <a href="#" className="btn btn-landing btn-common mt-3">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-6 col-md-12 col-xs-12 wow fadeInRight"
                data-wow-delay="0.3s"
              >
                <img
                  className="img-fluid"
                  src="/images/landingPage/PeopleWww.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>

        <section id="features" className="section-padding">
          <div className="container">
            <div className="section-header text-center">
              <Titles>Awesome features</Titles>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12">
                <div className="content-left">
                  <div
                    className="box-item wow fadeInLeft"
                    data-wow-delay="0.3s"
                  >
                    <span className="icon">
                      <i className="lni-rocket"></i>
                    </span>
                    <div className="text">
                      <h4 className="header">Bootstrap 4 Based</h4>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </p>
                    </div>
                  </div>
                  <div
                    className="box-item wow fadeInLeft"
                    data-wow-delay="0.6s"
                  >
                    <span className="icon">
                      <i className="lni-laptop-phone"></i>
                    </span>
                    <div className="text">
                      <h4 className="header">Fully Responsive</h4>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </p>
                    </div>
                  </div>
                  <div
                    className="box-item wow fadeInLeft"
                    data-wow-delay="0.9s"
                  >
                    <span className="icon">
                      <i className="lni-cog"></i>
                    </span>
                    <div className="text">
                      <h4 className="header">HTML5, CSS3 & SASS</h4>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12">
                <div className="show-box wow fadeInUp" data-wow-delay="0.3s">
                  <img src="/images/icons/Logo-blueweb.png" alt="" />
                </div>
              </div>
              <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12">
                <div className="content-right">
                  <div
                    className="box-item wow fadeInRight"
                    data-wow-delay="0.3s"
                  >
                    <span className="icon">
                      <i className="lni-leaf"></i>
                    </span>
                    <div className="text">
                      <h4 className="header">Modern Design</h4>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry
                      </p>
                    </div>
                  </div>
                  <div
                    className="box-item wow fadeInRight"
                    data-wow-delay="0.6s"
                  >
                    <span className="icon">
                      <i className="lni-layers"></i>
                    </span>
                    <div className="text">
                      <h4 className="header">Multi-purpose Template</h4>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </p>
                    </div>
                  </div>
                  <div
                    className="box-item wow fadeInRight"
                    data-wow-delay="0.9s"
                  >
                    <span className="icon">
                      <i className="lni-leaf"></i>
                    </span>
                    <div className="text">
                      <h4 className="header">Working Contact Form</h4>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <ClientsCarousel></ClientsCarousel>

        {/*   <section id="cta" className="section-padding">
          <div className="container">
            <div className="row">
              <div
                className="col-lg-6 col-md-6 col-xs-12 wow fadeInLeft"
                data-wow-delay="0.3s"
              >
                <div className="cta-text">
                  <h4>You're Using Free Lite Version</h4>
                  <h5>
                    Please purchase full version of the template to get all
                    features and facilities
                  </h5>
                </div>
              </div>
              <div
                className="col-lg-6 col-md-6 col-xs-12 text-right wow fadeInRight"
                data-wow-delay="0.3s"
              >
                <a
                  rel="nofollow"
                  href="https://rebrand.ly/fusion-gg"
                  className="btn btn-common btn-landing"
                >
                  Purchase Now
                </a>
              </div>
            </div>
          </div>
        </section> */}
        <Plans></Plans>
        {/* <section id="testimonial" className="testimonial section-padding">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div
                  id="testimonials"
                  className="owl-carousel wow fadeInUp"
                  data-wow-delay="1.2s"
                >
                  <div className="item">
                    <div className="testimonial-item">
                      <div className="img-thumb">
                        <img src="/img/testimonial/img1.jpg" alt="" />
                      </div>
                      <div className="info">
                        <h2>
                          <a href="#">David Smith</a>
                        </h2>
                        <h3>
                          <a href="#">Creative Head</a>
                        </h3>
                      </div>
                      <div className="content">
                        <p className="description">
                          Praesent cursus nulla non arcu tempor, ut egestas elit
                          tempus. In ac ex fermentum, gravida felis nec,
                          tincidunt ligula.
                        </p>
                        <div className="star-icon mt-3">
                          <span>
                            <i className="lni-star-filled"></i>
                          </span>
                          <span>
                            <i className="lni-star-filled"></i>
                          </span>
                          <span>
                            <i className="lni-star-filled"></i>
                          </span>
                          <span>
                            <i className="lni-star-filled"></i>
                          </span>
                          <span>
                            <i className="lni-star-half"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="testimonial-item">
                      <div className="img-thumb">
                        <img src="/img/testimonial/img2.jpg" alt="" />
                      </div>
                      <div className="info">
                        <h2>
                          <a href="#">Domeni GEsson</a>
                        </h2>
                        <h3>
                          <a href="#">Awesome Technology co.</a>
                        </h3>
                      </div>
                      <div className="content">
                        <p className="description">
                          Praesent cursus nulla non arcu tempor, ut egestas elit
                          tempus. In ac ex fermentum, gravida felis nec,
                          tincidunt ligula.
                        </p>
                        <div className="star-icon mt-3">
                          <span>
                            <i className="lni-star-filled"></i>
                          </span>
                          <span>
                            <i className="lni-star-filled"></i>
                          </span>
                          <span>
                            <i className="lni-star-filled"></i>
                          </span>
                          <span>
                            <i className="lni-star-half"></i>
                          </span>
                          <span>
                            <i className="lni-star-half"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="testimonial-item">
                      <div className="img-thumb">
                        <img src="/img/testimonial/img3.jpg" alt="" />
                      </div>
                      <div className="info">
                        <h2>
                          <a href="#">Dommini Albert</a>
                        </h2>
                        <h3>
                          <a href="#">Nesnal Design co.</a>
                        </h3>
                      </div>
                      <div className="content">
                        <p className="description">
                          Praesent cursus nulla non arcu tempor, ut egestas elit
                          tempus. In ac ex fermentum, gravida felis nec,
                          tincidunt ligula.
                        </p>
                        <div className="star-icon mt-3">
                          <span>
                            <i className="lni-star-filled"></i>
                          </span>
                          <span>
                            <i className="lni-star-filled"></i>
                          </span>
                          <span>
                            <i className="lni-star-filled"></i>
                          </span>
                          <span>
                            <i className="lni-star-filled"></i>
                          </span>
                          <span>
                            <i className="lni-star-half"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="testimonial-item">
                      <div className="img-thumb">
                        <img src="/img/testimonial/img4.jpg" alt="" />
                      </div>
                      <div className="info">
                        <h2>
                          <a href="#">Fernanda Anaya</a>
                        </h2>
                        <h3>
                          <a href="#">Developer</a>
                        </h3>
                      </div>
                      <div className="content">
                        <p className="description">
                          Praesent cursus nulla non arcu tempor, ut egestas elit
                          tempus. In ac ex fermentum, gravida felis nec,
                          tincidunt ligula.
                        </p>
                        <div className="star-icon mt-3">
                          <span>
                            <i className="lni-star-filled"></i>
                          </span>
                          <span>
                            <i className="lni-star-filled"></i>
                          </span>
                          <span>
                            <i className="lni-star-half"></i>
                          </span>
                          <span>
                            <i className="lni-star-half"></i>
                          </span>
                          <span>
                            <i className="lni-star-half"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        {/*   <section id="cta" className="section-padding">
          <div className="container">
            <div className="row">
              <div
                className="col-lg-6 col-md-6 col-xs-12 wow fadeInLeft"
                data-wow-delay="0.3s"
              >
                <div className="cta-text">
                  <h4>Get 30 days free trial</h4>
                  <p>
                    Praesent imperdiet, tellus et euismod euismod, risus lorem
                    euismod erat, at finibus neque odio quis metus. Donec
                    vulputate arcu quam.{" "}
                  </p>
                </div>
              </div>
              <div
                className="col-lg-6 col-md-6 col-xs-12 text-right wow fadeInRight"
                data-wow-delay="0.3s"
              >
                <a href="#" className="btn btn-common">
                  Register Now
                </a>
              </div>
            </div>
          </div>
        </section> */}
        {/* 
        <section id="contact" className="section-padding bg-gray">
          <div className="container">
            <div className="section-header text-center">
              <h2 className="section-title wow fadeInDown" data-wow-delay="0.3s">
                Countact Us
              </h2>
              <div className="shape wow fadeInDown" data-wow-delay="0.3s"></div>
            </div>
            <div
              className="row contact-form-area wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="col-lg-7 col-md-12 col-sm-12">
                <section id="cta" className="section-padding">
                  <div className="container">
                    <div className="row">
                      <div
                        className="col-lg-6 col-md-6 col-xs-12 wow fadeInLeft"
                        data-wow-delay="0.3s"
                      >
                        <div className="cta-text">
                          <h4>You're Using Free Lite Version</h4>
                          <h5>
                            Please purchase full version of the template to get
                            all features and facilities
                          </h5>
                        </div>
                      </div>
                      <div
                        className="col-lg-6 col-md-6 col-xs-12 text-right wow fadeInRight"
                        data-wow-delay="0.3s"
                      >
                        <a
                          rel="nofollow"
                          href="https://rebrand.ly/fusion-gg"
                          className="btn btn-common"
                        >
                          Purchase Now
                        </a>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
              <div className="col-lg-5 col-md-12 col-xs-12">
                <div className="map">
                  <object
                    style={{ border: 0, height: "280px", width: "100%" }}
                    data="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d34015.943594576835!2d-106.43242624069771!3d31.677719472407432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86e75d90e99d597b%3A0x6cd3eb9a9fcd23f1!2sCourtyard+by+Marriott+Ciudad+Juarez!5e0!3m2!1sen!2sbd!4v1533791187584"
                  ></object>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        <ContactUs></ContactUs>

        <a href="#" className="back-to-top">
          <i className="lni-arrow-up"></i>
        </a>
      </body>
    </>
  );
};

export default Home;
