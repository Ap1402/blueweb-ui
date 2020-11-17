import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from "../../components/Table/Table";
import SeeContactMessageInfo from "../../components/Modals/SeeContactMessageInfo";
import { Link } from "react-router-dom";
import Axios from "axios";
import MaterialTable from "material-table";
import adminService from "../../services/admin.service";

const VerFactibilidadSolicitudes = () => {
  const [modalShow, setModalShow] = useState(false);

  const [showData, setShowData] = useState({
    id: null,
    name: null,
    reason: null,
    message: null,
    phone: null,
    email: null,
    wasAnswered: null,
  });

  function RefreshData() {
    const tableRef = React.createRef();
    return (
      <MaterialTable
        title="Solicitudes de factibilidad"
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
            title: "Coordenadas",
            field: "coordenades",
          },
          { title: "Solicitante", field: "requesterName" },
          { title: "Correo", field: "requesterEmail" },
          { title: "Teléfono", field: "requesterPhone" },
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
          },
        }}
        data={(query) =>
          new Promise(async (resolve, reject) => {
            const result = await adminService.getFactibilityRequests({
              page: query.page,
              size: query.pageSize,
              wasEvaluated: 0,
            });
            resolve({
              page: result.data.currentPage,
              data: result.data.data,
              totalCount: result.data.totalItems,
            });
          })
        }
        actions={[
          {
            icon: "refresh",
            tooltip: "Refrescar datos",
            isFreeAction: true,
            onClick: () => tableRef.current && tableRef.current.onQueryChange(),
          },

          {
            icon: "visibility",
            tooltip: "Ver información",
            onClick: (event, rowData) => {
              /* setShowData({
                id: rowData.id,
                name: rowData.name,
                reason: rowData.reason,
                message: rowData.message,
                phone: rowData.phone,
                email: rowData.email,
                wasAnswered: rowData.wasAnswered,
              }); */
              setModalShow(true);
              // Do save operation
            },
          },
        ]}
      />
    );
  }

  return (
    <div>
      <div className="container-fluid">
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800">Panel de control</h1>
        </div>

        <div className="row">
          <div className="col-lg-10 mb-4 col-12">
            <div className="card shadow mb-4">
              <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">
                  Tabla de solicitudes de factibilidad
                </h6>
              </div>
              <div className="card-body">
                <RefreshData></RefreshData>

                <SeeContactMessageInfo
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerFactibilidadSolicitudes;
