import MaterialTable, { MTableCell } from "material-table";
import { Paper } from "@material-ui/core";
import clientsService from "../../services/clients.service";
import React, { useState } from "react";

export const ClientsTable = React.forwardRef(
  ({ setModalShow, setClientInfo }, ref) => {
    return (
      <MaterialTable
        components={{
          Container: (props) => <Paper {...props} elevation={0} />,
          Cell: (props) => <MTableCell {...props} align="center" />,
        }}
        title="Clientes registrados"
        tableRef={ref}
        localization={{
          pagination: {
            labelDisplayedRows: "{from}-{to} de {count} páginas",
          },
          toolbar: {
            nRowsSelected: "{0} filas(s) seleccionadas",
            searchPlaceholder: "Cédula o rif",
            searchTooltip: "Buscar",
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
              dni: query.search,
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
            onClick: () => ref.current && ref.current.onQueryChange(),
          },
          {
            icon: "visibility",
            tooltip: "Ver información",
            onClick: (event, rowData) => {
              setClientInfo(rowData);
              setModalShow(true);
            },
          },
        ]}
      />
    );
  }
);
