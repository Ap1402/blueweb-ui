import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { ReportsTable } from "../../components/Tables/ReportsTable";
import { PayoutReportsTable } from "../../components/Tables/PayoutReportsTable";

const StyledContainer = styled.div`
  width: 100%;
  .content {
    display: grid;
    grid-template-columns: 100%;
    width: 100%;
    @media (min-width: 800px) {
      grid-template-columns: 47% 47%;
      column-gap: 30px;
    }
    .passwordChange {
      h4 {
        font-size: 20px;
      }
    }
  }
  .info {
    p {
      font-size: 15px;
      span {
        font-weight: 500;
      }
    }
  }
  .seccion-header {
    text-align: center;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.blue};
    font-size: 28px;
    text-transform: uppercase;
  }
`;

const VerReportesPago = () => {
  return (
    <>
      <div className="card">
        <div className="card-body">
          <StyledContainer>
            <h1 className="seccion-header">Mis reportes</h1>

            <PayoutReportsTable isForClient={true}></PayoutReportsTable>
          </StyledContainer>
        </div>
      </div>
    </>
  );
};

export default VerReportesPago;
