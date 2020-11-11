import styled from "styled-components";
import LoginModal from "../Modals/LoginModal";
import React from "react";
import { Link } from "react-router-dom";

const NavbarStyle = styled.ul`
  list-style-type: none;
  display: inline-block;
  text-transform: uppercase;
  margin-top: auto;
  margin-bottom: auto;
  li {
    display: inline-block;
  }

  & li a {
    display: block;
    padding: 5px;
    text-decoration: none;
    font-weight: 700;
    margin: 0 10px;
    color: inherit;
  }
  & li,
  & li a:after,
  & li a:before {
    transition: all 0.3s linear, font-size 1ms linear;
  }

  /* SHIFT */
  .common-nav {
    position: relative;
    z-index: 1;
  }
  .common-nav a:hover {
    color: white;
  }
  .common-nav a:after {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    width: 100%;
    height: 1px;
    content: ".";
    color: transparent;
    box-shadow: 0 0 4px rgba(248, 202, 255, 0.2),
      2px 2px 3px rgba(248, 202, 255, 0.2);
    background: ${({ theme }) => theme.colors.blue};
    visibility: none;
    opacity: 0;
    z-index: -1;
  }
  .common-nav a:hover:after {
    opacity: 1;
    visibility: visible;
    height: 100%;
  }

  .active {
    outline: none;
    &:after {
      width: calc(100% - 10px);
    }
    @media (min-width: 700px) {
      width: calc(100% - 10px);
    }
  }

  .highlighted a {
    background-color: ${({ theme }) => theme.colors.blue};
    color: white;
    font-size: 18px;
    border-radius: 15px;
    transition: all 0.2s linear;
  }

  .highlighted a:hover {
    background-color: ${({ theme }) => theme.colors.blue};
    color: black;
  }
`;

const Navbar = () => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <NavbarStyle>
      <li className="common-nav">
        <Link to="/">Inicio</Link>
      </li>

      <li className="common-nav">
        <Link to="/servicios">Servicios</Link>
      </li>
      <li className="common-nav">
        <Link to="/nosotros">Nosotros</Link>
      </li>
      <li className="common-nav">
        <Link to="/contacto">Contacto</Link>
      </li>
      {/*   <li className="highlighted" onClick={() => setModalShow(true)}>
      <Link to="#">Ingreso</Link>
      </li>

      <LoginModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      /> */}
    </NavbarStyle>
  );
};

export default Navbar;
