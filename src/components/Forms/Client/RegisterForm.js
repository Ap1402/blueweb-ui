import * as Yup from "yup";
import FormGroup from "../FormGroup";
import { Formik, Form } from "formik";
import styled from "styled-components";
import userService from "../../../services/user.service";
import createAlert from "../../../helpers/createAlert";
import { useState } from "react";
import Spinner from '../../Spinner/Spinner';

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const RegisterForm = () => {
  const [requestStatus, setRequestStatus] = useState({
    message: "",
    success: false,
    sent: false,
  });

  return (
    <Formik
      initialValues={{
        password: "",
        confirmPassword: "",
        username: "",
        dni: "",
      }}
      validationSchema={Yup.object({
        password: Yup.string().required("Este campo es necesario"),
        username: Yup.string().required("Este campo es necesario"),

        confirmPassword: Yup.string().oneOf(
          [Yup.ref("password"), null],
          "Las contraseñas deben coincidir"
        ),
        dni: Yup.string().required("Este campo es necesario")
      })}
      onSubmit={async (values, { setSubmitting }) => {
        const result = await userService.register(values);
        setRequestStatus(result);
        setSubmitting(false);
      }}
    >
      {({ isSubmitting }) => (
        <StyledForm>
          <div className="row ">
            <div className="col-12">{createAlert(requestStatus)}</div>

            <div className="col-10 mx-auto">
              <FormGroup label="Cedula" name="dni" type="text"></FormGroup>
              <FormGroup
                label="Nombre de usuario"
                name="username"
                type="text"
              ></FormGroup>
            </div>
            <div className="col-10 mx-auto">
              <FormGroup
                label="Contraseña"
                name="password"
                type="password"
              ></FormGroup>
              <FormGroup
                label="Confirmar contraseña"
                name="confirmPassword"
                type="password"
              ></FormGroup>
            </div>
          </div>
          <div className="row text-center my-3">
            <div className="form-group">
              {isSubmitting?<Spinner></Spinner>:''}
              <button
                type="submit"
                className=" btn-primary btn "
                disabled={isSubmitting}
              >
                {isSubmitting ? "Por favor espere" : "Registrar"}
              </button>
            </div>
          </div>
        </StyledForm>
      )}
    </Formik>
  );
};

export default RegisterForm;
