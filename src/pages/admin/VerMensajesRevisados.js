import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from "../../components/Table/Table";
import { Link } from "react-router-dom";
import SeeContactMessageInfo from "../../components/Modals/SeeContactMessageInfo";
import MaterialTable from "material-table";
import Axios from "axios";


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
        title="Tabla de Mensajes"
        tableRef={tableRef}
        localization={{
          pagination: {
              labelDisplayedRows: '{from}-{to} De {count}'
          },
          toolbar: {
              nRowsSelected: '{0} filas(s) seleccionadas',

          },
          header: {
              actions: 'Acciones'
          },
          body: {
              emptyDataSourceMessage: 'No hay registros para mostrar',
              filterRow: {
                  filterTooltip: 'Filtro'
              }
          }
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
          }
        ]}
  
        options={{
          headerStyle: {
            backgroundColor: "#01579b",
            color: "#FFF",
          },
        }}
  
  
        data={(query) =>
          new Promise((resolve, reject) => {
            let url = "http://localhost:4000/api/clients/ContactMessage";
            Axios.get(url).then((result) => {

              resolve({
                data: result.data.data,
              });
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
            icon: 'visibility',
            tooltip: 'Ver información',
            onClick: (event, rowData) => {
              setShowData({
                id: rowData.id,
                name: rowData.name,
                reason: rowData.reason,
                message: rowData.message,
                phone: rowData.phone,
                email: rowData.email,
                wasAnswered: rowData.wasAnswered,
              })
              setModalShow(true);
              // Do save operation
            }
          }
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
                  Tabla de mensajes por atender
                </h6>
              </div>
              <div className="card-body">
                <RefreshData></RefreshData>

                <SeeContactMessageInfo
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                >
                  <h2>Nombre:</h2>
                  <h3>{showData.name}</h3>
                  <h4>Correo:</h4>
                  <h5>{showData.email}</h5>
                  <h4>Teléfono:</h4>
                  <h5>{showData.phone}</h5>
                  <h4>Mensaje:</h4>
                  <p>{showData.message}</p>
                  <button
                    className="btn btn-primary"
                    onClick={(e) => handleClick(e, showData.id)}
                  >
                    {showData.wasAnswered
                      ? "Respondido"
                      : "Marcar como respondido"}
                  </button>
                </SeeContactMessageInfo>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerMensajesContacto;
