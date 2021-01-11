import { Paper } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import MaterialTable, { MTableCell } from "material-table";
import dayjs from "dayjs";
import styled from "styled-components";
import { Button } from "react-bootstrap";
import payoutReportsService from "../../services/payoutReports.service";

const StyledButton = styled(Button)`
  ${(props) =>
    props.isactive
      ? `
      background-color: ${props.theme.colors.darkerBlue} !important;
      border-color: ${props.theme.colors.darkerBlue} !important;
      `
      : `
      background-color: ${props.theme.colors.lightBlue} !important;
      border-color: ${props.theme.colors.lightBlue} !important;
      `}
  margin: 0 10px 10px 10px;
`;

export const PayoutReportsTable = React.forwardRef(
  (
    { setModalShow, setUpdateReportModalShow, isForClient, setShowData },
    tableRef
  ) => {
    const [isApproved, setIsApproved] = useState(0);
    const onClickHandler = () => {
      setIsApproved(isApproved ? 0 : 1);
    };
    useEffect(() => {
      if (tableRef) {
        tableRef.current.onQueryChange({
          filters: { isApproved: isApproved },
        });
      }
    }, [isApproved]);

    useEffect(() => {
      if (!isForClient) {
        var tempColumns = [...columns];
        tempColumns = tempColumns.concat([
          {
            title: "Cliente",
            filtering: false,
            field: "client.dni",
            render: (rowData) => (rowData.client ? rowData.client.dni : ""),
            sorting: false,
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
        title: "Aprobado",
        field: "isApproved",
        render: (rowData) => (rowData.isApproved ? "Aprobado" : "Por aprobar"),
      },
      {
        title: "Fecha de registro",
        field: "createdAt",
        render: (rowData) => dayjs(rowData.createdAt).format("DD/MM/YYYY"),
      },
      {
        title: "Fecha de aprobación",
        field: "approvedAt",
        render: (rowData) =>
          rowData.isApproved
            ? dayjs(rowData.approvedAt).format("DD/MM/YYYY")
            : "",
      },
      {
        title: "Banco destino",
        filtering: false,
        field: "bankDestiny.bankName",
        render: (rowData) =>
          rowData.bankDestiny ? rowData.bankDestiny.bankName : "",
        sorting: false,
      },
    ]);

    return (
      <>
        <StyledButton onClick={() => onClickHandler()} isactive={isApproved}>
          {isApproved ? "Buscar pagos no aprobados" : "Buscar pagos aprobados"}
        </StyledButton>

        <MaterialTable
          components={{
            Container: (props) => <Paper {...props} elevation={0} />,
            Cell: (props) => <MTableCell {...props} align="center" />,
          }}
          title={isApproved ? "Pagos aprobados" : "Pagos no aprobados"}
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
              const result = await payoutReportsService.getPayoutReports(
                {
                  page: query.page,
                  size: query.pageSize,
                  clientDni: query.search,
                  orderBy: query.orderBy ? query.orderBy.field : "",
                  order: query.orderDirection ? query.orderDirection : "",
                  isApproved:
                    query.filters.isApproved === undefined
                      ? 0
                      : query.filters.isApproved,
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
                      setShowData(rowData);
                      setModalShow(true);
                    },
                  },
                  /*  {
                    icon: "edit",
                    tooltip: "Actualizar reporte",
                    onClick: (event, rowData) => {
                      event.preventDefault();
                      setReportId(rowData);
                      setUpdateReportModalShow(true);
                    },
                  }, */
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
      </>
    );
  }
);
