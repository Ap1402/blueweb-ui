import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbars/Navbar";
import styled from "styled-components";
import LoginModal from "../../components/Modals/LoginModal";
import RegisterModal from "../../components/Modals/RegisterModal";
import ClientLogoutModal from "../../components/Modals/ClientLogoutModal";

const HeaderStyle = styled.header`
  position: relative;
  width: 100%;
  z-index: 1000;

  .bar {
    color: white;
    background-color: white;
    align-items: center;
    width: 100%;
    display: flex;
    z-index: 1000;
    margin-top: 30px;
    position: absolute;
    font-style: bold;
    flex-direction: row;
    justify-content: space-between;
    @media (max-width: 700px) {
      justify-content: space-between;
    }
  }

  .scroll {
    background-color: white;
    color: #6b6969;
    position: fixed;
    z-index: 1000;
    top: 0;
    margin-top: 0;
    -webkit-box-shadow: 0px 4px 7px -8px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 4px 7px -8px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 4px 7px -8px rgba(0, 0, 0, 0.75);

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

const StyledButton = styled.button`
  &&& {
    margin-top: 10px;
    padding: 8px 20px;
    @media (min-width: 768px) {
      margin-top: 0;
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
          <li className="nav-item ">
            <StyledButton
              className="btn btn-landing btn-border"
              onClick={(e) => onClickHandler(e, "login")}
              variant="contained"
            >
              Ingresar
            </StyledButton>
          </li>
          <li className="nav-item ">
            <StyledButton
              variant="contained"
              className="btn btn-landing btn-common"
              onClick={(e) => onClickHandler(e, "register")}
            >
              Registro
            </StyledButton>
          </li>

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
          <li className="nav-item ">
            <StyledButton
              variant="outlined"
              className="btn btn-landing btn-common"
              color="primary"
              disableElevation
              onClick={() => setModalLogoutShow(true)}
            >
              Salir
            </StyledButton>
          </li>
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
        <Navbar>{createAuthButtons(isAuth)}</Navbar>
      </div>
    </HeaderStyle>
  );
};

export default Header;
