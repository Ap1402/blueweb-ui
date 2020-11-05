import Slide  from "react-reveal/Slide";
import styled from "styled-components";
import ParallaxBackground from "../../components/Backgrounds/ParallaxBackground";
import PreFooter from "../../containers/LandingPage/PreFooter";
import PreFooterItems from "../../components/IconsWithDescription/IconWithDescription";
import FactibilidadFormContainer from '../../containers/Clientpanel/FactibilidadFormContainer';

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

const Factibilidad = () => {

  return (
    <>
      <ParallaxBackground imageSrc="/images/Background-contact.jpg">
        <StyledBanner>
          <h1>Factibilidad</h1>
        </StyledBanner>
      </ParallaxBackground>

      <Slide right cascade>
      <FactibilidadFormContainer></FactibilidadFormContainer>
      </Slide>

      <PreFooter>
        <PreFooterItems></PreFooterItems>
      </PreFooter>
    </>
  );
};


export default Factibilidad;
