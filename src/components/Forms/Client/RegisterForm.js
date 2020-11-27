import * as Yup from "yup";
import FormGroup from "../FormGroup";
import { Formik, Form } from "formik";
import styled from "styled-components";
import userService from "../../../services/user.service";
import createAlert from "../../../helpers/createAlert";
import { useState } from "react";
import Spinner from '../../Spinner/Spinner';
import SelectField from "../SelectField";

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
        identification:""
      }}
      validationSchema={Yup.object({
        password: Yup.string().min(6, 'Debe tener mínimo 6 carácteres').required("Este campo es necesario"),
        username: Yup.string().required("Este campo es necesario"),
        identification: Yup.string()
        .oneOf(["V", "G", "E", "J"])
        .required("Campo necesario"),
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
            <div className="row">
            <div className="col-3">
              <SelectField label="." name="identification">
                <option value=""></option>
                <option value="V">V</option>
                <option value="E">E</option>
                <option value="G">G</option>
                <option value="J">J</option>
              </SelectField>
            </div>
            <div className="col-9">
              <FormGroup label="Cedula/Rif del contrato (*)" name="dni" type="text"></FormGroup>
            </div>
          </div>
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
