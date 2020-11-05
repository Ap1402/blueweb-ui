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
`;

const RequestFactibility = ({ registerRequest }) => {

  const onSelectCustomerHandler = (coordenades, setFieldValue) => {
    setFieldValue('coordenades', coordenades);
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
        coordenades: Yup.string().required("Este campo es necesario"),
        requesterName: Yup.string().required("Este campo es necesario"),
        requesterPhone: Yup.string().required("Este campo es necesario"),
        requesterEmail: Yup.string()
          .email("Debe ser un email válido")
          .required("Este campo es necesario"),
      })}
      onSubmit={async (values, { setSubmitting}) => {
        const result = await registerRequest(values);
        console.log(result)
        setSubmitting(false);
      }}
    >
      {({ isSubmitting, setFieldValue }) => (
        <StyledForm>
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

          <Map 
          changeCoordenades={coordenades => onSelectCustomerHandler(coordenades, setFieldValue)}
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
