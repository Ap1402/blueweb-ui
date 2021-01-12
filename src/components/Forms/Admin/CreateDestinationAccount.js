import React, { useState } from "react";
import { Formik, Form } from "formik";
import FormGroup from "../FormGroup";
import * as Yup from "yup";
import createAlert from "../../../helpers/createAlert";
import SelectField from "../SelectField";
import payoutReportsService from "../../../services/payoutReports.service";
import PropTypes from "prop-types";

const CreateDestinationAccount = ({ currentValues, tableRef }) => {
  const [requestStatus, setRequestStatus] = useState({
    message: "",
    success: false,
    sent: false,
  });
  return (
    <Formik
      initialValues={{
        bankName: currentValues ? currentValues.bankName : "",
        number: currentValues.number ? currentValues.number : "",
        international: currentValues.international ? "1" : "0",
        ownerRif: currentValues.ownerRif ? currentValues.ownerRif : "",
        email: currentValues.email ? currentValues.email : "",
      }}
      validationSchema={Yup.object({
        bankName: Yup.string().required("Este campo es necesario"),
        number: Yup.number().required("Este campo es necesario"),
        international: Yup.number().required("Este campo es necesario"),
        ownerRif: Yup.string().required("Este campo es necesario"),
        email: Yup.string().email().required("Este campo es necesario"),
      })}
      onSubmit={async (values, { setSubmitting }) => {
        var result;
        if (currentValues.id) {
          result = await payoutReportsService.createDestinationBank(values);
        } else {
          result = await payoutReportsService.createDestinationBank(values);
        }
        tableRef.current && tableRef.current.onQueryChange();
        setRequestStatus(result);
        setSubmitting(false);
      }}
    >
      {({ isSubmitting, values }) => (
        <Form className="mx-2">
          <div className="row">
            <div className="col-12 mx-auto">{createAlert(requestStatus)}</div>
            <div className="col-12 col-lg-6 mx-auto">
              <SelectField label="Internacional" name="international">
                <option value="">Seleccione una opción</option>
                <option value="0">No</option>
                <option value="1">Sí</option>
              </SelectField>
            </div>
            <div className="col-12 col-lg-6  mx-auto">
              <FormGroup label="Nombre del banco" name="bankName"></FormGroup>
            </div>
            <div className="col-12 col-lg-6  mx-auto">
              <FormGroup label="Número de la cuenta" name="number"></FormGroup>
            </div>
            <div className="col-12 col-lg-6  mx-auto">
              <FormGroup label="Nombre del dueño" name="ownerName"></FormGroup>
            </div>
            <div className="col-12 col-lg-6  mx-auto">
              <FormGroup
                label="Rif o dni del dueño"
                name="ownerRif"
              ></FormGroup>
            </div>
            <div className="col-12 col-lg-6  mx-auto">
              <FormGroup label="Correo" name="email" type="email"></FormGroup>
            </div>
          </div>
          <div className="row">
            <div className="form-group  mx-auto">
              <button
                type="submit"
                className=" btn-primary btn "
                disabled={isSubmitting}
              >
                {isSubmitting ? "Por favor espere" : "Guardar"}
              </button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

CreateDestinationAccount.propTypes = {
  currentValues: PropTypes.object.isRequired,
  tableRef: PropTypes.object.isRequired,
};

CreateDestinationAccount.defaultProps = {
  currentValues: {},
};

export default CreateDestinationAccount;
