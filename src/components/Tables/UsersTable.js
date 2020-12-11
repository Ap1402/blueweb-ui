import MaterialTable, { MTableCell } from "material-table";
import { Paper } from "@material-ui/core";
import clientsService from "../../services/clients.service";
import React, { useState } from "react";
import userService from "../../services/user.service";
import dayjs from "dayjs";

export const UsersTable = React.forwardRef(
  ({ setShowData, setModalShow }, ref) => {
    return (
      <MaterialTable
        components={{
          Container: (props) => <Paper {...props} elevation={0} />,
          Cell: (props) => <MTableCell {...props} align="center" />,
        }}
        title="Usuarios registrados"
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
            title: "Usuario",
            field: "username",
          },
          {
            title: "Cédula del cliente",
            field: "client.dni",
            render: (rowData) =>
              rowData.client.identification + " - " + rowData.client.dni,
          },

          {
            title: "Fecha de registro",
            field: "createdAt",
            render: (rowData) => dayjs(rowData.createdAt).format("DD/MM/YYYY"),
          },

          /*     {
          title: "Empresa",
          render: (rowData) => <p>{rowData.isEnterprise ? "Sí" : "No"}</p>,
        }, */
          /*         { title: "Correo", field: "email" },
           */
          /*         { title: "Teléfono", field: "phone" },
           */
        ]}
        options={{
          headerStyle: {
            backgroundColor: "#01579b",
            color: "#FFF",
            padding: "20px",
          },
          rowStyle: {
            backgroundColor: "#EEE",
          },
        }}
        data={(query) =>
          new Promise(async (resolve, reject) => {
            const result = await userService.getAllUsers({
              page: query.page,
              size: query.pageSize,
            });
            resolve({
              page: parseInt(result.currentPage),
              data: result.data,
              totalCount: result.totalItems,
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
              setShowData(rowData);
              setModalShow(true);
            },
          },
        ]}
      />
    );
  }
);
