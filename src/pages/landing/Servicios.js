import TwoSectionsDivider from "../../components/Dividers/TwoSectionsDivider";
import styled from "styled-components";
import ParallaxBackground from "../../components/Backgrounds/ParallaxBackground";
import PreFooter from "../../containers/LandingPage/PreFooter";
import PreFooterItems from "../../containers/LandingPage/PreFooterItems";

const StyledRightText = styled.div`
  color: black;
  display: flex;
  flex-direction: column;
  font-size: 15px;
  width: 100%;
  padding: 3rem;
  h1 {
    font-weight: 600;
  }
  p {
    margin-top: 40px;
  }
  @media screen and (min-width: 700px) and (max-width: 1200px) {
    margin-top: 30px;
    margin-right: 80px;
    h1 {
      font-weight: 600;
    }
  }
  @media screen and (min-width: 1200px) {
    margin-top: 80px;
  } ;
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

const StyledWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;


const Servicios = () => {
  return (
    <>
      <ParallaxBackground imageSrc="/images/Background-services.jpg">
        <StyledBanner>
          <h1>Servicios</h1>
        </StyledBanner>
      </ParallaxBackground>
      <StyledWrapper>
        <TwoSectionsDivider
          leftComponent={
            <img src="/images/Company.png" alt="Imagen de Compañia" />
          }
          rightComponent={
            <StyledRightText>
              <h1>Planes Empresariales, Comerciales y de Hogar</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                at augue lorem. Donec maximus fermentum dolor vel imperdiet.
                Proin eu libero risus. Aenean lacinia nulla non lectus vehicula,
                sed venenatis ligula rhoncus. Morbi dapibus suscipit posuere.
                Etiam facilisis diam nec sodales tincidunt. Duis luctus magna
                vitae tempor gravida. Duis nunc urna, eleifend vel elementum ac,
                varius nec risus.
              </p>
            </StyledRightText>
          }
        ></TwoSectionsDivider>
      </StyledWrapper>
      <PreFooter>
        <PreFooterItems></PreFooterItems>
      </PreFooter>
    </>
  );
};

export default Servicios;
