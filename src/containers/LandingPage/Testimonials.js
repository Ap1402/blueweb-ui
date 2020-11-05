import styled from "styled-components";
import AlternativeCarousel from "../../components/AlternativeCarousel/AlternativeCarousel";
import Slide from "react-reveal";
import Testimonial from "../../components/IconsWithDescription/Testimonial";

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-top: 30px;
  padding-bottom: 30px;
  position: relative;
  color: white;
  background-color: ${({ theme }) => theme.colors.blue};
  h1 {
    font-size: 30px;
    font-weight: 600;
    position: relative;
  }
  h1:before {
    content: "";
    position: absolute;
    display: inline-block;
    background: white;
    bottom: -11px;
    width: 150px;
    height: 4px;
    left: 50%;
    right: auto;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
  }
  .icon-left {
    font-size: 30px;
    position: absolute;
    color: #b1b8ba;
    left: 10%;
    bottom: 50%;
  }
  .icon-right {
    color: #b1b8ba;

    position: absolute;
    font-size: 30px;
    bottom: 50%;
    right: 10%;
  }
  .carousel {
    width: 100%;
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

const Testimonials = () => {
  return (
    <StyledWrapper>
      <h1>Nuestros clientes</h1>

      <i className="fas fa-quote-left icon-left"></i>
      <i className="fas fa-quote-right icon-right"></i>
      <div className="carousel">
        <AlternativeCarousel>
          <Slide right>
            <Testimonial></Testimonial>
          </Slide>
          <Slide right>
            <Testimonial></Testimonial>
          </Slide>
          <Slide right>
            <Testimonial></Testimonial>
          </Slide>
        </AlternativeCarousel>
      </div>
    </StyledWrapper>
  );
};

export default Testimonials;
