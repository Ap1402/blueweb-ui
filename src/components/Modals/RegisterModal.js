import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import createAlert from "../../helpers/createAlert";
import authService from "../../services/auth.service";
import RegisterForm from "../Forms/Client/RegisterForm";

const RegisterModal = (props) => {
  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter centered">
          Registro
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <RegisterForm></RegisterForm>
      </Modal.Body>
    </Modal>
  );
};

export default RegisterModal;
