import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Spinner from "../../components/Spinner/Spinner";
import clientsService from "../../services/clients.service";
import UpdateDataForm from "../../components/Forms/Client/UpdateDataForm";

const StyledContainer = styled.div`
  width: 100%;
  .info {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(50%, 1fr));
    margin-top: 30px;
    p {
      font-size: 15px;
      display: flex;
      flex-direction: column;
      span {
        font-size: 13px;

        font-weight: 500;
      }
    }
  }

  .seccion-header {
    text-align: center;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.blue};
    font-size: 28px;
    text-transform: uppercase;
  }
`;

const PerfilCliente = () => {
  const [userData, setUserData] = useState();
  const [loading, setIsLoading] = useState(true);

  useEffect(() => {
    const getUserData = async () => {
      const result = await clientsService.getCurrentLoggedClient();
      setUserData(result);
      setIsLoading(false);
    };
    getUserData();
  }, []);

  return !loading ? (
    <>
      <div className="row">
        <div className="col-lg-6 my-1 col-12">
          <div className="card">
            <div className="card-body">
              <StyledContainer>
                <h1 className="seccion-header">Datos del cliente</h1>
                <div className="info">
                  <p>
                    <strong>Cédula:</strong> <span>{userData.dni}</span>
                  </p>
                  <p>
                    <strong>Nombres:</strong> <span>{userData.names}</span>
                  </p>
                  <p>
                    <strong>Apellidos:</strong>{" "}
                    <span>{userData.lastNames}</span>
                  </p>
                  <p>
                    <strong>Teléfono:</strong>
                    <span>{userData.phone}</span>
                  </p>
                  <p>
                    <strong>Email:</strong>
                    <span>{userData.email}</span>
                  </p>
                  <p>
                    <strong>Estado:</strong>
                    <span>{userData.state}</span>
                  </p>
                  <p>
                    <strong>Ciudad:</strong>
                    <span>{userData.city}</span>
                  </p>
                  <p>
                    <strong>Dirección:</strong>
                    <span>{userData.address}</span>
                  </p>
                </div>
              </StyledContainer>
            </div>
          </div>
        </div>
        <div className="col-12 my-1 col-lg-6">
          <div className="card">
            <div className="card-body">
              <StyledContainer>
                <h1 className="seccion-header">Actualiza tus datos</h1>
                <UpdateDataForm></UpdateDataForm>
              </StyledContainer>
            </div>
          </div>
        </div>
      </div>
    </>
  ) : (
    <Spinner></Spinner>
  );
};

export default PerfilCliente;
