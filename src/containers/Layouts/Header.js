import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbars/Navbar";
import styled from "styled-components";
import NavbarMobile from "../../components/Navbars/NavbarMobile";

const HeaderStyle = styled.header`
  width: 100%;
  z-index: 10000;
  .bar {
    background-color: white;
    font-size: 18px;
    align-items: baseline;
    justify-content: space-between;
    width: 100%;
    display: flex;
    flex-direction: row;
    height: 70px;
    -webkit-box-shadow: 0px 4px 7px -8px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 4px 7px -8px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 4px 7px -8px rgba(0, 0, 0, 0.75);

    img {
      float: left;
      align-self: flex-start;
      margin-left: 50px;
      margin-top: 10px;
      height: 40px;
    }

    .navbar {
      display: none;
      float: right;
      margin-right: 50px;
      @media screen and (min-width: 700px) {
        display: inline-block;
      }
    }

    @media screen and (min-width: 1200px) {
      display: inline-block;
      img {
        height: 50px;
        margin-bottom:5px;
        vertical-align:middle;
      }
    }
  }
  .scroll {
    position: fixed;
    z-index: 100;
    top: 0;
    font-size: 15px;
    height: 60px;


    img {
      height: 30px;
    }
    animation-name: slideRight;
    -webkit-animation-name: slideRight;
    animation-duration: 1s;
    -webkit-animation-duration: 1s;
    animation-timing-function: ease;
    -webkit-animation-timing-function: ease;


    @keyframes slideRight {
      0% {
        transform: translateY(-150%);
      }
      100% {
        transform: translateY(0%);
      }
    }
    @-webkit-keyframes slideRight {
      0% {
        -webkit-transform: translateY(-150%);
      }
      100% {
        -webkit-transform: translateY(0%);
      }
    }
  }
`;

const Header = () => {
  const [barClassName, setbarClassName] = useState("");

  useEffect(() => {
    window.onscroll = () => {
      if (window.scrollY <= 30) {
        setbarClassName("");
      } else {
        setbarClassName("scroll");
      }
    };
  }, []);

  return (
    <HeaderStyle>
      <div className={"bar " + barClassName}>
        <a href="/">
          <img src="/images/Logo.png" alt="BlueWeb"></img>
        </a>
        <div className="navbar">
          <Navbar></Navbar>
        </div>
        <div className="mobile-navbar">
          <NavbarMobile></NavbarMobile>
        </div>
      </div>
    </HeaderStyle>
  );
};

export default Header;
