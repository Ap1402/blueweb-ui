import * as Yup from "yup";
import FormGroup from "../FormGroup";
import { Formik, Form } from "formik";
import styled from "styled-components";
import authService from "../../../services/auth.service";
import createAlert from "../../../helpers/createAlert";
import { useState } from "react";
import { withRouter } from "react-router-dom";
import { Spinner } from "react-bootstrap";

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const LoginForm = (props) => {
  const [requestStatus, setRequestStatus] = useState({
    message: "",
    success: false,
    sent: false,
  });

  const loginUser = async (userData) => {
    try {
      const result = await authService.login(userData);
      if (result.status === 200) {
        setRequestStatus({
          success: true,
          message: "Datos correctos",
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
    <Formik
      initialValues={{
        username: "",
        password: "",
      }}
      validationSchema={Yup.object({
        password: Yup.string().required("Este campo es necesario"),
        username: Yup.string().required("Este campo es necesario"),
      })}
      onSubmit={async (values, { setSubmitting }) => {
        await loginUser(values);
        setSubmitting(false);
        setTimeout(function () {
          props.history.push("/clients/historial");
        }, 2000);
      }}
    >
      {({ isSubmitting }) => (
        <StyledForm>
          <div className="row ">
            <div className="col-12">{createAlert(requestStatus)}</div>
            <div className="col-10 mx-auto">
              <FormGroup label="Usuario" name="username" type="text"></FormGroup>
            </div>
            <div className="col-10 mx-auto">
              <FormGroup
                label="Contraseña"
                name="password"
                type="password"
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
                {isSubmitting ? "Por favor espere" : "Ingresar"}
              </button>
            </div>
          </div>
        </StyledForm>
      )}
    </Formik>
  );
};

export default withRouter(LoginForm);
