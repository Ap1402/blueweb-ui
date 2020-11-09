import styled from "styled-components";
import LoginModal from "../Modals/LoginModal";
import React from 'react';
import {Link} from 'react-router-dom'

const NavbarStyle = styled.ul`
  list-style-type: none;
  display: inline-block;
  font-family: 'Lato', sans-serif;
  color:inherit;
  text-transform: uppercase;

  li {
    display: inline-block;
  }

  & li a {
    display: block;
    padding: 5px;
    text-decoration: none;
    margin: 0 10px;
    color:inherit;
  }
  & li,
  & li a:after,
  & li a:before {
    transition: all 0.5s linear, font-size 1ms linear;
  }

  /* SHIFT */
  li {
    position: relative;
    z-index: 1;
  }
  li a:hover {
    color: white;
  }
  li a:after {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    border-radius: 20px;
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
  li a:hover:after {
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

`;

const Navbar = () => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <NavbarStyle>
      <li >
        <Link to="/">INICIO</Link>
      </li>

      <li >
        <Link to="/servicios">SERVICIOS</Link>
      </li>
      <li >
        <Link to="/nosotros">NOSOTROS</Link>
      </li>
      <li >
        <Link to="/contacto">CONTACTO</Link>
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
