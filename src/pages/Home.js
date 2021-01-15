import HeroBanner from "../containers/LandingPage/HeroBanner";
import styled from "styled-components";
import SupportBanner from "../containers/LandingPage/SupportBanner";
import Ventajas from "../containers/LandingPage/Ventajas";
import ThreeComponents from "../containers/LandingPage/ThreeComponents";
import ContactUs from "../containers/LandingPage/ContactUs";
import ClientsCarousel from "../containers/LandingPage/ClientsCarousel";
import Plans from "../containers/LandingPage/Plans";
import Titles from "../components/Titles/Titles";

const StyledBackgroundColorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  align-content: center;
  justify-content: center;
  text-align: center;
  padding: 20px;
  position: relative;

  .custom-shape-divider-top-1604333882 {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
  }

  .custom-shape-divider-top-1604333882 svg {
    position: relative;
    display: block;
    width: calc(300% + 1.3px);
    height: 147px;
  }

  .custom-shape-divider-top-1604333882 .shape-fill {
    fill: #276ef1;
  }
  a {
    text-decoration: none;
    color: black;
  }
  background-color: ${({ backgroundColor, theme }) =>
    backgroundColor ? backgroundColor : theme.colors.blue};
  h1,
  h2 {
    color: black;
  }
  h1 {
    font-size: 30px;
    font-weight: 600;
    margin-top: 150px;
  }
  h2 {
    font-size: 15px;
    font-weight: 300;
    margin-bottom: 20px;
  }
  .cuadrado {
    & {
      vertical-align: middle;
      -webkit-transform: perspective(1px) translateZ(0);
      transform: perspective(1px) translateZ(0);
      box-shadow: 0 0 1px rgba(0, 0, 0, 0);
      -webkit-transition-duration: 0.3s;
      transition-duration: 0.3s;
      -webkit-transition-property: box-shadow, transform;
      transition-property: box-shadow, transform;
    }
    &:hover,
    &:focus,
    &:active {
      box-shadow: 0 10px 10px -10px rgba(0, 0, 0, 0.5);
      -webkit-transform: scale(1.1);
      transform: scale(1.1);
      cursor: pointer;
      background-color: #454655;
    }

    background-color: #004bc6;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px;
    border-radius: 10px;
    margin: 10px;
    color: white;
    i {
      color: white;
      font-size: 50px;
    }
    h4 {
      text-align: center;
      margin-top: 10px;
    }
    h5 {
      text-align: center;
      font-size: 14px;
    }
  }
`;

const Home = () => {
  return (
    <>
      <HeroBanner></HeroBanner>
      <body>
        <section id="services" className="section-padding">
          <div className="container">
            <div className="section-header text-center">
              <Titles>Our Services</Titles>
            </div>
            <div className="row">
              <div className="col-md-6 col-lg-4 col-xs-12">
                <div
                  className="services-item wow fadeInRight"
                  data-wow-delay="0.3s"
                >
                  <div className="icon">
                    <i className="lni-cog"></i>
                  </div>
                  <div className="services-content">
                    <h3>
                      <a href="#">Easy To Used</a>
                    </h3>
                    <p>
                      Ut maximus enim dolor. Aenean auctor risus eget tincidunt
                      lobortis. Donec tincidunt bibendum gravida.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-lg-4 col-xs-12">
                <div
                  className="services-item wow fadeInRight"
                  data-wow-delay="0.6s"
                >
                  <div className="icon">
                    <i className="lni-stats-up"></i>
                  </div>
                  <div className="services-content">
                    <h3>
                      <a href="#">Awesome Design</a>
                    </h3>
                    <p>
                      Ut maximus enim dolor. Aenean auctor risus eget tincidunt
                      lobortis. Donec tincidunt bibendum gravida.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-lg-4 col-xs-12">
                <div
                  className="services-item wow fadeInRight"
                  data-wow-delay="0.9s"
                >
                  <div className="icon">
                    <i className="lni-users"></i>
                  </div>
                  <div className="services-content">
                    <h3>
                      <a href="#">Easy To Customize</a>
                    </h3>
                    <p>
                      Ut maximus enim dolor. Aenean auctor risus eget tincidunt
                      lobortis. Donec tincidunt bibendum gravida.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="about-area section-padding bg-gray">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-12 col-xs-12 info">
                <div
                  className="about-wrapper wow fadeInLeft"
                  data-wow-delay="0.3s"
                >
                  <div>
                    <div className="site-heading">
                      <p className="mb-3">Manage Statistics</p>
                      <h2 className="section-title">
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
                      <h4>Bootstrap 4 Based</h4>
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
                      <h4>Fully Responsive</h4>
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
                      <h4>HTML5, CSS3 & SASS</h4>
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
                      <h4>Modern Design</h4>
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
                      <h4>Multi-purpose Template</h4>
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
                      <h4>Working Contact Form</h4>
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
