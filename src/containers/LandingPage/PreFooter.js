import styled from "styled-components";

const SectionWrapper = styled.section`
  position: relative;
  background: rgb(55, 98, 176);
  background: linear-gradient(
    0deg,
    rgba(55, 98, 176, 1) 12%,
    rgba(50, 102, 195, 1) 26%,
    rgba(46, 105, 210, 1) 55%,
    rgba(39, 110, 241, 1) 94%
  );
  min-height: 400px;

  .custom-shape-divider-top-1603891602 {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
  }

  .custom-shape-divider-top-1603891602 svg {
    position: relative;
    display: block;
    width: calc(188% + 1.3px);
    height: 115px;
    transform: rotateY(180deg);
  }

  .custom-shape-divider-top-1603891602 .shape-fill {
    fill:${(props)=>props.fillColor?props.fillColor:"#ffffff"}
  }
`;

const PreFooter = ({ children, fillColor }) => {
  return (
    <SectionWrapper fillColor={fillColor}>
      <div className="custom-shape-divider-top-1603891602">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
      {children}
    </SectionWrapper>
  );
};

export default PreFooter;
