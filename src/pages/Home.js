import HeroBanner from "../containers/LandingPage/HeroBanner";
import styled from "styled-components";
import SupportBanner from "../containers/LandingPage/SupportBanner";
import Ventajas from "../containers/LandingPage/Ventajas";
import ThreeComponents from "../containers/LandingPage/ThreeComponents";
import ContactUs from "../containers/LandingPage/ContactUs";
import ClientsCarousel from "../containers/LandingPage/ClientsCarousel";

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
        <section id="services" class="section-padding">
          <div class="container">
            <div class="section-header text-center">
              <h2 class="section-title wow fadeInDown" data-wow-delay="0.3s">
                Our Services
              </h2>
              <div class="shape wow fadeInDown" data-wow-delay="0.3s"></div>
            </div>
            <div class="row">
              <div class="col-md-6 col-lg-4 col-xs-12">
                <div
                  class="services-item wow fadeInRight"
                  data-wow-delay="0.3s"
                >
                  <div class="icon">
                    <i class="lni-cog"></i>
                  </div>
                  <div class="services-content">
                    <h3>
                      <a href="#">Easy To Used</a>
                    </h3>
                    <p>
                      Ut maximus enim dolor. Aenean auctor risus eget tincidunt
                      lobortis. Donec tincidunt bibendum gravida.{" "}
                    </p>
                  </div>
                </div>
              </div>

              <div class="col-md-6 col-lg-4 col-xs-12">
                <div
                  class="services-item wow fadeInRight"
                  data-wow-delay="0.6s"
                >
                  <div class="icon">
                    <i class="lni-stats-up"></i>
                  </div>
                  <div class="services-content">
                    <h3>
                      <a href="#">Awesome Design</a>
                    </h3>
                    <p>
                      Ut maximus enim dolor. Aenean auctor risus eget tincidunt
                      lobortis. Donec tincidunt bibendum gravida.{" "}
                    </p>
                  </div>
                </div>
              </div>

              <div class="col-md-6 col-lg-4 col-xs-12">
                <div
                  class="services-item wow fadeInRight"
                  data-wow-delay="0.9s"
                >
                  <div class="icon">
                    <i class="lni-users"></i>
                  </div>
                  <div class="services-content">
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

              <div class="col-md-6 col-lg-4 col-xs-12">
                <div
                  class="services-item wow fadeInRight"
                  data-wow-delay="1.2s"
                >
                  <div class="icon">
                    <i class="lni-layers"></i>
                  </div>
                  <div class="services-content">
                    <h3>
                      <a href="#">UI/UX Design</a>
                    </h3>
                    <p>
                      Ut maximus enim dolor. Aenean auctor risus eget tincidunt
                      lobortis. Donec tincidunt bibendum gravida.{" "}
                    </p>
                  </div>
                </div>
              </div>

              <div class="col-md-6 col-lg-4 col-xs-12">
                <div
                  class="services-item wow fadeInRight"
                  data-wow-delay="1.5s"
                >
                  <div class="icon">
                    <i class="lni-mobile"></i>
                  </div>
                  <div class="services-content">
                    <h3>
                      <a href="#">App Development</a>
                    </h3>
                    <p>
                      Ut maximus enim dolor. Aenean auctor risus eget tincidunt
                      lobortis. Donec tincidunt bibendum gravida.{" "}
                    </p>
                  </div>
                </div>
              </div>

              <div class="col-md-6 col-lg-4 col-xs-12">
                <div
                  class="services-item wow fadeInRight"
                  data-wow-delay="1.8s"
                >
                  <div class="icon">
                    <i class="lni-rocket"></i>
                  </div>
                  <div class="services-content">
                    <h3>
                      <a href="#">User Friendly interface</a>
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

        <div class="about-area section-padding bg-gray">
          <div class="container">
            <div class="row">
              <div class="col-lg-6 col-md-12 col-xs-12 info">
                <div class="about-wrapper wow fadeInLeft" data-wow-delay="0.3s">
                  <div>
                    <div class="site-heading">
                      <p class="mb-3">Manage Statistics</p>
                      <h2 class="section-title">
                        Detailed Statistics of your Company
                      </h2>
                    </div>
                    <div class="content">
                      <p>
                        Praesent imperdiet, tellus et euismod euismod, risus
                        lorem euismod erat, at finibus neque odio quis metus.
                        Donec vulputate arcu quam. Morbi quis tincidunt ligula.
                        Sed rutrum tincidunt pretium. Mauris auctor, purus a
                        pulvinar fermentum, odio dui vehicula lorem, nec
                        pharetra justo risus quis mi. Ut ac ex sagittis, viverra
                        nisl vel, rhoncus odio.
                      </p>
                      <a href="#" class="btn btn-common mt-3">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="col-lg-6 col-md-12 col-xs-12 wow fadeInRight"
                data-wow-delay="0.3s"
              >
                <img class="img-fluid" src="/img/about/img-1.png" alt="" />
              </div>
            </div>
          </div>
        </div>

        <section id="features" class="section-padding">
          <div class="container">
            <div class="section-header text-center">
              <h2 class="section-title wow fadeInDown" data-wow-delay="0.3s">
                Awesome Features
              </h2>
              <div class="shape wow fadeInDown" data-wow-delay="0.3s"></div>
            </div>
            <div class="row">
              <div class="col-lg-4 col-md-12 col-sm-12 col-xs-12">
                <div class="content-left">
                  <div class="box-item wow fadeInLeft" data-wow-delay="0.3s">
                    <span class="icon">
                      <i class="lni-rocket"></i>
                    </span>
                    <div class="text">
                      <h4>Bootstrap 4 Based</h4>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </p>
                    </div>
                  </div>
                  <div class="box-item wow fadeInLeft" data-wow-delay="0.6s">
                    <span class="icon">
                      <i class="lni-laptop-phone"></i>
                    </span>
                    <div class="text">
                      <h4>Fully Responsive</h4>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </p>
                    </div>
                  </div>
                  <div class="box-item wow fadeInLeft" data-wow-delay="0.9s">
                    <span class="icon">
                      <i class="lni-cog"></i>
                    </span>
                    <div class="text">
                      <h4>HTML5, CSS3 & SASS</h4>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-12 col-sm-12 col-xs-12">
                <div class="show-box wow fadeInUp" data-wow-delay="0.3s">
                  <img src="/img/feature/intro-mobile.png" alt="" />
                </div>
              </div>
              <div class="col-lg-4 col-md-12 col-sm-12 col-xs-12">
                <div class="content-right">
                  <div class="box-item wow fadeInRight" data-wow-delay="0.3s">
                    <span class="icon">
                      <i class="lni-leaf"></i>
                    </span>
                    <div class="text">
                      <h4>Modern Design</h4>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry
                      </p>
                    </div>
                  </div>
                  <div class="box-item wow fadeInRight" data-wow-delay="0.6s">
                    <span class="icon">
                      <i class="lni-layers"></i>
                    </span>
                    <div class="text">
                      <h4>Multi-purpose Template</h4>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </p>
                    </div>
                  </div>
                  <div class="box-item wow fadeInRight" data-wow-delay="0.9s">
                    <span class="icon">
                      <i class="lni-leaf"></i>
                    </span>
                    <div class="text">
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

        <section id="cta" class="section-padding">
          <div class="container">
            <div class="row">
              <div
                class="col-lg-6 col-md-6 col-xs-12 wow fadeInLeft"
                data-wow-delay="0.3s"
              >
                <div class="cta-text">
                  <h4>You're Using Free Lite Version</h4>
                  <h5>
                    Please purchase full version of the template to get all
                    features and facilities
                  </h5>
                </div>
              </div>
              <div
                class="col-lg-6 col-md-6 col-xs-12 text-right wow fadeInRight"
                data-wow-delay="0.3s"
              >
                <a
                  rel="nofollow"
                  href="https://rebrand.ly/fusion-gg"
                  class="btn btn-common"
                >
                  Purchase Now
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" class="section-padding">
          <div class="container">
            <div class="section-header text-center">
              <h2 class="section-title wow fadeInDown" data-wow-delay="0.3s">
                Pricing
              </h2>
              <div class="shape wow fadeInDown" data-wow-delay="0.3s"></div>
            </div>
            <div class="row">
              <div class="col-lg-4 col-md-6 col-xs-12">
                <div class="table wow fadeInLeft" data-wow-delay="1.2s">
                  <div class="icon-box">
                    <i class="lni-package"></i>
                  </div>
                  <div class="pricing-header">
                    <p class="price-value">
                      $10<span> /mo</span>
                    </p>
                  </div>
                  <div class="title">
                    <h3>Pro</h3>
                  </div>
                  <ul class="description">
                    <li>1 user</li>
                    <li>10 GB storage</li>
                    <li>Email support</li>
                    <li>Lifetime updates</li>
                  </ul>
                  <button class="btn btn-common">Purchase Now</button>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 col-xs-12 active">
                <div
                  class="table wow fadeInUp"
                  id="active-tb"
                  data-wow-delay="1.2s"
                >
                  <div class="icon-box">
                    <i class="lni-drop"></i>
                  </div>
                  <div class="pricing-header">
                    <p class="price-value">
                      $35<span> /mo</span>
                    </p>
                  </div>
                  <div class="title">
                    <h3>Plus</h3>
                  </div>
                  <ul class="description">
                    <li>10 user</li>
                    <li>30 GB storage</li>
                    <li>Priority email support</li>
                    <li>Lifetime updates</li>
                  </ul>
                  <button class="btn btn-common">Purchase Now</button>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 col-xs-12">
                <div class="table wow fadeInRight" data-wow-delay="1.2s">
                  <div class="icon-box">
                    <i class="lni-star"></i>
                  </div>
                  <div class="pricing-header">
                    <p class="price-value">
                      $150<span> /mo</span>
                    </p>
                  </div>
                  <div class="title">
                    <h3>Premium</h3>
                  </div>
                  <ul class="description">
                    <li>Unlimited users</li>
                    <li>Unlimited storage</li>
                    <li>24/7 support</li>
                    <li>Lifetime updates</li>
                  </ul>
                  <button class="btn btn-common">Purchase Now</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="testimonial" class="testimonial section-padding">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div
                  id="testimonials"
                  class="owl-carousel wow fadeInUp"
                  data-wow-delay="1.2s"
                >
                  <div class="item">
                    <div class="testimonial-item">
                      <div class="img-thumb">
                        <img src="/img/testimonial/img1.jpg" alt="" />
                      </div>
                      <div class="info">
                        <h2>
                          <a href="#">David Smith</a>
                        </h2>
                        <h3>
                          <a href="#">Creative Head</a>
                        </h3>
                      </div>
                      <div class="content">
                        <p class="description">
                          Praesent cursus nulla non arcu tempor, ut egestas elit
                          tempus. In ac ex fermentum, gravida felis nec,
                          tincidunt ligula.
                        </p>
                        <div class="star-icon mt-3">
                          <span>
                            <i class="lni-star-filled"></i>
                          </span>
                          <span>
                            <i class="lni-star-filled"></i>
                          </span>
                          <span>
                            <i class="lni-star-filled"></i>
                          </span>
                          <span>
                            <i class="lni-star-filled"></i>
                          </span>
                          <span>
                            <i class="lni-star-half"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="item">
                    <div class="testimonial-item">
                      <div class="img-thumb">
                        <img src="/img/testimonial/img2.jpg" alt="" />
                      </div>
                      <div class="info">
                        <h2>
                          <a href="#">Domeni GEsson</a>
                        </h2>
                        <h3>
                          <a href="#">Awesome Technology co.</a>
                        </h3>
                      </div>
                      <div class="content">
                        <p class="description">
                          Praesent cursus nulla non arcu tempor, ut egestas elit
                          tempus. In ac ex fermentum, gravida felis nec,
                          tincidunt ligula.
                        </p>
                        <div class="star-icon mt-3">
                          <span>
                            <i class="lni-star-filled"></i>
                          </span>
                          <span>
                            <i class="lni-star-filled"></i>
                          </span>
                          <span>
                            <i class="lni-star-filled"></i>
                          </span>
                          <span>
                            <i class="lni-star-half"></i>
                          </span>
                          <span>
                            <i class="lni-star-half"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="item">
                    <div class="testimonial-item">
                      <div class="img-thumb">
                        <img src="/img/testimonial/img3.jpg" alt="" />
                      </div>
                      <div class="info">
                        <h2>
                          <a href="#">Dommini Albert</a>
                        </h2>
                        <h3>
                          <a href="#">Nesnal Design co.</a>
                        </h3>
                      </div>
                      <div class="content">
                        <p class="description">
                          Praesent cursus nulla non arcu tempor, ut egestas elit
                          tempus. In ac ex fermentum, gravida felis nec,
                          tincidunt ligula.
                        </p>
                        <div class="star-icon mt-3">
                          <span>
                            <i class="lni-star-filled"></i>
                          </span>
                          <span>
                            <i class="lni-star-filled"></i>
                          </span>
                          <span>
                            <i class="lni-star-filled"></i>
                          </span>
                          <span>
                            <i class="lni-star-filled"></i>
                          </span>
                          <span>
                            <i class="lni-star-half"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="item">
                    <div class="testimonial-item">
                      <div class="img-thumb">
                        <img src="/img/testimonial/img4.jpg" alt="" />
                      </div>
                      <div class="info">
                        <h2>
                          <a href="#">Fernanda Anaya</a>
                        </h2>
                        <h3>
                          <a href="#">Developer</a>
                        </h3>
                      </div>
                      <div class="content">
                        <p class="description">
                          Praesent cursus nulla non arcu tempor, ut egestas elit
                          tempus. In ac ex fermentum, gravida felis nec,
                          tincidunt ligula.
                        </p>
                        <div class="star-icon mt-3">
                          <span>
                            <i class="lni-star-filled"></i>
                          </span>
                          <span>
                            <i class="lni-star-filled"></i>
                          </span>
                          <span>
                            <i class="lni-star-half"></i>
                          </span>
                          <span>
                            <i class="lni-star-half"></i>
                          </span>
                          <span>
                            <i class="lni-star-half"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="cta" class="section-padding">
          <div class="container">
            <div class="row">
              <div
                class="col-lg-6 col-md-6 col-xs-12 wow fadeInLeft"
                data-wow-delay="0.3s"
              >
                <div class="cta-text">
                  <h4>Get 30 days free trial</h4>
                  <p>
                    Praesent imperdiet, tellus et euismod euismod, risus lorem
                    euismod erat, at finibus neque odio quis metus. Donec
                    vulputate arcu quam.{" "}
                  </p>
                </div>
              </div>
              <div
                class="col-lg-6 col-md-6 col-xs-12 text-right wow fadeInRight"
                data-wow-delay="0.3s"
              >
                <a href="#" class="btn btn-common">
                  Register Now
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" class="section-padding bg-gray">
          <div class="container">
            <div class="section-header text-center">
              <h2 class="section-title wow fadeInDown" data-wow-delay="0.3s">
                Countact Us
              </h2>
              <div class="shape wow fadeInDown" data-wow-delay="0.3s"></div>
            </div>
            <div
              class="row contact-form-area wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div class="col-lg-7 col-md-12 col-sm-12">
                <section id="cta" class="section-padding">
                  <div class="container">
                    <div class="row">
                      <div
                        class="col-lg-6 col-md-6 col-xs-12 wow fadeInLeft"
                        data-wow-delay="0.3s"
                      >
                        <div class="cta-text">
                          <h4>You're Using Free Lite Version</h4>
                          <h5>
                            Please purchase full version of the template to get
                            all features and facilities
                          </h5>
                        </div>
                      </div>
                      <div
                        class="col-lg-6 col-md-6 col-xs-12 text-right wow fadeInRight"
                        data-wow-delay="0.3s"
                      >
                        <a
                          rel="nofollow"
                          href="https://rebrand.ly/fusion-gg"
                          class="btn btn-common"
                        >
                          Purchase Now
                        </a>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
              <div class="col-lg-5 col-md-12 col-xs-12">
                <div class="map">
                  <object
                    style={{ border: 0, height: "280px", width: "100%" }}
                    data="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d34015.943594576835!2d-106.43242624069771!3d31.677719472407432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86e75d90e99d597b%3A0x6cd3eb9a9fcd23f1!2sCourtyard+by+Marriott+Ciudad+Juarez!5e0!3m2!1sen!2sbd!4v1533791187584"
                  ></object>
                </div>
              </div>
            </div>
          </div>
        </section>


        <a href="#" class="back-to-top">
          <i class="lni-arrow-up"></i>
        </a>
      </body>
    </>
  );
};

export default Home;
