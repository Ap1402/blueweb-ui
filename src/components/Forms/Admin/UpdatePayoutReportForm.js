import * as Yup from "yup";
import { Formik, Form } from "formik";
import styled from "styled-components";
import payoutReportsService from "../../../services/payoutReports.service";
import createAlert from "../../../helpers/createAlert";
import { useState } from "react";
import Spinner from "../../Spinner/Spinner";
import SelectField from "../SelectField";
import FormGroup from "../FormGroup";

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const UpdatePayoutReportForm = (props) => {
  const [requestStatus, setRequestStatus] = useState({
    message: "",
    success: false,
    sent: false,
  });

  return (
    <Formik
      initialValues={{
        isApproved: props.reportInfo
          ? props.reportInfo.isApproved
            ? "1"
            : "0"
          : "",
        commerceCode: props.reportInfo
          ? props.reportInfo.commerceCode
            ? props.reportInfo.commerceCode
            : ""
          : "",
      }}
      validationSchema={Yup.object({
        isApproved: Yup.string().required("Este campo es necesario"),
        commerceCode: Yup.string().required("Este campo es necesario"),
      })}
      onSubmit={async (values, { setSubmitting }) => {
        const result = await payoutReportsService.updatePayoutReport(
          values,
          props.reportInfo.id
        );
        setRequestStatus(result);
        setSubmitting(false);
        props.tableRef.current && props.tableRef.current.onQueryChange();
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <div className="row">
            <div className="col-10 mx-auto">{createAlert(requestStatus)}</div>
            <div className="col-10 mx-auto">
              <SelectField label="Reporte aprobado" name="isApproved">
                <option value="">Seleccione una opción</option>
                <option value="1">Sí</option>
                <option value="0">No</option>
              </SelectField>
            </div>

            <div className="col-10 mx-auto">
              <FormGroup
                label="Número de factura"
                name="commerceCode"
              ></FormGroup>
            </div>
          </div>
          <div className="row text-center my-3 mx-auto">
            <div className="form-group mx-auto">
              {isSubmitting ? <Spinner></Spinner> : ""}
              <button
                type="submit"
                className=" btn-primary btn "
                disabled={isSubmitting}
              >
                {isSubmitting ? "Por favor espere" : "Actualizar"}
              </button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default UpdatePayoutReportForm;
