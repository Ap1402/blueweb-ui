import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MaterialTable, { MTableCell } from "material-table";
import reportService from "../../services/report.service";
import { Paper } from "@material-ui/core";
import dayjs from "dayjs";
import ReportModal from "../../components/Modals/ReportModal";
const VerReportesPendientes = () => {
  const [modalShow, setModalShow] = useState(false);
  const [reportId, setReportId] = useState();

  function RefreshData() {
    const tableRef = React.createRef();
    return (
      <MaterialTable
        components={{
          Container: (props) => <Paper {...props} elevation={0} />,
          Cell: (props) => <MTableCell {...props} align="center" />,
        }}
        title="Reportes Pendientes"
        tableRef={tableRef}
        localization={{
          pagination: {
            labelDisplayedRows: "{from}-{to} de {count} páginas",
          },
          toolbar: {
            nRowsSelected: "{0} filas(s) seleccionadas",
          },
          header: {
            actions: "Acciones",
          },
          pagination: {
            labelRowsSelect: "filas",
          },
          body: {
            emptyDataSourceMessage: "No hay registros para mostrar",
            filterRow: {
              filterTooltip: "Filtro",
            },
          },
        }}
        columns={[
          {
            title: "Código",
            field: "id",
          },
          {
            title: "Razón",
            render: (rowData) => rowData.reportCategory.name,
          },

          {
            title: "Estado",
            render: (rowData) => rowData.reportStatus.name,
          },
          {
            title: "Fecha de reporte",
            render: (rowData) => dayjs(rowData.createdAt).format("DD/MM/YYYY"),
          },
          {
            title: "Nivel de prioridad",
            field: "priorityLevel",
          },
          /*  {
            title: "Revisado",
            field: "wasAnswered",
            render: (rowData) => <p>{rowData.wasAnswered ? "Sí" : "No"}</p>,
          }, */
        ]}
        options={{
          headerStyle: {
            backgroundColor: "#01579b",
            color: "#FFF",
            padding: "20px",
            textAlign: "center",
          },
          rowStyle: {
            backgroundColor: "#EEE",
            textAlign: "center",
          },
          cellStyle: {
            textAlign: "center",
          },
          search: false,

          actionsColumnIndex: -1,
        }}
        data={(query) =>
          new Promise(async (resolve, reject) => {
            const result = await reportService.getReports({
              page: query.page,
              size: query.pageSize,
              status: 1,
            });
            resolve({
              page: result.currentPage,
              data: result.data,
              totalCount: result.totalItems,
            });
          })
        }
        actions={[
          {
            icon: "visibility",
            tooltip: "Ver información",
            onClick: (event, rowData) => {
                setReportId(rowData.id)
              setModalShow(true);
              // Do save operation
            },
          },
        ]}
      />
    );
  }

  return (
    <>
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Panel de control</h1>
      </div>

      <div className="row">
        <div className="col-lg-10 mb-4 col-12">
          <div className="card shadow mb-4">
            <div className="card-header py-3">
              <h6 className="m-0 font-weight-bold text-primary">
                Reportes pendientes
              </h6>
            </div>
            <div className="card-body">
              <RefreshData></RefreshData>
              <ReportModal
              reportId={reportId}
                show={modalShow}
                onHide={() => setModalShow(false)}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VerReportesPendientes;
