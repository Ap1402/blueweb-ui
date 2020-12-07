import * as Yup from "yup";
import FormGroup from "../FormGroup";
import { Formik, Form } from "formik";
import styled from "styled-components";
import { useEffect, useState } from "react";
import clientsService from "../../../services/clients.service";
import createAlert from "../../../helpers/createAlert";

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const UpdatePasswordForm = ({ registerRequest }) => {
  const [data, setData] = useState({
    email: "",
    phone: "",
    address: "",
    state: "",
    city: "",
    municipality: "",
  });
  const [loading, setLoading] = useState(true);

  const [requestStatus, setRequestStatus] = useState({
    message: "",
    success: false,
    sent: false,
  });

  useEffect(() => {
    const getData = async () => {
      const results = await clientsService.getCurrentLoggedClient();
      setData({
        email: results.email,
        phone: results.phone,
        address: results.address,
        state: results.state,
        city: results.city,
        municipality: results.municipality,
      });
      setLoading(false);
    };
    getData();
  }, []);

  if (loading) {
    return <p>Cargando...</p>;
  } else {
    return (
      <Formik
        initialValues={{
          email: data.email,
          phone: data.phone,
          password: "",
        }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email("Debe ser un email válido")
            .required("Este campo es necesario"),
          phone: Yup.string().required("Este campo es necesario"),
          password: Yup.string().required("Este campo es necesario"),
        })}
        onSubmit={async (values, { setSubmitting }) => {
          const result = await clientsService.updateClientSelf(values);
          setRequestStatus(result);
          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <StyledForm>
            <div className="col-12">{createAlert(requestStatus)}</div>
            <div className="row ">
              <div className="col-12">
                <FormGroup
                  label="Correo electrónico"
                  name="email"
                  type="text"
                ></FormGroup>
              </div>
              <div className="col-12 ">
                <FormGroup
                  label="Teléfono celular"
                  name="phone"
                  type="text"
                ></FormGroup>
              </div>
              <div className="col-12 ">
                <FormGroup
                  label="Contraseña"
                  name="password"
                  type="text"
                ></FormGroup>
              </div>
            </div>
            <div className="row text-center my-3">
              <div className="form-group">
                <button
                  type="submit"
                  className=" btn-primary btn "
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Por favor espere" : "Actualizar datos"}
                </button>
              </div>
            </div>
          </StyledForm>
        )}
      </Formik>
    );
  }
};

export default UpdatePasswordForm;
