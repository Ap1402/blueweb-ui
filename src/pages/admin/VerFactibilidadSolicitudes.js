import React, { useState } from "react";
import SeeContactMessageInfo from "../../components/Modals/FactibilityRequestModal";
import MaterialTable from "material-table";
import factibilityService from "../../services/factibility.service";
import { Modal } from "react-bootstrap";

function RefreshData(setModalShow, setModalData, setUpdateModal) {
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
        {
          title: "Revisado",
          field: "wasEvaluated",
          render: (rowData) => <p>{rowData.wasEvaluated ? "Sí" : "No"}</p>,
        },
        {
          title: "Factible",
          field: "isFactible",
          render: (rowData) => <p>{rowData.isFactible ? "Sí" : "No"}</p>,
        },
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
          const result = await factibilityService.getFactibilityRequests({
            page: query.page,
            size: query.pageSize,
            wasEvaluated: 0,
          });
          console.log(result);
          resolve({
            page: parseInt(result.data.currentPage),
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
            setModalData(rowData);
            setModalShow(true);
          },
        },

        {
          icon: "edit",
          tooltip: "Editar solicitud",
          onClick: (event, rowData) => {
            setModalData(rowData);
            setUpdateModal(true);
          },
        },
      ]}
    />
  );
}

function FactibilityRequestUpdate(props) {
  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter centered">
          Información
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {props.data ? (
          <ul>
            <li>
              <strong>Nombre:</strong> {props.data.requesterName}
            </li>
            <li>
              <strong>Email del solicitante:</strong>{" "}
              {props.data.requesterEmail}
            </li>
            <li>
              <strong>Teléfono:</strong> {props.data.requesterPhone}
            </li>
            <li>
              <strong>Coordenadas:</strong> {props.data.coordenades}
            </li>
            <li>
              <strong>Marcado como factible:</strong>{" "}
              {props.data.isFactible
                ? props.data.isFactible
                  ? "Sì"
                  : "No"
                : "No ha sido evaluado"}
            </li>
          </ul>
        ) : (
          <p>Cargando..</p>
        )}
      </Modal.Body>
    </Modal>
  );
}

const VerFactibilidadSolicitudes = () => {
  const [modalShow, setModalShow] = useState(false);
  const [modalData, setModalData] = useState();
  const [updateModal, setUpdateModal] = useState();

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
                Tabla de solicitudes de factibilidad
              </h6>
            </div>
            <div className="card-body">
              {RefreshData(setModalShow, setModalData, setUpdateModal)}
              <FactibilityRequestUpdate
                data={modalData}
                show={updateModal}
                onHide={() => setUpdateModal(false)}
              ></FactibilityRequestUpdate>
              <SeeContactMessageInfo
                data={modalData}
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

export default VerFactibilidadSolicitudes;
