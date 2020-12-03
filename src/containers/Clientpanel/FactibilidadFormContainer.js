import { useState } from "react";
import styled from "styled-components";
import RequestFactibility from "../../components/Forms/Client/RequestFactibility";
import axios from "axios";
import factibilityService from "../../services/factibility.service";

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
      const result = await factibilityService.createFactibilityRequest(request);
      setRequestStatus({
        sent: true,
        success: result.success,
        message: result.message,
      });
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
