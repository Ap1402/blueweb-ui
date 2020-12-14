import * as Yup from "yup";
import FormGroup from "../FormGroup";
import { Formik, Form } from "formik";
import styled from "styled-components";
import SelectField from "../SelectField";
import TextAreaField from "../TextAreaField";
import messagesService from "../../../services/messages.service";
import createAlert from "../../../helpers/createAlert";
import { useEffect, useState } from "react";

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

  const [loading, setLoading] = useState(true);
  const [reasons, setReasons] = useState();

  useEffect(() => {
    const getReasons = async () => {
      const result = await messagesService.getReasons();
      setReasons(result);
      setLoading(false);
    };
    getReasons();
  }, []);

  if (!loading) {
    return (
      <Formik
        initialValues={{
          name: "",
          phone: "",
          email: "",
          reasonId: "",
          message: "",
        }}
        validationSchema={Yup.object({
          name: Yup.string().required("Este campo es necesario"),
          phone: Yup.string().required("Este campo es necesario"),
          reasonId: Yup.string().required("Este campo es necesario"),
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
                <FormGroup
                  label="Teléfono"
                  name="phone"
                  type="text"
                ></FormGroup>
              </div>
              <div className="col-12 ">
                <SelectField label="Razón" name="reasonId">
                  <option value="">Seleccione una razón</option>
                  {reasons.map((reason) => (
                    <option key={reason.id} value={reason.id}>
                      {reason.name}
                    </option>
                  ))}
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
  } else {
    return <p>Cargando...</p>;
  }
};

export default RequestFactibility;
