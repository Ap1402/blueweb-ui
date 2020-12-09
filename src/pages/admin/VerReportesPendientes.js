import React, { useState } from "react";
import reportService from "../../services/report.service";
import ReportModal from "../../components/Modals/ReportModal";
import UpdateReportModal from "../../components/Modals/UpdateReportModal";
import { RefreshData } from "../../components/Tables/ReportsTable";
import ReportsShow from "../../components/ReportsShow/ReportsShow";
import { Table } from "../../components/Tables/ReportTable";

const VerReportesPendientes = () => {
  const [modalShow, setModalShow] = useState(false);
  const [updateReportModalShow, setUpdateReportModalShow] = useState(false);

  const [reportId, setReportId] = useState();

  return (
    <>
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Panel de control</h1>
      </div>

      <div className="row">
        <div className="col-lg-6 mb-2 mx-auto col-12">
          {/*  <ReportsShow
            showInfo={modalShow}
            setShowInfo={setModalShow}
            info={reportId}
          ></ReportsShow> */}
        </div>
        <div className="col-lg-12 mb-4 col-12">
          <div className="card shadow mb-4">
            <div className="card-header py-3">
              <h6 className="m-0 font-weight-bold text-primary">
                Reportes pendientes
              </h6>
            </div>
            <div className="card-body">
              <Table></Table>
              {/* {RefreshData(
                setReportId,
                setModalShow,
                setUpdateReportModalShow,
                false
              )} */}
              {/*  <ReportModal
                reportId={reportId}
                show={modalShow}
                onHide={() => setModalShow(false)}
              />
              <UpdateReportModal
                reportId={reportId}
                show={updateReportModalShow}
                onHide={() => setUpdateReportModalShow(false)}
              /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VerReportesPendientes;
