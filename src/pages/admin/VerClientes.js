import React, { useState, useEffect } from "react";
import MaterialTable, { MTableCell } from "material-table";
import adminService from "../../services/admin.service";
import { Paper } from "@material-ui/core";
import clientsService from "../../services/clients.service";
import ClientInfoModal from "../../components/Modals/ShowClientInfoModal";

function RefreshData(setModalShow, setClientInfo) {
  const tableRef = React.createRef();
  return (
    <MaterialTable
      components={{
        Container: (props) => <Paper {...props} elevation={0} />,
        Cell: (props) => <MTableCell {...props} align="center" />,
      }}
      title="Clientes registrados"
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
          title: "Cedula / Rif",
          render: (rowData) => (
            <p>{rowData.identification + "-" + rowData.dni}</p>
          ),
        },
        { title: "Correo", field: "email" },
        { title: "Teléfono", field: "phone" },
        {
          title: "Empresa",
          render: (rowData) => <p>{rowData.isEnterprise ? "Sí" : "No"}</p>,
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
        },
      }}
      data={(query) =>
        new Promise(async (resolve, reject) => {
          const result = await clientsService.getClients({
            page: query.page,
            size: query.pageSize,
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
            setClientInfo(rowData);
            setModalShow(true);
            // Do save operation
          },
        },
      ]}
    />
  );
}

const VerClientes = () => {
  const [data, setData] = useState(null);
  const [modalShow, setModalShow] = useState(false);
  const [clientInfo, setClientInfo] = useState();

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
                Tabla de clientes
              </h6>
            </div>
            <div className="card-body">
              {RefreshData(setModalShow, setClientInfo)}
            </div>
            <ClientInfoModal
              clientInfo={clientInfo}
              show={modalShow}
              onHide={() => setModalShow(false)}
            ></ClientInfoModal>
          </div>
        </div>
      </div>
    </>
  );
};

export default VerClientes;
