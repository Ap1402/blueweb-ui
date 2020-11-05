import Slide  from "react-reveal/Slide";
import styled from "styled-components";
import ContactForm from "../../components/Forms/Client/ContactForm";
import ParallaxBackground from "../../components/Backgrounds/ParallaxBackground";
import PreFooter from "../../containers/LandingPage/PreFooter";
import PreFooterItems from "../../containers/LandingPage/PreFooterItems";

const StyledContacto = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
  align-items: center;
  margin-top: 30px;

  h1 {
    text-align: center;
  }

  @media (min-width: 720px) {
    margin-top: 60px;
    flex-direction: row;
  }
`;

const StyledContactoInner = styled.div`
  width: 100%;
  h1 {
    text-align: center;
    font-weight: 600;
  }
  i {
    font-size: 400px;
  }
  @media (min-width: 700px) {
    width: ${(props) => (props.contactForm ? "400px" : "600px")};
  }
`;

const StyledBlockContact = styled.div`
  width: 100%;
  display: flex;
  align-items: left;
  flex-direction: column;
  margin-top: 3rem;
  margin-bottom: 3rem;
  margin-right: 3rem;
  border-radius: 26px;
  background: #ffffff;
  box-shadow: 23px 23px 40px #f0f0f0, -23px -23px 40px #ffffff;
  padding: 40px;
  @media (min-width: 700px) {
    margin-left: 3rem;
  }
  .block {
    margin-top: 10px;
    h4 {
      text-align: left;
      color: ${({ theme }) => theme.colors.blue};
    }
    i {
      font-size: 30px;
      margin-right: 10px;
    }
    .red {
      font-size: 40px;
      margin-top: 20px;
      margin-left: 25px;
      color: ${({ theme }) => theme.colors.blue};
      cursor:pointer;
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
    p {
      text-align: left;
    }
  }

  .office-location {
    text-align: left;
    margin-top: 30px;
    h4 {
      color: ${({ theme }) => theme.colors.blue};
    }
  }

  @media (min-width: 700px) {
    margin-top: 0px;
  }
`;

const StyledBanner = styled.div`
  width: 100%;
  height: 400px;
  position: relative;

  h1 {
    font-weight: 600;
    color: white;
    position: absolute;
    bottom: 0;
    margin-bottom: 20px;
    margin-left: 10%;
    font-size: 50px;
  }
`;

const Contacto = () => {
  return (
    <>
      <ParallaxBackground imageSrc="/images/Background-contact.jpg">
        <StyledBanner>
          <h1>Contacto</h1>
        </StyledBanner>
      </ParallaxBackground>

      <Slide right cascade>
        <StyledContacto>
          <StyledContactoInner contactForm>
            <h1>Contáctanos</h1>
            <ContactForm></ContactForm>
          </StyledContactoInner>

          <StyledContactoInner>
            <StyledBlockContact>
              <h1>Información</h1>
              <div className="office-location">
                <h4>Oficina:</h4>
                <p>
                  AV.74 Entre Calle 105 Y Av 75 Al lado de Toyoclub, Avenida
                  Intercomunal Don Julio Centeno, San Diego 2006, Carabobo
                </p>
              </div>
              <div className="block">
                <h4>
                  <i className="fas fa-phone-volume"></i>Móvil:
                </h4>
                <p> xxxx-xxxxx</p>
              </div>
              <div className="block">
                <h4>
                  <i className="far fa-envelope"></i>Email:
                </h4>

                <p>InformacionTest@gmail.com</p>
              </div>
              <div className="block">
                <h4>
                  <i className="fas fa-share-alt"></i>Redes:
                </h4>
                <p>
                  <i className="fab fa-twitter-square red"></i>
                  <i className="fab fa-facebook red"></i>
                  <i className="fab fa-instagram-square red"></i>
                </p>
              </div>
            </StyledBlockContact>
          </StyledContactoInner>
        </StyledContacto>
      </Slide>

      <PreFooter>
        <PreFooterItems></PreFooterItems>
      </PreFooter>
    </>
  );
};

export default Contacto;
