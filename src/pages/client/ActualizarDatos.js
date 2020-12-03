import React from "react";
import styled from "styled-components";
import UpdatePasswordForm from "../../components/Forms/Client/UpdatePasswordForm";
import UpdateDataForm from "../../components/Forms/Client/UpdateDataForm";

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

const ActualizarDatos = () => {
  return (
    <>
      <div className="card">
        <div className="card-body">
          <StyledContainer>
            <div className="content">
              <div className="dataChange">
                <h4>
                  ACTUALIZA TUS <strong>DATOS</strong>
                </h4>

                <UpdateDataForm></UpdateDataForm>
              </div>
              <div className="passwordChange">
                <h4>
                  ACTUALIZA TU <strong>CONTRASEÑA</strong>
                </h4>
                <UpdatePasswordForm></UpdatePasswordForm>
              </div>
            </div>
          </StyledContainer>
        </div>
      </div>
    </>
  );
};

export default ActualizarDatos;
