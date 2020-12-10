import React, { useState, useEffect } from "react";
import axios from "axios";
import SeeContactMessageInfo from "../../components/Modals/SeeContactMessageInfo";
import MaterialTable from "material-table";
import styled from "styled-components";
import messagesService from "../../services/messages.service";

const StyledModalContent = styled.div`
  color: black;
  h4 {
    font-size: 20px;
  }
  p {
    font-size: 15px;
    margin-left: 30px;
  }
  button {
    text-align: center;
  }
`;

function RefreshData(setShowData, setModalShow, handleClick) {
  const tableRef = React.createRef();

  return (
    <MaterialTable
      title="Tabla de Mensajes por atender"
      tableRef={tableRef}
      localization={{
        pagination: {
          labelDisplayedRows: "{from}-{to} de {count} páginas",
        },
        toolbar: {
          nRowsSelected: "{0} filas(s) seleccionadas",
        },

        pagination: {
          labelRowsSelect: "filas",
        },
        header: {
          actions: "Acciones",
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
          title: "Nombre",
          field: "name",
        },
        { title: "Teléfono", field: "phone" },
        { title: "Correo", field: "email" },
        { title: "Razón", field: "reason" },
        {
          title: "Revisado",
          field: "wasAnswered",
          render: (rowData) => <p>{rowData.wasAnswered ? "Sí" : "No"}</p>,
        },
      ]}
      options={{
        headerStyle: {
          backgroundColor: "#3f425e",
          color: "white",
          fontWeight: 600,
          padding: "20px",
          textAlign: 'center'
        },
      }}
      data={(query) =>
        new Promise(async (resolve, reject) => {
          const result = await messagesService.getMessages({
            page: query.page,
            size: query.pageSize,
            wasAnswered: 0,
          });
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
            setShowData(rowData);
            setModalShow(true);
          },
        },
      ]}
    />
  );
}

const VerMensajesContacto = () => {
  const [modalShow, setModalShow] = useState(false);

  const [showData, setShowData] = useState();

  const handleClick = async (e, id) => {
    const result = await axios
      .put("http://localhost:4000/api/clients/ContactMessage/setAnswered/" + id)
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Panel de control</h1>
      </div>

      <div className="row">
        <div className="col-lg-12 mb-4 col-12">
          <div className="card shadow mb-4">
            <div className="card-header py-3">
              <h6 className="m-0 font-weight-bold text-primary">
                Mensajes por atender
              </h6>
            </div>
            <div className="card-body">
              {RefreshData(setShowData, setModalShow)}
              <SeeContactMessageInfo
                data={showData}
                show={modalShow}
                onHide={() => setModalShow(false)}
              ></SeeContactMessageInfo>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VerMensajesContacto;
