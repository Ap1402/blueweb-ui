import * as Yup from "yup";
import TextAreaField from "../TextAreaField";
import SelectField from "../SelectField";
import { Formik, Form } from "formik";
import styled from "styled-components";
import createAlert from "../../../helpers/createAlert";
import { useState } from "react";
import factibilityService from "../../../services/factibility.service";

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const UpdateFactibilityRequest = (props) => {
  const [requestStatus, setRequestStatus] = useState({
    message: "",
    success: false,
    sent: false,
  });
  return (
    <Formik
      initialValues={{
        wasEvaluated: props.factibilityInfo.wasEvaluated ? "1" : "0",
        isFactible: props.factibilityInfo.isFactible ? "1" : "0",
        supportMessage: props.factibilityInfo.supportMessage || "",
      }}
      validationSchema={Yup.object({
        wasEvaluated: Yup.string().required("Este campo es necesario"),
        isFactible: Yup.string().required("Este campo es necesario"),
        supportMessage: Yup.string().required("Este campo es necesario"),
      })}
      onSubmit={async (values, { setSubmitting }) => {
        try {
          const result = await factibilityService.updateFactibilityRequest(
            {
              wasEvaluated: values.wasEvaluated,
              isFactible: values.isFactible,
              supportMessage: values.supportMessage,
            },
            props.factibilityInfo.id
          );

          setRequestStatus({
            sent: true,
            success: result.success,
            message: result.message,
          });

          setSubmitting(false);
          props.tableRef.current && props.tableRef.current.onQueryChange();
        } catch (err) {
          setRequestStatus({
            success: false,
            message: "Parece que hubo un problema actualizando la solicitud",
            sent: true,
          });
        }
      }}
    >
      {({ isSubmitting }) => (
        <StyledForm>
          <div className="row">
            <div className="col-10 mx-auto">{createAlert(requestStatus)}</div>

            <div className="col-10 mx-auto">
              <SelectField label="Marcar como evaluado" name="wasEvaluated">
                <option value="">
                  Seleccione si la solicitud ha sido evaluada o no
                </option>
                <option value="0">No</option>
                <option value="1">Sí</option>
              </SelectField>
            </div>
            <div className="col-10 mx-auto">
              <SelectField label="Marcar como factible" name="isFactible">
                <option value="">
                  Seleccione si es una solicitud factible o no
                </option>
                <option value="0">No</option>
                <option value="1">Sí</option>
              </SelectField>
            </div>

            <div className="col-10 mx-auto">
              <TextAreaField
                label="Anotación"
                name="supportMessage"
                type="text"
              ></TextAreaField>
            </div>
          </div>
          <div className="row text-center my-3">
            <div className="form-group">
              <button
                type="submit"
                className=" btn-primary btn "
                disabled={isSubmitting}
              >
                {isSubmitting ? "Por favor espere" : "Actualizar Reporte"}
              </button>
            </div>
          </div>
        </StyledForm>
      )}
    </Formik>
  );
};

export default UpdateFactibilityRequest;
