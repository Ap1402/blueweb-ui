import React from "react";
import styled from "styled-components";
import reportService from "../../services/report.service";
import MaterialTable, { MTableCell } from "material-table";
import { Paper } from "@material-ui/core";
import dayjs from "dayjs";
const StyledContainer = styled.div`
  width: 100%;
  .content {
    display: grid;
    grid-template-columns: 100%;
    width: 100%;
    @media (min-width: 800px) {
      grid-template-columns: 47% 47%;
      column-gap: 30px;
    }
    .passwordChange {
      h4 {
        font-size: 20px;
      }
    }
  }
  .info {
    p {
      font-size: 20px;
      span {
        font-weight: 500;
      }
    }
  }

  .seccion-header {
    text-align: center;
    font-weight: 800;
    color: ${({ theme }) => theme.colors.blue};
    font-size: 40px;
  }
`;
function RefreshData() {
  const tableRef = React.createRef();
  return (
    <MaterialTable
      components={{
        Container: (props) => <Paper {...props} elevation={0} />,
        Cell: (props) => <MTableCell {...props} align="center" />,
      }}
      title="Mis reportes realizados"
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
          title: "Razón",
          render: (rowData) => rowData.reportCategory.name,
        },

        {
          title: "Estado",
          render: (rowData) => rowData.reportStatus.name,
        },
        {
          title: "Fecha de reporte",
          render: (rowData) => dayjs(rowData.createdAt).format("DD/MM/YYYY"),
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
          const result = await reportService.getReports({
            page: query.page,
            size: query.pageSize,
          });
          console.log(result);
          resolve({
            page: result.currentPage,
            data: result.data,
            totalCount: result.totalItems,
          });
        })
      }
      actions={[
     

        {
          icon: "visibility",
          tooltip: "Ver información",
          onClick: (event, rowData) => {
            /* setShowData({
              id: rowData.id,
              name: rowData.name,
              reason: rowData.reason,
              message: rowData.message,
              phone: rowData.phone,
              email: rowData.email,
              wasAnswered: rowData.wasAnswered,
            }); */
            //setModalShow(true);
            // Do save operation
          },
        },
      ]}
    />
  );
}

const MisReportes = () => {
  return (
    <>
      <div className="card">
        <div className="card-body">
          <StyledContainer>
            <h1 className="seccion-header">Mis reportes</h1>
            
            {RefreshData()}
          </StyledContainer>
        </div>
      </div>
    </>
  );
};

export default MisReportes;
