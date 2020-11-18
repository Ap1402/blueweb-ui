import React, { useState } from "react";
import { Formik, Form } from "formik";
import FormGroup from "../FormGroup";
import * as Yup from "yup";
import createAlert from "../../../helpers/createAlert";
import adminService from "../../../services/admin.service";
import TextAreaField from "../TextAreaField";

const CreateClient = () => {
  const [requestStatus, setRequestStatus] = useState({
    message: "",
    success: false,
    sent: false,
  });
  return (
    <Formik
      initialValues={{
        firstName: "",
        secondName: "",
        lastName: "",
        secondLastName: "",
        email: "",
        phone: "",
        city: "",
        municipality: "",
        state: "",
      }}
      validationSchema={Yup.object({
        dni: Yup.string().required("Este campo es necesario"),
        firstName: Yup.string().required("Este campo es necesario"),
        secondName: Yup.string().required("Este campo es necesario"),
        lastName: Yup.string().required("Este campo es necesario"),
        secondLastName: Yup.string().required("Este campo es necesario"),
        email: Yup.string().email("Tiene que ser una dirección de email válida").required("Este campo es necesario"),
        phone: Yup.string().required("Este campo es necesario"),
        address: Yup.string().required("La dirección es necesaria"),
        city: Yup.string().required("Este campo es necesario"),
        municipality: Yup.string().required("Este campo es necesario"),
        state: Yup.string().required("Este campo es necesario"),
      })}
      onSubmit={async (values, { setSubmitting }) => {
        const result = await adminService.registerClient(values);
        setRequestStatus(result);
        setSubmitting(false);
      }}
    >
      {({ isSubmitting }) => (
        <Form className="mx-2">
          <div className="row">
            <div className="col-12">{createAlert(requestStatus)}</div>

            <div className="col12 col-lg-6">
              <FormGroup label="Cedula (*)" name="dni" type="text"></FormGroup>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-lg-6">
              <FormGroup
                label="Primer Nombre (*)"
                name="firstName"
                type="text"
              ></FormGroup>
            </div>
            <div className="col-12 col-lg-6">
              <FormGroup
                label="Segundo Nombre"
                name="secondName"
                type="text"
              ></FormGroup>
            </div>
          </div>

          <div className="row ">
            <div className="col-12 col-lg-6">
              <FormGroup
                label="Apellido (*)"
                name="lastName"
                type="text"
              ></FormGroup>
            </div>
            <div className="col-12 col-lg-6">
              <FormGroup
                label="Segundo Apellido"
                name="secondLastName"
                type="text"
              ></FormGroup>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-lg-6">
              <FormGroup
                label="Correo (*)"
                name="email"
                type="email"
              ></FormGroup>
            </div>
            <div className="col-12 col-lg-6">
              <FormGroup label="Teléfono (*)" name="phone" type="text"></FormGroup>
            </div>
          </div>
          <div className="row">
            <div className="col12 col-lg-4">
              <FormGroup label="Estado (*)" name="state" type="text"></FormGroup>
            </div>
            <div className="col12 col-lg-4">
              <FormGroup label="Ciudad (*)" name="city" type="text"></FormGroup>
            </div>
            <div className="col12 col-lg-4">
              <FormGroup
                label="Municipio (*)"
                name="municipality"
                type="text"
              ></FormGroup>
            </div>
            <div className="col-12 col-lg-6 mx-auto">
              <TextAreaField
                label="Dirección"
                name="address"
              ></TextAreaField>
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

export default CreateClient;
