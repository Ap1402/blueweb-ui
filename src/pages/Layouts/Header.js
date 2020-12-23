import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbars/Navbar";
import styled from "styled-components";
import NavbarMobile from "../../components/Navbars/NavbarMobile";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import LoginModal from "../../components/Modals/LoginModal";
import RegisterModal from "../../components/Modals/RegisterModal";
import ClientLogoutModal from "../../components/Modals/ClientLogoutModal";

const HeaderStyle = styled.header`
  position: relative;
  width: 100%;
  z-index: 100;
  .bar {
    color: white;
    align-items: center;
    width: 100%;
    display: flex;
    z-index: 1000;
    font-size: 18px;
    margin-top: 30px;
    position: absolute;
    font-style: bold;
    flex-direction: row;
    justify-content: space-between;

    img {
      align-self: flex-start;
      padding: 5px 0 5px 50px;
      height: 70px;
      display: none;
    }
    a {
      z-index: 1000;
    }
    @media (max-width: 700px) {
      justify-content: space-between;
      img {
        padding: 5px 0 5px 10px;
        z-index: 1000;
      }
    }
  }

  .desktop-bar {
    z-index: 1000;
    display: none;
    font-size: inherit;
    @media (min-width: 700px) {
      display: inline;
      margin-left: auto;
      margin-right: 70px;
      button {
        margin-left: 10px;
        border-radius: 0;
      }
      .login {
        background-color: #3470df;
      }
      .register {
        background-color: white;
        color: black;
        border: solid black 1.5px;
      }
    }
  }

  .scroll {
    background-color: white;
    color: #6b6969;
    position: fixed;
    z-index: 1000;
    top: 0;
    margin-top: 0;

    font-size: 15px;
    -webkit-box-shadow: 0px 4px 7px -8px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 4px 7px -8px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 4px 7px -8px rgba(0, 0, 0, 0.75);

    img {
      height: 50px;
      display: block;
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

const Header = ({ isAuth }) => {
  const [barClassName, setbarClassName] = useState("");
  const [modalLogin, setModalLoginShow] = useState(false);
  const [modalRegister, setModalRegisterShow] = useState(false);
  const [modalLogout, setModalLogoutShow] = useState(false);

  useEffect(() => {
    window.onscroll = () => {
      if (window.scrollY <= 30) {
        setbarClassName("");
      } else {
        setbarClassName("scroll");
      }
    };
  }, []);

  const onClickHandler = (e, type) => {
    e.preventDefault();
    if (type === "register") {
      setModalRegisterShow(true);
    } else {
      setModalLoginShow(true);
    }
  };

  const createAuthButtons = (isAuth) => {
    if (!isAuth) {
      return (
        <>
          <Button
            className="login"
            onClick={(e) => onClickHandler(e, "login")}
            variant="contained"
            color="primary"
            disableElevation
          >
            Ingresar
          </Button>
          <Button
            variant="contained"
            className="register"
            onClick={(e) => onClickHandler(e, "register")}
            color="primary"
            disableElevation
          >
            Registro
          </Button>
          <LoginModal
            show={modalLogin}
            onHide={() => setModalLoginShow(false)}
          ></LoginModal>
          <RegisterModal
            show={modalRegister}
            onHide={() => setModalRegisterShow(false)}
          ></RegisterModal>
        </>
      );
    } else {
      return (
        <>
          <Button
            variant="outlined"
            className="register"
            color="primary"
            disableElevation
            onClick={() => setModalLogoutShow(true)}
          >
            Salir
          </Button>
          <ClientLogoutModal
            show={modalLogout}
            onHide={() => setModalLogoutShow(false)}
            handleClose={setModalLogoutShow}
          ></ClientLogoutModal>
        </>
      );
    }
  };
  return (
    <HeaderStyle>
      <div className={"bar " + barClassName}>
        <Link to="/">
          <img src="/images/Logo.png" alt="BlueWeb"></img>
        </Link>
        <div className="desktop-bar">
          <Navbar></Navbar>
          {createAuthButtons(isAuth)}
        </div>

        <div className="mobile-navbar">
          <NavbarMobile></NavbarMobile>
        </div>
      </div>
    </HeaderStyle>
  );
};

export default Header;
