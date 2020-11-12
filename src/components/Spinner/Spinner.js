import { CircularProgress } from "@material-ui/core";
import React from "react";
import styled from "styled-components";

const SpinnerDiv = styled.div`
  position: absolute;
  height: 100px;
  width: 100px;
  top: 50%;
  left: 50%;
  margin-left: -50px;
  margin-top: -50px;
`;

const Spinner = () => {
  return (
    <SpinnerDiv>
      <CircularProgress />
    </SpinnerDiv>
  );
};

export default Spinner;
