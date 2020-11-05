import React from "react";
import { Formik, Form } from "formik";
import FormGroup from "../FormGroup";
import * as Yup from "yup";

const CreateUser = () => {
  return (
    <Formik

      initialValues={{
        firstName: "",
        secondName: "",
        lastName: "",
        secondLastName: "",
        email: "",
        phone: "",
        address: "",

      }}

      validationSchema={Yup.object({
        dni: Yup.string().required("Este campo es necesario"),
        firstName: Yup.string().required("Este campo es necesario"),
        secondName: Yup.string().required("Este campo es necesario"),
        secondLastName: Yup.string().required("Este campo es necesario"),
        lastName: Yup.string().required("Este campo es necesario"),
        email: Yup.string().email("Invalid email address").required("Required"),
        phone: Yup.string().required("Este campo es necesario"),
        address: Yup.string().required("La dirección es necesaria")
      })}

      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 1000);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <div className="row offset-2">
            <div className="col-10 col-lg-5">
              <FormGroup label="Cedula" name="dni" type="text"></FormGroup>
            </div>
          </div>
          <div className="row offset-2">
            <div className="col-10 col-lg-5">
              <FormGroup
                label="Primer Nombre"
                name="firstName"
                type="text"
              ></FormGroup>
            </div>

            <div className="col-10 col-lg-5">
              <FormGroup
                label="Segundo Nombre"
                name="secondName"
                type="text"
              ></FormGroup>
            </div>
          </div>
          <div className="row offset-2">
            <div className="col-10 col-lg-5">
              <FormGroup
                label="Apellido"
                name="lastName"
                type="text"
              ></FormGroup>
            </div>
            <div className="col-10 col-lg-5">
              <FormGroup
                label="Segundo Apellido"
                name="secondLastName"
                type="text"
              ></FormGroup>
            </div>
          </div>
          <div className="row offset-2">
            <div className="col-10 col-lg-5">
              <FormGroup
                label="Direccion de correo"
                name="email"
                type="email"
              ></FormGroup>
            </div>
            <div className="col-10 col-lg-5">
              <FormGroup label="Teléfono" name="phone" type="text"></FormGroup>
            </div>
          </div>
          <div className="row offset-2">
            <div className="col-10 col-lg-5">
              <FormGroup
                label="Dirección"
                name="address"
                type="textarea"
              ></FormGroup>
            </div>
            <div className="col-10 col-lg-5">
              <FormGroup label="Teléfono" name="phone" type="text"></FormGroup>
            </div>
          </div>
          <div className="row offset-2 text-center">
            <div className="form-group">
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

export default CreateUser;
