import * as Yup from "yup";
import TextAreaField from "../TextAreaField";
import SelectField from "../SelectField";
import { Formik, Form } from "formik";
import styled from "styled-components";
import createAlert from "../../../helpers/createAlert";
import { useEffect, useState } from "react";
import Spinner from "../../Spinner/Spinner";
import reportService from "../../../services/report.service";

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CreateReport = () => {
  const [requestStatus, setRequestStatus] = useState({
    message: "",
    success: false,
    sent: false,
  });
  const [categories, setCategories] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getCategories = async () => {
      const result = await reportService.getCategories();
      setCategories(result);
      setLoading(false);
    };
    getCategories();
  }, []);

  if (!loading) {
    return (
      <Formik
        initialValues={{
          message: "",
          categoryId: "",
        }}
        validationSchema={Yup.object({
          message: Yup.string().required("Este campo es necesario"),
          categoryId: Yup.string().required("Este campo es necesario"),
        })}

        onSubmit={async (values, { setSubmitting }) => {
          const result = await reportService.registerReport(
            values.message,
            values.categoryId
          );
          setRequestStatus(result);
          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <StyledForm>
            <div className="row">
              <div className="col-10 mx-auto">{createAlert(requestStatus)}</div>

              <div className="col-10 mx-auto">
                <SelectField label="Motivo del reporte" name="categoryId">
                  <option value="">Seleccione una razón</option>
                  {categories.map((category) => {
                    return <option value={category.id}>{category.name}</option>;
                  })}
                </SelectField>
              </div>

              <div className="col-10 mx-auto">
                <TextAreaField
                  label="Descripción del reporte"
                  name="message"
                  type="text"
                ></TextAreaField>
              </div>
            </div>
            <div className="row text-center my-3">
              <div className="form-group">
                <button
                  type="submit"
                  className=" btn-primary btn "
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Por favor espere" : "Enviar reporte"}
                </button>
              </div>
            </div>
          </StyledForm>
        )}
      </Formik>
    );
  } else {
    return <Spinner></Spinner>;
  }
};

export default CreateReport;
