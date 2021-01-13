import React from "react";
import styled from "styled-components";
import CreatePayoutReport from "../../components/Forms/Client/CreatePayoutReport";
import { ReportsTable } from "../../components/Tables/ReportsTable";

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

const CrearReportePago = () => {
  return (
    <>
      <div className="card">
        <div className="card-body">
          <StyledContainer>
            <h1 className="seccion-header">Crear Reporte de Pago</h1>
            <CreatePayoutReport></CreatePayoutReport>
          </StyledContainer>
        </div>
      </div>
    </>
  );
};

export default CrearReportePago;
