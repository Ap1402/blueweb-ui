import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import createAlert from "../../helpers/createAlert";
import authService from "../../services/auth.service";
import RegisterForm from "../Forms/Client/RegisterForm";

const RegisterModal = (props) => {
  const [requestStatus, setRequestStatus] = useState({
    message: "",
    success: false,
    sent: false,
  });

  const createUser = async (userData) => {
    try {
      const result = await authService.register(userData);
      if (result.status === 201) {
        setRequestStatus({
          success: true,
          message: "Cliente registrado correctamente",
          sent: true,
        });
      } else {
        setRequestStatus({
          success: false,
          message: result.data.message,
          sent: true,
        });
      }
    } catch (err) {}
  };

  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter centered">
          Registro
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {createAlert(requestStatus)}
        <RegisterForm registerRequest={createUser}></RegisterForm>
      </Modal.Body>
    </Modal>
  );
};

export default RegisterModal;
