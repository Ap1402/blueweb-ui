import React, { useEffect, useState } from "react";
import MaterialTable, { MTableCell } from "material-table";
import { Paper } from "@material-ui/core";
import reportService from "../../services/report.service";
import dayjs from "dayjs";

export const RefreshData = (
  setReportId,
  setModalShow,
  setUpdateReportModalShow,
  isForClient
) => {
  const tableRef = React.createRef();

  const [columns, setColumns] = useState([
    {
      title: "Código",
      field: "id",
    },
    {
      title: "Razón",
      render: (rowData) => (rowData.category ? rowData.category.name : ""),
    },

    {
      title: "Estado",
      render: (rowData) => (rowData.status ? rowData.status.name : ""),
    },
    {
      title: "Fecha de reporte",
      render: (rowData) => dayjs(rowData.createdAt).format("DD/MM/YYYY"),
    },
  ]);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!isForClient) {
      var tempColumns = [...columns];
      tempColumns = tempColumns.concat([
        {
          title: "Nivel de prioridad",
          field: "priorityLevel",
        },
      ]);

      setColumns(tempColumns);
      setLoading(true);
    } else {
      setLoading(true);
    }
  }, []);

  if (loading) {
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
          search: false,

          actionsColumnIndex: -1,
        }}
        data={(query) =>
          new Promise(async (resolve, reject) => {
            const result = await reportService.getReports(
              {
                page: query.page,
                size: query.pageSize,
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
  } else {
    return <p>Cargando...</p>;
  }
};
