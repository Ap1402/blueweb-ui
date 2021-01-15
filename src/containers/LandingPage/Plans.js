import React from "react";
import Titles from "../../components/Titles/Titles";

const Plans = () => {
  return (
    <section id="pricing" className="section-padding">
      <div className="container">
        <div className="section-header text-center">
          <Titles>Planes</Titles>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6 col-xs-12">
            <div className="table wow fadeInLeft" data-wow-delay="1.2s">
              <div className="icon-box">
                <i className="lni-package"></i>
              </div>
              <div className="pricing-header">
                <p className="price-value">
                  $10<span> /mo</span>
                </p>
              </div>
              <div className="title">
                <h3>Pro</h3>
              </div>
              <ul className="description">
                <li>1 user</li>
                <li>10 GB storage</li>
                <li>Email support</li>
                <li>Lifetime updates</li>
              </ul>
              <button className="btn btn-landing btn-common">
                Purchase Now
              </button>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-xs-12 active">
            <div
              className="table wow fadeInUp"
              id="active-tb"
              data-wow-delay="1.2s"
            >
              <div className="icon-box">
                <i className="lni-drop"></i>
              </div>
              <div className="pricing-header">
                <p className="price-value">
                  $35<span> /mo</span>
                </p>
              </div>
              <div className="title">
                <h3>Plus</h3>
              </div>
              <ul className="description">
                <li>10 user</li>
                <li>30 GB storage</li>
                <li>Priority email support</li>
                <li>Lifetime updates</li>
              </ul>
              <button className="btn btn-landing btn-common">
                Purchase Now
              </button>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-xs-12">
            <div className="table wow fadeInRight" data-wow-delay="1.2s">
              <div className="icon-box">
                <i className="lni-star"></i>
              </div>
              <div className="pricing-header">
                <p className="price-value">
                  $150<span> /mo</span>
                </p>
              </div>
              <div className="title">
                <h3>Premium</h3>
              </div>
              <ul className="description">
                <li>Unlimited users</li>
                <li>Unlimited storage</li>
                <li>24/7 support</li>
                <li>Lifetime updates</li>
              </ul>
              <button className="btn btn-landing  btn-common">
                Purchase Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Plans;
