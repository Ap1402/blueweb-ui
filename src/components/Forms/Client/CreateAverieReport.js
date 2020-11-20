import * as Yup from "yup";
import FormGroup from "../FormGroup";
import TextAreaField from "../TextAreaField";
import SelectField from "../SelectField";

import { Formik, Form } from "formik";
import styled from "styled-components";
import userService from "../../../services/user.service";
import createAlert from "../../../helpers/createAlert";
import { useState } from "react";
import Spinner from "../../Spinner/Spinner";
import reportService from "../../../services/report.service";

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CreateAverieReport = () => {
  const [requestStatus, setRequestStatus] = useState({
    message: "",
    success: false,
    sent: false,
  });

  return (
    <Formik
      initialValues={{
        dni: "",
        message: "",
        reason: "",
      }}
      validationSchema={Yup.object({
        message: Yup.string().required("Este campo es necesario"),
        dni: Yup.string().required("Este campo es necesario"),
        reason: Yup.string().required("Este campo es necesario"),
      })}
      onSubmit={async (values, { setSubmitting }) => {
        const result = await reportService.registerReport({
          message: values.dni,
          dni: values.dni,
          reason: values.reason,
        });
        setRequestStatus(result);
        setSubmitting(false);
      }}
    >
      {({ isSubmitting }) => (
        <StyledForm>
          <div className="row ">
            <div className="col-12">{createAlert(requestStatus)}</div>

            <div className="col-10 mx-auto">
              <FormGroup
                label="Documento de identificación"
                name="dni"
                type="text"
              ></FormGroup>
            </div>
            <div className="col-10 mx-auto">
              <SelectField label="Motivo del reporte" name="reason">
                <option value="">Seleccione una razón</option>
                <option value="1">No puedo navegar</option>
                <option value="2">Interrupciones en el servicio</option>
                <option value="3">Lentitud en el servicio</option>
                <option value="4">Algunas páginas no abren</option>
                <option value="5">Otros</option>
              </SelectField>
            </div>

            <div className="col-10 mx-auto">
              <TextAreaField
                label="Descripción"
                name="message"
                type="text"
              ></TextAreaField>
            </div>
          </div>
          <div className="row text-center my-3">
            <div className="form-group">
              {isSubmitting ? <Spinner></Spinner> : ""}
              <button
                type="submit"
                className=" btn-primary btn "
                disabled={isSubmitting}
              >
                {isSubmitting ? "Por favor espere" : "Enviar reporte"}
              </button>
            </div>
          </div>
        </StyledForm>
      )}
    </Formik>
  );
};

export default CreateAverieReport;
