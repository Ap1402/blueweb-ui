import * as Yup from "yup";
import FormGroup from "../FormGroup";
import { Formik, Form } from "formik";
import styled from "styled-components";
import userService from "../../../services/user.service";
import createAlert from "../../../helpers/createAlert";
import { useState } from "react";
import Spinner from "../../Spinner/Spinner";
import SelectField from "../SelectField";

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const UpdateUserForm = (props) => {
  const [requestStatus, setRequestStatus] = useState({
    message: "",
    success: false,
    sent: false,
  });

  return (
    <Formik
      initialValues={{
        username: props.userInfo ? props.userInfo.username : "",
        isActive: props.userInfo.isActive ? "1" : "0",
      }}
      validationSchema={Yup.object({
        username: Yup.string().required("Este campo es necesario"),
        isActive: Yup.boolean().required("Este campo es necesario"),
      })}
      onSubmit={async (values, { setSubmitting }) => {
        const result = await userService.updateUser(values, props.userInfo.id);
        setRequestStatus(result);
        setSubmitting(false);
        props.tableRef.current && props.tableRef.current.onQueryChange();
      }}
    >
      {({ isSubmitting }) => (
        <StyledForm>
          <div className="row ">
            <div className="col-12">{createAlert(requestStatus)}</div>

            <div className="col-10 mx-auto">
              <FormGroup
                label="Nombre de usuario"
                name="username"
                type="text"
              ></FormGroup>
            </div>
            <div className="col-10 mx-auto">
              <SelectField label="Usuario activo" name="isActive">
                <option value="">Seleccione una opción</option>
                <option value="1">Sí</option>
                <option value="0">No</option>
              </SelectField>
            </div>
          </div>
          <div className="row text-center my-3">
            <div className="form-group">
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
        </StyledForm>
      )}
    </Formik>
  );
};

export default UpdateUserForm;
