import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  width: 100%;
  .info {
    width: 200px;
    @media (min-width: 720px) {
      width: 400px;
    }
    p {
      font-size: 18px;
      span {
        font-size: 15px;

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

const PerfilCliente = () => {
  return (
    <>
      <div className="card">
        <div className="card-body">
          <StyledContainer>
            <h1 className="seccion-header">Datos del cliente</h1>
            <div className="info">
              <p>
                Cedula: <span>V-55555</span>
              </p>
              <p>
                Primer Nombre: <span>Xxxxx</span>
              </p>
              <p>
                Segundo Nombre: <span>Xxxxx</span>
              </p>
              <p>
                Primer Apellido: <span>Xxxxx</span>
              </p>
              <p>
                Segundo Apellido: <span>Xxxxx</span>
              </p>
            </div>
            <div className="info">
              <p>
                Direccion:
                <span>
                  AV.74 Entre Calle 105 Y Av 75 Al lado de Toyoclub, Avenida
                  Intercomunal Don Julio Centeno, San Diego 2006, Carabobo
                </span>
              </p>
            </div>
          </StyledContainer>
        </div>
      </div>
    </>
  );
};

export default PerfilCliente;
