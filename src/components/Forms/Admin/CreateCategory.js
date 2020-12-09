import React, { useState } from "react";
import { Formik, Form } from "formik";
import FormGroup from "../FormGroup";
import * as Yup from "yup";
import createAlert from "../../../helpers/createAlert";
import reportService from "../../../services/report.service";
import SelectField from "../SelectField";

const CreateCategory = ({ addCategoryStatus }) => {
  const [requestStatus, setRequestStatus] = useState({
    message: "",
    success: false,
    sent: false,
  });

  return (
    <Formik
      initialValues={{
        name: "",
        defaultPriorityLevel: "",
      }}
      validationSchema={Yup.object({
        name: Yup.string().required("Este campo es necesario"),
        defaultPriorityLevel: Yup.number().required("Este campo es necesario"),
      })}
      onSubmit={async (values, { setSubmitting }) => {
        const result = await addCategoryStatus(
          "category",
          values.name,
          values.defaultPriorityLevel
        );
        setRequestStatus(result);
        setSubmitting(false);
      }}
    >
      {({ isSubmitting, values }) => (
        <Form className="mx-2">
          <div className="row">
            <div className="col-12 mx-auto">{createAlert(requestStatus)}</div>
            <div className="col-12 col-lg-6 mx-auto">
              <SelectField
                label="Nivel de prioridad"
                name="defaultPriorityLevel"
              >
                <option value="">Seleccione un nivel de prioridad</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </SelectField>
            </div>
            <div className="col-12 col-lg-6  mx-auto">
              <FormGroup
                label="Nombre de la categoría"
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

export default CreateCategory;
