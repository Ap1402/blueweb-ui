import Slide from "react-reveal/Slide";
import styled from "styled-components";
import ParallaxBackground from "../../components/ParallaxBackground/ParallaxBackground";
import PreFooter from "../../containers/LandingPage/PreFooter";
import PreFooterItems from "../../components/IconsWithDescription/IconWithDescription";
import CreateAverieReport from "../../components/Forms/Client/CreateAverieReport";

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

const ReporteDeAveria = () => {
  return (
    <>
      <ParallaxBackground imageSrc="/images/Background-contact.jpg">
        <StyledBanner>
          <h1>Reporte de Averia</h1>
        </StyledBanner>
      </ParallaxBackground>

      <Slide right cascade>
        <CreateAverieReport></CreateAverieReport>
      </Slide>

      <PreFooter>
        <PreFooterItems></PreFooterItems>
      </PreFooter>
    </>
  );
};

export default ReporteDeAveria;
