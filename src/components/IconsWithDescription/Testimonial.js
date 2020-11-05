import styled from "styled-components";

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;

  .testimonial-desc {
    text-align: center;
    padding: 30px;
  }
  img {
    height: 100px;
    border-radius: 100px;
    width: 100px;
  }

  .testimonial-name {
    padding-top: 30px;
    text-align: center;
  }
  .custom-shape-divider-bottom-1604334025 {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    transform: rotate(180deg);
  }

  .custom-shape-divider-bottom-1604334025 svg {
    position: relative;
    display: block;
    width: calc(161% + 1.3px);
    height: 171px;
  }

  .custom-shape-divider-bottom-1604334025 .shape-fill {
    fill: #ffffff;
  }
`;

const Testimonial = () => {
  return (
    <StyledWrapper>
      <p className="testimonial-desc">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <img src="/images/user2.png"></img>
      <p className="testimonial-name">- Juan Rodriguez</p>
    </StyledWrapper>
  );
};

export default Testimonial;
