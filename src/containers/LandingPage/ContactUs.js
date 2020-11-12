import React from "react";
import styled from "styled-components";

const StyledContactUs = styled.section`
  width: 100%;
  position: relative;
  box-sizing: border-box;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 500px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  z-index: 0;
  background-image: url("/images/Banner-2.png");

  &:before {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(57, 49, 49, 0.9);
    z-index: 1;
    content: "";
  }
  .inner {
    position: absolute;
    z-index: 2;
    width: 100%;
    left: 0;
    padding: 0 30px;
    box-sizing: border-box;
    top: 50%;
    color: #ffffff;
    text-align: center;
    margin-top: -110px;
    button {
      display: inline-block;
      height: 56px;
      line-height: 56px;
      margin: 70px auto 0;
      font-size: 16px;
      padding: 0 34px;
      background-color: #ffffff;
      border-radius: 6px;
      color: #fe4066;
      transition: 0.3s;
    }
    h1 {
      font-size: 44px;
      color: #ffffff;
      line-height: 1.5;
      letter-spacing: 0;
      margin-bottom: 16px;
    }
    h2 {
      font-size: 20px;
      line-height: 1.6;
      letter-spacing: 0;
      font-weight: 400;
      margin: 0 auto 10px;
    }
    a {
      padding: 10px 30px;
      margin: 72px auto 25px;
      line-height: 30px;
      border-radius: 6px;
      font-size: 20px;
      box-sizing: border-box;
      background: transparent;
      display: inline-block;
      color: white;
      border: solid 2px white;
      font-weight: 400;
      transition: 0.3s;
      text-align: center;
      &:hover {
        cursor: pointer;
        color: black;
        text-decoration: none;
        background-color: white;
      }
    }

    @media (max-width: 720px) {
      padding: 0 8%;
      top: 30%;
      h2 {
        font-size: 20px;
      }
      h1 {
        font-size: 36px;
      }
      a {
        margin: 20px 20px;
      }
    }
  }
`;

const ContactUs = () => {
  return (
    <StyledContactUs>
      <div className="inner">
        <h1>¿Necesitas saber más?</h1>
        <h5>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua quis.
        </h5>
        <a>Contáctanos </a>
      </div>
    </StyledContactUs>
  );
};

export default ContactUs;
