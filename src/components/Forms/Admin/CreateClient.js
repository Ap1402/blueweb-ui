import React, { useState } from "react";
import { Formik, Form } from "formik";
import FormGroup from "../FormGroup";
import * as Yup from "yup";
import createAlert from "../../../helpers/createAlert";
import adminService from "../../../services/admin.service";
import TextAreaField from "../TextAreaField";
import SelectField from "../SelectField";


const CreateClient = () => {
  const [requestStatus, setRequestStatus] = useState({
    message: "",
    success: false,
    sent: false,
  });


  return (
    <Formik
      initialValues={{
        names: "",
        lastNames: "",
        email: "",
        phone: "",
        city: "",
        municipality: "",
        state: "",
        identification: "",
        isEnterprise: "",
        socialReason: "",
        commercialReason: "",
      }}
      validationSchema={Yup.object({
        isEnterprise: Yup.number().required(
          "Necesita especificar el tipo de cliente"
        ),
        identification: Yup.string()
          .oneOf(["V", "G", "E", "J"])
          .required("Necesario"),

        socialReason: Yup.string().when("isEnterprise", {
          is: (value) => value == "1",
          then: Yup.string().required("Este campo es necesario"),
          otherwise: Yup.string(),
        }),

        commercialReason: Yup.string().when("isEnterprise", {
          is: (value) => value == "1",
          then: Yup.string().required("Este campo es necesario"),
          otherwise: Yup.string(),
        }),

        dni: Yup.string().required("Este campo es necesario"),
        names: Yup.string().required("Este campo es necesario"),
        lastNames: Yup.string().required("Este campo es necesario"),
        email: Yup.string()
          .email("Tiene que ser una dirección de email válida")
          .required("Este campo es necesario"),
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
      {({ isSubmitting, values }) => (
        <Form className="mx-2">
          <div className="row">
            <div className="col-12">{createAlert(requestStatus)}</div>

            <div className="col-12 col-lg-3">
              <SelectField label="Tipo" name="isEnterprise">
                <option value=""></option>
                <option value="0">Natural</option>
                <option value="1">Juridico</option>
              </SelectField>
            </div>
          </div>
          {values.isEnterprise === "1" && (
            <div className="row">
              <div className="col-12 col-lg-6">
                <FormGroup
                  label="Razón social (*)"
                  name="socialReason"
                  type="text"
                ></FormGroup>
              </div>
              <div className="col-12 col-lg-6">
                <FormGroup
                  label="Razón comecial (*)"
                  name="commercialReason"
                  type="text"
                ></FormGroup>
              </div>
            </div>
          )}
          <div className="row">
            <div className="col-4 col-md-3 col-lg-2">
              <SelectField label="." name="identification">
                <option value=""></option>
                <option value="V">V</option>
                <option value="E">E</option>
                <option value="G">G</option>
                <option value="J">J</option>
              </SelectField>
            </div>
            <div className="col-8 col-md-4 col-lg-6">
              <FormGroup label="Cedula (*)" name="dni" type="text"></FormGroup>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-lg-6">
              <FormGroup
                label="Nombres (*)"
                name="names"
                type="text"
              ></FormGroup>
            </div>
            <div className="col-12 col-lg-6">
              <FormGroup
                label="Apellidos (*)"
                name="lastNames"
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
              <FormGroup
                label="Teléfono (*)"
                name="phone"
                type="text"
              ></FormGroup>
            </div>
          </div>
          <div className="row">
            <div className="col12 col-lg-4">
              <FormGroup
                label="Estado (*)"
                name="state"
                type="text"
              ></FormGroup>
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
              <TextAreaField label="Dirección" name="address"></TextAreaField>
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
