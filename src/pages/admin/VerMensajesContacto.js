import React, { useState, useEffect } from "react";
import axios from "axios";
import SeeContactMessageInfo from "../../components/Modals/SeeContactMessageInfo";
import MaterialTable from "material-table";
import styled from "styled-components";
import adminService from "../../services/admin.service";
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

const VerMensajesContacto = () => {
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
  function RefreshData({}) {
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
            backgroundColor: "#01579b",
            color: "white",
            fontWeight: 400,
            padding: "20px",
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
              setShowData({
                id: rowData.id,
                name: rowData.name,
                reason: rowData.reason,
                message: rowData.message,
                phone: rowData.phone,
                email: rowData.email,
                wasAnswered: rowData.wasAnswered,
              });
              setModalShow(true);
              // Do save operation
            },
          },
        ]}
      />
    );
  }
  const handleClick = async (e, id) => {
    const result = await axios
      .put("http://localhost:4000/api/clients/ContactMessage/setAnswered/" + id)
      .catch((err) => {
        console.log(err);
      });
    setShowData({ ...showData, wasAnswered: result.data.wasAnswered });
  };

  /*   useEffect(() => {
    const getData = async () => {
      try {
        const result = await axios
          .get("http://localhost:4000/api/clients/ContactMessage")
          .catch((err) => {
            console.log(err);
          });
        setData(result.data);
        return;
      } catch (err) {}
    };
    getData();
  }, []); */

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
                  Mensajes por atender
                </h6>
              </div>
              <div className="card-body">
                <RefreshData></RefreshData>

                <SeeContactMessageInfo
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                >
                  <StyledModalContent>
                    <div className="block-info">
                      <h4>Nombre:</h4>
                      <p>{showData.name}</p>
                    </div>
                    <h4>Correo:</h4>
                    <p>{showData.email}</p>
                    <h4>Teléfono:</h4>
                    <p>{showData.phone}</p>
                    <h4>Mensaje:</h4>
                    <p>{showData.message}</p>
                    <button
                      className="btn btn-primary btn-block"
                      onClick={(e) => handleClick(e, showData.id)}
                    >
                      {showData.wasAnswered
                        ? "Respondido"
                        : "Marcar como respondido"}
                    </button>
                  </StyledModalContent>
                </SeeContactMessageInfo>
              </div>
            </div>
          </div>
        </div>
    </>
  );
};

export default VerMensajesContacto;
