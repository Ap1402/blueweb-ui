import * as Yup from "yup";
import FormGroup from "../FormGroup";
import { Formik, Form } from "formik";
import styled from "styled-components";
import SelectField from "../SelectField";
import TextAreaField from "../TextAreaField";
import messagesService from "../../../services/messages.service";
import createAlert from "../../../helpers/createAlert";
import { useState } from "react";

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const RequestFactibility = () => {
  const [requestStatus, setRequestStatus] = useState({
    message: "",
    success: false,
    sent: false,
  });
  return (
    <Formik
      initialValues={{
        name: "",
        phone: "",
        email: "",
        reason: "",
        message: "",
      }}
      validationSchema={Yup.object({
        name: Yup.string().required("Este campo es necesario"),
        phone: Yup.string().required("Este campo es necesario"),
        reason: Yup.string().required("Este campo es necesario"),
        message: Yup.string().required("Este campo es necesario"),
        email: Yup.string()
          .email("Debe ser un email válido")
          .required("Este campo es necesario"),
      })}
      onSubmit={async (values, { setSubmitting }) => {
        const result = await messagesService.createContactMessage(values);
        setRequestStatus(result);
        setSubmitting(false);
      }}
    >
      {({ isSubmitting, setFieldValue }) => (
        <StyledForm>
          <div className="row ">
            <div className="col-12">
              <FormGroup
                label="Nombre completo"
                name="name"
                type="text"
              ></FormGroup>
            </div>
            <div className="col-12 ">
              <FormGroup label="Correo" name="email" type="text"></FormGroup>
            </div>
            <div className="col-12 ">
              <FormGroup label="Teléfono" name="phone" type="text"></FormGroup>
            </div>
            <div className="col-12 ">
              <SelectField label="Razón" name="reason">
                <option value="">Seleccione una razón</option>
                <option value="averia">Avería</option>
                <option value="duda">Pregunta general</option>
                <option value="factibilidad">Duda sobre factibilidad</option>
                <option value="otros">Otros</option>
              </SelectField>
            </div>
            <div className="col-12 ">
              <TextAreaField rows="6" label="Mensaje" name="message" />
            </div>
          </div>

          <div className="row text-center my-3">
            <div className="form-group">
            <div className="col-12">{createAlert(requestStatus)}</div>

              <button
                type="submit"
                className=" btn-primary btn "
                disabled={isSubmitting}
              >
                {isSubmitting ? "Por favor espere" : "Enviar"}
              </button>
            </div>
          </div>
        </StyledForm>
      )}
    </Formik>
  );
};

export default RequestFactibility;
