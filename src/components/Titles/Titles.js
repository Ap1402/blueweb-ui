import React from "react";
import styled from "styled-components";

const StyledTitle = styled.h1`
  font-size: ${(props) => (props.fontSize ? props.fontSize + "px" : "35px")};
  &::before,
  &::after {
    content: "";
    width: 50px;
    height: 2px;
    background: #3498db;
    display: inline-block;
  }
  &::after {
    margin: 0 0 10px 15px;
  }
  &::before {
    margin: 0 15px 10px 0;
  }
`;

const Titles = ({ children, fontSize }) => {
  return (
    <StyledTitle
      className="section-title wow fadeInDown"
      data-wow-delay="0.3s"
      fontSize={fontSize}
    >
      {children}
    </StyledTitle>
  );
};

export default Titles;
