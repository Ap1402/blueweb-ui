import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import React from 'react';
import LoginModal from "../Modals/LoginModal";

const ResponsiveNav = styled.div`
  padding: 20px;
  position: relative;
  display: flex;
  flex-direction: column;
  background: white;
  position: fixed;
  height: 100%;
  top: 0;
  right: 0;
  width: 40%;
  /* min-width: 500px; */
  bottom: 0;
  transform: translateX(100%);
  transition: all 0.3s;
  box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.2);
  z-index: 5;
  display: grid;
  grid-template-rows: auto 1fr auto;
  ${(props) => props.open && `transform: translateX(0%);`};

  ul {
    list-style-type: none;
    li a {
      display: flex;
      text-decoration: inherit;
      padding: 0.75rem;
      color: ${({ theme }) => theme.colors.blue};
      position: relative;
    }
  }
`;

const CloseButton = styled.button`
  background-color: transparent;
  color: ${({ theme }) => theme.colors.blue};
  font-size: 3rem;
  cursor: pointer;
  border: 0;
  position: absolute;
  z-index: 2;
  right: 0;
  &:hover {
    color: gray;
  }
`;

const OpenButton = styled.button`
  display: block;
  background-color: transparent;
  font-size: 1.5rem;
  cursor: pointer;
  border: 0;
  z-index: 2;
  float: right;
  margin-right: 20px;

  &:hover {
    color: gray;
  }

  @media screen and (min-width: 700px) {
    display: none;
    align-self:flex-end;
  }

  div {
    width: 35px;
    height: 5px;
    background-color: black;
    margin: 6px 0;
  }
`;

const NavbarMobile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleCloseButton = () => {
    setIsOpen(!isOpen);
  };
  const [modalShow, setModalShow] = React.useState(false);


  return (
    <>
      <OpenButton onClick={() => handleCloseButton()}>
        <div></div>
        <div></div>
        <div></div>
      </OpenButton>
      <ResponsiveNav open={isOpen}>
        <CloseButton onClick={() => handleCloseButton()} title="close">
          &times;
        </CloseButton>
        <ul>
          <li >
            <Link to="/">Inicio</Link>
          </li>

          <li >
            <Link to="/servicios">Servicios</Link>
          </li>
          <li >
            <Link to="/nosotros">Nosotros</Link>
          </li>
          <li >
            <Link to="/contacto">Contacto</Link>
          </li>
          <li onClick={() => setModalShow(true)}>
            <Link to="#">Ingreso</Link>
          </li>

          <LoginModal show={modalShow} onHide={() => setModalShow(false)} />
        </ul>
      </ResponsiveNav>
    </>
  );
};

export default NavbarMobile;
