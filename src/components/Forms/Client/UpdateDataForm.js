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
        email: "",
        mobilePhone: "",
        localPhone: "",
      }}
      validationSchema={Yup.object({
        email: Yup.string()
          .email("Debe ser un email válido")
          .required("Este campo es necesario"),
        mobilePhone: Yup.string().required("Este campo es necesario"),
        localPhone: Yup.string().required("Este campo es necesario"),
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
                label="Correo electrónico"
                name="email"
                type="text"
              ></FormGroup>
            </div>
            <div className="col-12 ">
              <FormGroup
                label="Teléfono celular"
                name="mobilePhone"
                type="text"
              ></FormGroup>
            </div>
            <div className="col-12 ">
              <FormGroup
                label="Teléfono de habitación"
                name="localPhone"
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
                {isSubmitting ? "Por favor espere" : "Actualizar datos"}
              </button>
            </div>
          </div>
        </StyledForm>
      )}
    </Formik>
  );
};

export default UpdatePasswordForm;
