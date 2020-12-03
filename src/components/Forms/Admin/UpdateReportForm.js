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

const UpdateReportForm = (props) => {
  const [requestStatus, setRequestStatus] = useState({
    message: "",
    success: false,
    sent: false,
  });

  const [reportInfo, setReportInfo] = useState();
  const [categories, setCategories] = useState();
  const [statuses, setStatuses] = useState();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      if (props.reportId !== undefined) {
        setLoading(true);
        const report = await reportService.getReportById(props.reportId);
        const resultCategories = await reportService.getCategories();
        setCategories(resultCategories.data);
        const resultStatuses = await reportService.getStatuses();
        setStatuses(resultStatuses.data);
        setReportInfo(report);
        setLoading(false);
      }
    };
    getData();
  }, [props.reportId]);

  if (!loading) {
    return (
      <Formik
        initialValues={{
          categoryId: reportInfo.categoryId || "",
          statusId: reportInfo.statusId || "",
          supportMessageForClient: reportInfo.supportMessageForClient || "",
          supportMessageInner: reportInfo.supportMessageInner || "",
          priorityLevel: reportInfo.priorityLevel,
        }}
        validationSchema={Yup.object({
          categoryId: Yup.string().required("Este campo es necesario"),
          supportMessageForClient: Yup.string().required(
            "Este campo es necesario"
          ),
          supportMessageInner: Yup.string(),
          statusId: Yup.string().required("Este campo es necesario"),
          priorityLevel: Yup.string().required("Este campo es necesario"),
        })}
        onSubmit={async (values, { setSubmitting }) => {
          const result = await reportService.updateReport(
            values.statusId,
            values.categoryId,
            values.supportMessageForClient,
            values.supportMessageInner,
            values.priorityLevel,
            reportInfo.id
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
                  {categories
                    ? categories.map((category) => {
                        return (
                          <option value={category.id}>{category.name}</option>
                        );
                      })
                    : ""}
                </SelectField>
              </div>

              <div className="col-10 mx-auto">
                <SelectField label="Estado del reporte" name="statusId">
                  <option value="">Seleccione una razón</option>
                  {statuses
                    ? statuses.map((status) => {
                        return <option value={status.id}>{status.name}</option>;
                      })
                    : ""}
                </SelectField>
              </div>
              <div className="col-10 mx-auto">
                <SelectField label="Nivel de prioridad" name="priorityLevel">
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
              <div className="col-10 mx-auto">
                <TextAreaField
                  label="Mensaje para el cliente"
                  name="supportMessageForClient"
                  type="text"
                ></TextAreaField>
              </div>
              <div className="col-10 mx-auto">
                <TextAreaField
                  label="Mensaje o anotaciones para soporte"
                  name="supportMessageInner"
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
                  {isSubmitting ? "Por favor espere" : "Actualizar Reporte"}
                </button>
              </div>
            </div>
          </StyledForm>
        )}
      </Formik>
    );
  } else {
    return <p>Cargando...</p>;
  }
};

export default UpdateReportForm;
