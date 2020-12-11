import { Paper } from "@material-ui/core";
import reportService from "../../services/report.service";
import React, { useEffect, useState } from "react";
import MaterialTable, { MTableCell } from "material-table";
import dayjs from "dayjs";

export const ReportsTable = React.forwardRef(
  (
    { setReportId, setModalShow, setUpdateReportModalShow, isForClient },
    tableRef
  ) => {
    useEffect(() => {
      if (!isForClient) {
        var tempColumns = [...columns];
        tempColumns = tempColumns.concat([
          {
            title: "Cliente",
            filtering: false,
            field: "status.name",
            render: (rowData) =>
              rowData.client
                ? rowData.client.identification + " - " + rowData.client.dni
                : "",
            sorting: false,
          },
          {
            title: "Nivel de prioridad",
            field: "priorityLevel",
          },
        ]);

        setColumns(tempColumns);
      }
    }, []);

    const [columns, setColumns] = useState([
      {
        title: "Código",
        field: "id",
      },
      {
        title: "Razón",
        field: "categoryId",
        render: (rowData) => (rowData.category ? rowData.category.name : ""),
      },

      {
        title: "Estado",
        filtering: false,
        field: "statusId",
        render: (rowData) => (rowData.status ? rowData.status.name : ""),
      },
      {
        title: "Fecha de reporte",
        field: "createdAt",
        render: (rowData) => dayjs(rowData.createdAt).format("DD/MM/YYYY"),
      },
    ]);

    return (
      <MaterialTable
        components={{
          Container: (props) => <Paper {...props} elevation={0} />,
          Cell: (props) => <MTableCell {...props} align="center" />,
        }}
        title="Reportes"
        tableRef={tableRef}
        localization={{
          pagination: {
            labelDisplayedRows: "{from}-{to} de {count} páginas",
          },
          toolbar: {
            nRowsSelected: "{0} filas(s) seleccionadas",
            searchTooltip: "Buscar",
            searchPlaceholder: "Cédula o rif del cliente",
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
        columns={columns}
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
          search: isForClient ? false : true,
          actionsColumnIndex: -1,
        }}
        data={(query) =>
          new Promise(async (resolve, reject) => {
            const result = await reportService.getReports(
              {
                page: query.page,
                size: query.pageSize,
                clientDni: query.search,
                orderBy: query.orderBy ? query.orderBy.field : "",
                order: query.orderDirection ? query.orderDirection : "",
              },
              isForClient
            );
            resolve({
              page: parseInt(result.currentPage),
              data: result.data,
              totalCount: result.totalItems,
            });
          })
        }
        actions={
          isForClient
            ? [
                {
                  icon: "refresh",
                  tooltip: "Refrescar datos",
                  isFreeAction: true,
                  onClick: () =>
                    tableRef.current && tableRef.current.onQueryChange(),
                },
              ]
            : [
                {
                  icon: "visibility",
                  tooltip: "Ver información",
                  onClick: (event, rowData) => {
                    event.preventDefault();
                    setReportId(rowData);
                    setModalShow(true);
                  },
                },
                {
                  icon: "edit",
                  tooltip: "Actualizar reporte",
                  onClick: (event, rowData) => {
                    event.preventDefault();
                    setReportId(rowData);
                    setUpdateReportModalShow(true);
                  },
                },
                {
                  icon: "refresh",
                  tooltip: "Refrescar datos",
                  isFreeAction: true,
                  onClick: () =>
                    tableRef.current && tableRef.current.onQueryChange(),
                },
              ]
        }
      />
    );
  }
);
