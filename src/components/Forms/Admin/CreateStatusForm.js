import React, { useState } from "react";
import { Formik, Form } from "formik";
import FormGroup from "../FormGroup";
import * as Yup from "yup";
import createAlert from "../../../helpers/createAlert";
import adminService from "../../../services/admin.service";
import reportService from "../../../services/report.service";


const CreateStatusForm = () => {
  const [requestStatus, setRequestStatus] = useState({
    message: "",
    success: false,
    sent: false,
  });

  return (
    <Formik
      initialValues={{
        name: "",
      }}
      validationSchema={Yup.object({
        name: Yup.string().required("Este campo es necesario")
      })}
      onSubmit={async (values, { setSubmitting }) => {
        const result = await reportService.createStatus(values.name);
        setRequestStatus(result);
        setSubmitting(false);
      }}
    >
      {({ isSubmitting, values }) => (
        <Form className="mx-2">
          <div className="row">
          <div className="col-12">{createAlert(requestStatus)}</div>

            <div className="col-12 col-lg-6">
              <FormGroup
                label="Nombre del estado"
                name="name"
                type="name"
              ></FormGroup>
            </div>
          </div>
          <div className="row">
            <div className="form-group  mx-auto">
              <button
                type="submit"
                className=" btn-primary btn "
                disabled={isSubmitting}
              >
                {isSubmitting ? "Por favor espere" : "Enviar"}
              </button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default CreateStatusForm;
