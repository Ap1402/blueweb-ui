import MaterialTable, { MTableCell } from "material-table";
import { Paper } from "@material-ui/core";
import React from "react";
import dayjs from "dayjs";
import payoutReportsService from "../../../services/payoutReports.service";

export const BankAccountsTable = React.forwardRef(
  ({ setShowData, setFormShow }, ref) => {
    return (
      <MaterialTable
        components={{
          Container: (props) => <Paper {...props} elevation={0} />,
          Cell: (props) => <MTableCell {...props} align="center" />,
        }}
        title="Cuentas de banco registradas"
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
            title: "Nombre del banco",
            field: "bankName",
          },
          {
            title: "Número de cuenta",
            field: "number",
          },
          {
            title: "Rif asociado",
            field: "ownerRif",
          },
        ]}
        options={{
          headerStyle: {
            backgroundColor: "#01579b",
            color: "#FFF",
            padding: "20px",
          },
          search: false,
          rowStyle: {
            backgroundColor: "#EEE",
          },
        }}
        data={(query) =>
          new Promise(async (resolve, reject) => {
            const result = await payoutReportsService.getDestinationBanks({
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
              setFormShow(true);
            },
          },
        ]}
      />
    );
  }
);
