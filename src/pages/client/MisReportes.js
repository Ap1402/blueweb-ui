import React from "react";
import styled from "styled-components";
import ReportModal from "../../components/Modals/ReportModal";
import { useState } from "react";
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

const MisReportes = () => {
  const [modalShow, setModalShow] = useState(false);
  const [reportId, setReportId] = useState();
  return (
    <>
      <div className="card">
        <div className="card-body">
          <StyledContainer>
            <h1 className="seccion-header">Mis reportes</h1>

            {ReportsTable(setReportId, setModalShow, null, true)}
          </StyledContainer>
          <ReportModal
            reportId={reportId}
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
        </div>
      </div>
    </>
  );
};

export default MisReportes;
