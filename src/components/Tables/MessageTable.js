import React, { useEffect, useState } from "react";
import MaterialTable from "material-table";
import messagesService from "../../services/messages.service";
import styled from "styled-components";
import { Button } from "react-bootstrap";

const StyledButton = styled(Button)`
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
  margin: 0 10px 10px 10px;
`;

export const MessageTable = React.forwardRef(
  ({ setShowData, setModalShow }, ref) => {
    const [wasAnswered, setWasAnswered] = useState(0);

    const onClickHandler = () => {
      setWasAnswered(wasAnswered ? 0 : 1);
    };

    useEffect(() => {
      ref.current.onQueryChange({ filters: { wasAnswered: wasAnswered } });
    }, [wasAnswered]);

    return (
      <>
        <StyledButton onClick={() => onClickHandler()} isActive={wasAnswered}>
          {wasAnswered ? "Buscar no respondidos" : "Buscar respondidos"}
        </StyledButton>

        <MaterialTable
          title={
            wasAnswered ? "Mensajes respondidos" : "Mensajes no respondidos"
          }
          tableRef={ref}
          localization={{
            pagination: {
              labelDisplayedRows: "{from}-{to} de {count} páginas",
            },
            toolbar: {
              nRowsSelected: "{0} filas(s) seleccionadas",
              searchPlaceholder: "Nombre del cliente",
              searchTooltip: "Búsqueda",
            },

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
              title: "Nombre",
              field: "name",
            },
            { title: "Teléfono", field: "phone" },
            { title: "Correo", field: "email" },
            { title: "Razón", field: "reason" }
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
              const result = await messagesService.getMessages({
                page: query.page,
                size: query.pageSize,
                wasAnswered:
                  query.filters.wasAnswered === undefined
                    ? 0
                    : query.filters.wasAnswered,
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
