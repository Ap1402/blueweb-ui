import styled from "styled-components";
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
    font-weight: inherit;
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
        <Link to="/servicios" href="/servicios">
          Servicios
        </Link>
      </li>
      <li className="common-nav">
        <Link to="/nosotros" href="/nosotros">
          Nosotros
        </Link>
      </li>
      <li className="common-nav">
        <Link to="/contacto" href="/contacto">
          Contacto
        </Link>
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
