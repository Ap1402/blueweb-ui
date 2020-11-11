import * as Yup from "yup";
import FormGroup from "../FormGroup";
import { Formik, Form } from "formik";
import styled from "styled-components";

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const RegisterForm = ({ registerRequest }) => {
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
        confirmPassword: "",
        dni: "",
      }}
      validationSchema={Yup.object({
        password: Yup.string().required("Este campo es necesario"),
        confirmPassword: Yup.string().oneOf(
          [Yup.ref("password"), null],
          "Las contraseñas deben coincidir"
        ),
        dni: Yup.string().required("Este campo es necesario"),
        email: Yup.string()
          .email("Debe ser un email válido")
          .required("Este campo es necesario"),
      })}
      onSubmit={async (values, { setSubmitting }) => {
        await registerRequest(values);
        setSubmitting(false);
      }}
    >
      {({ isSubmitting }) => (
        <StyledForm>
          <div className="row ">
            <div className="col-10 mx-auto">
              <FormGroup label="Cedula" name="dni" type="text"></FormGroup>
              <FormGroup label="Correo" name="email" type="text"></FormGroup>
            </div>
            <div className="col-10 mx-auto">
              <FormGroup
                label="Contraseña"
                name="password"
                type="text"
              ></FormGroup>
              <FormGroup
                label="Confirmar contraseña"
                name="confirmPassword"
                type="text"
              ></FormGroup>
            </div>
          </div>
          <div className="row text-center my-3">
            <div className="form-group">
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
