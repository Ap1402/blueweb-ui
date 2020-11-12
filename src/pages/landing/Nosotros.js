import styled from "styled-components";
import ParallaxBackground from "../../components/ParallaxBackground/ParallaxBackground";
import TwoSectionsDivider from "../../components/Dividers/TwoSectionsDivider";
import Button from "react-bootstrap/Button";

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  background-color: ${({ backgroundColor, theme }) =>
    backgroundColor ? backgroundColor : theme.colors.blue};
  padding: 20px;
  img {
    border-radius: 600px;
  }
  p {
    color: black;
    margin-right: 60px;
    text-align: justify;
    margin-top: 20px;
    margin-left: 20px;
  }
  button {
    padding: 5px;
  }
`;

const StyledBanner = styled.div`
  width: 100%;
  height: 300px;
  position: relative;

  h1 {
    font-weight: 500;
    color: white;
    position: absolute;
    bottom: 0;
    margin-bottom: 20px;
    margin-left: 10%;
    font-size: 50px;
  }
`;

const StyledRight = styled.div`
  display: flex;
  flex-direction: column;
  text-align:center;
  justify-content:center;

`;

const Nosotros = () => {
  return (
    <>
      <ParallaxBackground imageSrc="/images/keyboard.jpg">
        <StyledBanner>
          <h1>Nosotros</h1>
        </StyledBanner>
      </ParallaxBackground>
      <StyledWrapper backgroundColor="white">
        <TwoSectionsDivider
          leftComponent={
            <img src="/images/aboutUsComputer.jpg" alt="AboutUs"></img>
          }
          rightComponent={
            <StyledRight>
              <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum."
              </p>
              <Button size="sm">Ver nuestros servicios</Button>
            </StyledRight>
          }
        ></TwoSectionsDivider>
      </StyledWrapper>
    </>
  );
};

export default Nosotros;
