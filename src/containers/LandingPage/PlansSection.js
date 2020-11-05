import styled from "styled-components";
import Slide from "react-reveal/Slide";

const StyledPlansSection = styled.section`
  width: 100%;
  padding: 3rem;
  text-align: center;
  margin-top:5rem;
  .section-title {
    font-size: 30px;
  }
`;

const StyledPlanTable = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  @media (min-width: 760px) {
    flex-direction: row;
  }
`;
const StyledButton = styled.button`
  @-webkit-keyframes hvr-pulse {
    25% {
      -webkit-transform: scale(1.1);
      transform: scale(1.1);
    }
    75% {
      -webkit-transform: scale(0.9);
      transform: scale(0.9);
    }
  }
  @keyframes hvr-pulse {
    25% {
      -webkit-transform: scale(1.1);
      transform: scale(1.1);
    }
    75% {
      -webkit-transform: scale(0.9);
      transform: scale(0.9);
    }
  }
  & {
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  }
  &:hover,
  &:focus,
  &:active {
    -webkit-animation-name: hvr-pulse;
    animation-name: hvr-pulse;
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-timing-function: linear;
    animation-timing-function: linear;
    -webkit-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
  }
`;
const StyledPlan = styled.div`
  width: 100%;
  @media (min-width: 720px) {
    ${(props) => {
      if (props.isCenter) {
        return `
    background-color: #D7DBDB;
    margin-top:-100px;
    padding-bottom:3rem;
    height:100%;
    -webkit-box-shadow: 5px 5px 22px -8px rgba(0,0,0,0.63);
    -moz-box-shadow: 5px 5px 22px -8px rgba(0,0,0,0.63);
    box-shadow: 5px 5px 22px -8px rgba(0,0,0,0.63);
    border-radius: 10px;
  `;
      }
    }};
  }
  font-family: "Roboto", sans-serif;
  padding-top: 1.5rem;
  padding-bottom: 0.5rem;
  h1 {
    position: relative;
  }
  h1:before {
    content: "";
    position: absolute;
    display: inline-block;
    background: #1db8ea;
    bottom: -11px;
    width: 50px;
    height: 4px;
    left: 50%;
    right: auto;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
  }

  text-align: center;
  .pricing-table__item,
  .pricing-table__title {
    position: relative;
    font-size: 190px;
    font-family: "Montserrat", sans-serif;
    letter-spacing: -0.07em;
    color: #1db8ea;
    line-height: 1;
  }

  .pricing-table__item,
  .pricing-table__title:before {
    content: "Mbps";
    position: absolute;
    left: 50%;
    bottom: 4px;
    width: 60px;
    height: 60px;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    font-family: "Roboto", sans-serif;
    font-size: 20px;
    font-weight: 300;
    line-height: 60px;
    background: #fff;
    color: #a4a6a6;
    letter-spacing: -0.04em;
    border-radius: 50%;
    text-align: center;
  }

  .pricing-table__price:before {
    content: "$";
  }

  .pricing-table__price {
    color: #6e7273;
    font-size: 42px;
    font-weight: 300;
    line-height: 1;
  }

  .see-more {
    padding: 1rem;
    background-color: #276ef1;
    border-radius: 20px;
    border: none;
    font-style: bold;
    color: white;
    font-weight: 300;
    transition: all ease 0.4s;
    font-size: 15px;
    margin-top: 10px;
    &:hover {
      border: solid 2px #276ef1;
      background-color: white;
      color: #276ef1;
    }
  }
`;

const PlansSection = () => {
  const plans = [
    {
      planName: "Básico",
      planPricing: "10",
      planSpeed: "10",
    },
    {
      planName: "Hogareño",
      planPricing: "15",
      planSpeed: "20",
    },
    {
      planName: "Empresarial",
      planPricing: "100",
      planSpeed: "60",
    },
  ];
  return (
    <StyledPlansSection id="plans">
      <Slide left cascade>
        <StyledPlanTable>
          {plans.map((plan, index) => {
            if (index === 1) {
              return (
                <StyledPlan isCenter key={index}>
                  <div className="pricing-table__title">{plan.planSpeed}</div>
                  <h1 className="pricing-table__plan-name">{plan.planName}</h1>
                  <div className="pricing-table__price">{plan.planPricing}</div>
                  <p>
                    "Lorem ipsum dolor sit amet, consectetur <br /> adipiscing
                    elit sed do eiusmod tempor incididunt"
                  </p>
                  <StyledButton className="see-more">Ver más...</StyledButton>
                </StyledPlan>
              );
            }
            return (
              <StyledPlan key={index}>
                <div className="pricing-table__title">{plan.planSpeed}</div>
                <h1 className="pricing-table__plan-name">{plan.planName}</h1>
                <div className="pricing-table__price">{plan.planPricing}</div>
                <p>
                  "Lorem ipsum dolor sit amet, consectetur <br /> adipiscing
                  elit sed do eiusmod tempor incididunt"
                </p>
                <StyledButton className="see-more">Ver más...</StyledButton>
              </StyledPlan>
            );
          })}
        </StyledPlanTable>
      </Slide>
    </StyledPlansSection>
  );
};

export default PlansSection;
