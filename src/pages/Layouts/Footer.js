import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  width: 100%;
  background-color: #ededed;
  margin: 0;
  padding: 3rem;
  color: black;
`;

const StyledDivForFooter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
  justify-content: space-between;

  .red {
    font-size: 35px;
    margin-right: 20px;
    color: ${({ theme }) => theme.colors.blue};
    cursor: pointer;
    & {
      -webkit-transform: perspective(1px) translateZ(0);
      transform: perspective(1px) translateZ(0);
      box-shadow: 0 0 1px rgba(0, 0, 0, 0);
      -webkit-transition-duration: 0.3s;
      transition-duration: 0.3s;
      -webkit-transition-property: transform;
      transition-property: transform;
    }
    &:hover,
    &:focus,
    &:active {
      -webkit-transform: scale(1.3);
      transform: scale(1.3);
    }
  }
  .aboutUsWrapper {
    align-self: flex-start;
    p {
      font-size: 15px;
      text-align: justify;
    }
    h2 {
      font-weight: 600;
    }
    @media (min-width: 760px) {
      width: 30%;
    }
    .logo-footer {
      width: 200px;
      margin-bottom: 20px;
    }
  }
  .logoWrapper {
    align-self: center;
    text-align: center;
    img {
      width: 80px;
    }
    @media (min-width: 760px) {
      width: 30%;
      img {
        width: 120px;
      }
    }
  }
  .contactWrapper {
    align-self: flex-start;
    text-align: left;
    h2 {
      text-align: left;
      font-weight: 600;
    }
    ul {
      list-style: none;
      li {
        margin-top: 0.3rem;
        margin-bottom: 0.3rem;
      }
    }

    .direction {
      font-size: 0.8rem;
    }

    @media (min-width: 760px) {
      width: 30%;
    }
  }

  @media (min-width: 760px) {
    flex-direction: row;
    margin: 0 4rem;
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <StyledDivForFooter>
        <div className="aboutUsWrapper">
          <img
            src="/images/blue-web.png"
            alt="BlueWeb"
            className="logo-footer"
          ></img>

          <p>
            The following is the stress test for the chosen effect. A 100
            paragraphs of lorem ipsum text will be revealed as you scroll down.
            To reset the test select an option from the button toolbar above.
            The following whitespace is intentionally left blank. Scroll down to
            begin stress test.
          </p>
          <i className="fab fa-twitter-square red"></i>
          <i className="fab fa-facebook red"></i>
          <i className="fab fa-instagram-square red"></i>
        </div>

        <div className="contactWrapper">
          <h2>Datos de Contacto</h2>
          <p>Telefono: 555-55555</p>
          <p className="direction">
            The following is the stress test for the chosen effect. A 100
            paragraphs of lorem ipsum text will be revealed
          </p>
        </div>
      </StyledDivForFooter>
    </StyledFooter>
  );
};

export default Footer;
