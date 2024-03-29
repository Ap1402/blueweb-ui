import * as Yup from "yup";
import TextAreaField from "../TextAreaField";
import SelectField from "../SelectField";
import { Formik, Form } from "formik";
import styled from "styled-components";
import createAlert from "../../../helpers/createAlert";
import { useEffect, useState } from "react";
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
        /* const report = await reportService.getReportById(props.reportId); */
        const resultCategories = await reportService.getCategories();
        setCategories(resultCategories.data);
        const resultStatuses = await reportService.getStatuses();
        setStatuses(resultStatuses.data);
        //setReportInfo(report);
        setLoading(false);
      }
    };
    getData();
    setReportInfo(props.reportId);
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
          wasCompleted: reportInfo.wasCompleted || "",
        }}
        validationSchema={Yup.object({
          categoryId: Yup.string().required("Este campo es necesario"),
          supportMessageForClient: Yup.string().required(
            "Este campo es necesario"
          ),
          wasCompleted: Yup.string(),

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
            values.wasCompleted,
            reportInfo.id
          );
          setRequestStatus(result);
          setSubmitting(false);
          props.tableRef.current && props.tableRef.current.onQueryChange();
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
                <SelectField label="Marcar como resuetlo" name="wasCompleted">
                  <option value="">
                    Seleccione si el reporte ha sido resuelto o no
                  </option>
                  <option value="0">No</option>
                  <option value="1">Sí</option>
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
                  label="Agregar un mensaje anotación para soporte"
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
