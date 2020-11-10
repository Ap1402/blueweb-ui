import styled from "styled-components";
import Fade from "react-reveal/Fade";

const StyledAboutUs = styled.section`
  display: flex;
  flex-direction: column;
  color: white;
  width: 100%;
  margin-top: 3rem;
  text-align: center;
  align-items: center;
  justify-content: center;

  .left {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    img {
      width: 300px;
    }
  }
  .right {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    img {
      width: 300px;
    }
  }

  @media (min-width: 720px) {
    flex-direction: row;

    .left {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 50%;
      img {
        width: 500px;
      }
    }
    .right {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 50%;
      img {
        width: 500px;
      }
    }
  }
`;

const TwoSectionsDivider = ({
  leftComponent,
  rightComponent,
  fadeDirection,
}) => {
  const getFadeDirection = (direction) => {
    return fadeDirection === direction ? true : false;
  };
  return (
    <StyledAboutUs>
      <Fade
        duration={2500}
        right={getFadeDirection("right")}
        left={getFadeDirection("left")}
      >
        <div className="left">{leftComponent}</div>
        <div className="right">{rightComponent}</div>
      </Fade>
    </StyledAboutUs>
  );
};

export default TwoSectionsDivider;
