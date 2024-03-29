import * as Yup from "yup";
import FormGroup from "../FormGroup";
import { Formik, Form } from "formik";
import styled from "styled-components";
import Map from "../../Maps/Map";

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h2{
    font-size:20px;
  }
`;

const RequestFactibility = ({ registerRequest }) => {
  const onSelectCustomerHandler = (coordenades, setFieldValue) => {
    setFieldValue("coordenades", coordenades);
  };

  return (
    <Formik
      initialValues={{
        coordenades: "",
        requesterName: "",
        requesterPhone: "",
        requesterEmail: "",
      }}
      validationSchema={Yup.object({
        coordenades: Yup.string().required("Es necesario designar unas coordenadas, seleccione su ubicación en el mapa"),
        requesterName: Yup.string().required("Es necesario el nombre del solicitante"),
        requesterPhone: Yup.string().required("Es necesario su número telefónico para ponernos en contacto con usted"),
        requesterEmail: Yup.string()
          .email("Debe ser un email válido")
          .required("Es necesario su correo electrónico para ponernos en contacto con usted"),
      })}
      onSubmit={async (values, { setSubmitting }) => {
        await registerRequest(values);
        setSubmitting(false);
      }}
    >
      {({ isSubmitting, setFieldValue }) => (
        <StyledForm className="container">
          <div className="row ">
            <div className="col-12 col-lg-6">
              <FormGroup
                label="Nombre del solicitante"
                name="requesterName"
                type="text"
              ></FormGroup>
            </div>
            <div className="col-12 col-lg-6">
              <FormGroup
                label="Coordenadas"
                name="coordenades"
                type="text"
                disabled
              ></FormGroup>
            </div>
          </div>
          <div className="row ">
            <div className="col-12 col-lg-6">
              <FormGroup
                label="Teléfono"
                name="requesterPhone"
                type="text"
              ></FormGroup>
            </div>
            <div className="col-12 col-lg-6">
              <FormGroup
                label="Correo"
                name="requesterEmail"
                type="text"
              ></FormGroup>
            </div>
          </div>
          <h2>Busque su ubicación para seleccionar sus coordenadas</h2>
          <Map
            changeCoordenades={(coordenades) =>
              onSelectCustomerHandler(coordenades, setFieldValue)
            }
          ></Map>

          <div className="row text-center my-3">
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
        </StyledForm>
      )}
    </Formik>
  );
};

export default RequestFactibility;
