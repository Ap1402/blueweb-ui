import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbars/Navbar";
import styled from "styled-components";
import NavbarMobile from "../../components/Navbars/NavbarMobile";
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import LoginModal from "../../components/Modals/LoginModal";

const HeaderStyle = styled.header`
  width: 100%;
  z-index: 10000;
  .bar {
    font-size: 15px;
    align-items: center;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    img {
      align-self: flex-start;
      padding: 5px 0 5px 50px;
      height: 50px;
    }
    @media (max-width: 700px) {
      justify-content: space-between;
      img {
        padding: 5px 0 5px 10px;
      }
    }
  }

  .desktop-bar {
    display: none;
    color: #424242;
    @media (min-width: 700px) {
      display: inline;
      margin-left: auto;
      margin-right: 70px;
      button {
        margin-left: 30px;
        background-color:#3470df;
      }
    }
  }

  .scroll {
    background-color: white;

    position: fixed;
    z-index: 1000;
    top: 0;
    font-size: 15px;
    -webkit-box-shadow: 0px 4px 7px -8px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 4px 7px -8px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 4px 7px -8px rgba(0, 0, 0, 0.75);

    img {
      height: 50px;
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
  const [modalShow, setModalShow] = React.useState(false);

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
        <Link to="/">
          <img src="/images/Logo.png" alt="BlueWeb"></img>
        </Link>
        <div className="desktop-bar">
          <Navbar></Navbar>
          <Button onClick={() => setModalShow(true)} variant="contained" color="primary" disableElevation>
            Ingresar
          </Button>
        </div>
        <div className="mobile-navbar">
          <NavbarMobile ></NavbarMobile>
        </div>
      </div>
      <LoginModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </HeaderStyle>
  );
};

export default Header;
