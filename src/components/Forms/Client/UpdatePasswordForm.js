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

const UpdatePasswordForm = ({ registerRequest }) => {
  return (
    <Formik
      initialValues={{
        actualPassword: "",
        newPassword: "",
        newPasswordConfirm: "",
      }}
      validationSchema={Yup.object({
        actualPassword: Yup.string().required("Este campo es necesario"),
        newPassword: Yup.string().required("Este campo es necesario"),
        newPasswordConfirm: Yup.string().oneOf(
          [Yup.ref("newPassword"), null],
          "Las contraseñas deben coincidir"
        ),
      })}
      onSubmit={async (values, { setSubmitting }) => {
        const result = await registerRequest(values);
        setSubmitting(false);
      }}
    >
      {({ isSubmitting }) => (
        <StyledForm>
          <div className="row ">
            <div className="col-12">
              <FormGroup
                label="Contraseña Actual"
                name="actualPassword"
                type="text"
              ></FormGroup>
            </div>
            <div className="col-12 ">
              <FormGroup
                label="Nueva contraseña"
                name="newPassword"
                type="text"
              ></FormGroup>
            </div>
            <div className="col-12 ">
              <FormGroup
                label="Confirmar contraseña"
                name="newPasswordConfirm"
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
                {isSubmitting ? "Por favor espere" : "Actualizar contraseña"}
              </button>
            </div>
          </div>
        </StyledForm>
      )}
    </Formik>
  );
};

export default UpdatePasswordForm;
