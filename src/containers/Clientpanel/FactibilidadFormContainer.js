import { useState } from "react";
import styled from "styled-components";
import RequestFactibility from "../../components/Forms/Client/RequestFactibility";
import axios from 'axios'

const StyledContacto = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
  align-items: center;
  margin-top: 30px;

  h1 {
    text-align: center;
  }
`;


const FactibilidadFormContainer = () => {
  const [requestStatus, setRequestStatus] = useState({
    message: "",
    success: false,
    sent: false,
  });

  const createRequest = async (request) => {
    try {
      const result = await axios
        .post("http://localhost:4000/api/factibility", request)
        .catch((err) => {
          setRequestStatus({
            success: false,
            message: err.response.data,
            sent: true,
          });
        });
      if (result.status === 201) {
        setRequestStatus({
          success: true,
          message: "Solicitud registrada correctamente, nos pondremos en contacto con usted",
          sent: true,
        });
      }
      return result;
    } catch (err) {

      return err;
    }
  };

  const createAlert = () => {
    if (requestStatus.sent & !requestStatus.success) {
      return (
        <div class="alert alert-danger" role="alert">
          {requestStatus.message}
        </div>
      );
    }
    if (requestStatus.sent & requestStatus.success) {
      return (
        <div class="alert alert-success" role="alert">
          {requestStatus.message}
        </div>
      );
    }
  };

  return (
    <>
        <StyledContacto>
          <h1>Solicita tu revisión de factibilidad</h1>
          {createAlert()}

          <RequestFactibility
            registerRequest={createRequest}
          ></RequestFactibility>
        </StyledContacto>
    </>
  );
};

export default FactibilidadFormContainer;
