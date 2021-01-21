import React, { useEffect, useState } from "react";
import MaterialTable from "material-table";
import messagesService from "../../services/messages.service";
import styled from "styled-components";
import { Button } from "react-bootstrap";

const StyledButton = styled(Button)`
  &&& {
    margin: 10px;
  }
  ${(props) =>
    props.isActive
      ? `
      background-color: ${props.theme.colors.darkerBlue} !important;
      border-color: ${props.theme.colors.darkerBlue} !important;
      `
      : `
      background-color: ${props.theme.colors.lightBlue} !important;
      border-color: ${props.theme.colors.lightBlue} !important;
      `}
`;

export const ChatPreformDataTable = React.forwardRef(
  ({ setShowData, setModalShow }, ref) => {
    const [wasAnswered, setWasAnswered] = useState(0);
    const [sentWhileOnline, setSentWhileOnline] = useState(0);

    const onClickHandler = () => {
      setWasAnswered(wasAnswered ? 0 : 1);
    };

    const onClickWhileOnlineHandler = () => {
      setSentWhileOnline(sentWhileOnline ? 0 : 1);
    };

    useEffect(() => {
      ref.current.onQueryChange({
        filters: {
          wasAnswered: wasAnswered,
          sentWhileOnline: sentWhileOnline,
        },
      });
    }, [wasAnswered, sentWhileOnline]);

    return (
      <>
        <StyledButton onClick={() => onClickHandler()} isActive={wasAnswered}>
          {wasAnswered ? "Buscar no atentidos" : "Buscar atentidos"}
        </StyledButton>
        <StyledButton
          onClick={() => onClickWhileOnlineHandler()}
          isActive={sentWhileOnline}
        >
          {sentWhileOnline
            ? "Ver formularios online"
            : "Ver formularios fuera de línea"}
        </StyledButton>

        <MaterialTable
          title={
            wasAnswered ? "Formularios atentidos" : "Formularios no atentidos"
          }
          tableRef={ref}
          localization={{
            pagination: {
              labelDisplayedRows: "{from}-{to} de {count} páginas",
            },
            /* toolbar: {
              nRowsSelected: "{0} filas(s) seleccionadas",
              searchPlaceholder: "Nombre del cliente",
              searchTooltip: "Búsqueda",
            }, */

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
              title: "ID",
              field: "id",
            },
            {
              title: "Nombre",
              field: "name",
            },
            { title: "Teléfono", field: "phone" },
            { title: "Correo", field: "email" },
            { title: "Razón", field: "reason" },
            /*  {
              title: "Razón",
              field: "reasonId",
              render: (rowData) => (rowData.reason ? rowData.reason.name : ""),
            }, */
          ]}
          options={{
            headerStyle: {
              backgroundColor: "#3f425e",
              color: "white",
              fontWeight: 600,
              padding: "20px",
              textAlign: "center",
            },
          }}
          data={(query) =>
            new Promise(async (resolve, reject) => {
              const result = await messagesService.getChatDataPreform({
                page: query.page,
                size: query.pageSize,
                wasAnswered:
                  query.filters.wasAnswered === undefined
                    ? 0
                    : query.filters.wasAnswered,
                sentWhileOnline:
                  query.filters.sentWhileOnline === undefined
                    ? 0
                    : query.filters.sentWhileOnline,
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
                setShowData(rowData);
                setModalShow(true);
              },
            },
          ]}
        />
      </>
    );
  }
);
