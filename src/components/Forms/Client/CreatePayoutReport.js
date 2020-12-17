import * as Yup from "yup";
import FormGroup from "../FormGroup";
import { Formik, Form } from "formik";
import styled from "styled-components";
import createAlert from "../../../helpers/createAlert";
import { useState } from "react";
import payoutReportsService from "../../../services/payoutReports.service";
import SelectField from "../SelectField";

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CreatePayoutReport = () => {
  const [requestStatus, setRequestStatus] = useState({
    message: "",
    success: false,
    sent: false,
  });

  return (
    <Formik
      initialValues={{
        transactionCode: "",
        bank: "",
        bankDestiny: "",
        accountOwnerDni: "",
        amount: "",
        accountOwnerName: "",
      }}
      validationSchema={Yup.object({
        transactionCode: Yup.string().required("Este campo es necesario"),
        bank: Yup.string().required("Este campo es necesario"),
        amount: Yup.string().required("Este campo es necesario"),

        bankDestiny: Yup.string().required("Este campo es necesario"),
        accountOwnerDni: Yup.string().required("Este campo es necesario"),
        accountOwnerName: Yup.string().required("Este campo es necesario"),
      })}
      onSubmit={async (values, { setSubmitting }) => {
        const result = await payoutReportsService.registerPayout(values);
        setRequestStatus(result);
        setSubmitting(false);
      }}
    >
      {({ isSubmitting, setFieldValue }) => (
        <StyledForm>
          <div className="row ">
            <div className="col-10 mx-auto">
              <FormGroup
                label="Número de la transacción por el banco"
                name="transactionCode"
                type="text"
              ></FormGroup>
            </div>
            <div className="col-10 mx-auto">
              <SelectField label="Banco emisor" name="bank">
                <option value="">Seleccione un banco</option>
                <option value="100%BANCO">100%BANCO</option>
                <option value="BANCAMIGA BANCO MICROFINANCIERO, C.A.">
                  BANCAMIGA BANCO MICROFINANCIERO, C.A.
                </option>
                <option value="BANCO ACTIVO BANCO COMERCIAL, C.A.">
                  BANCO ACTIVO BANCO COMERCIAL, C.A.
                </option>
                <option value="BANCO AGRICOLA">BANCO AGRICOLA</option>
                <option value="BANCO BICENTENARIO">BANCO BICENTENARIO</option>
                <option value="BANCO CARONI, C.A. BANCO UNIVERSAL">
                  BANCO CARONI, C.A. BANCO UNIVERSAL
                </option>
                <option value="BANCO DE DESARROLLO DEL MICROEMPRESARIO">
                  BANCO DE DESARROLLO DEL MICROEMPRESARIO
                </option>
                <option value="BANCO DE VENEZUELA S.A.I.C.A.">
                  BANCO DE VENEZUELA S.A.I.C.A.
                </option>
                <option value="BANCO DEL CARIBE C.A.">
                  BANCO DEL CARIBE C.A.
                </option>
                <option value="BANCO DEL PUEBLO SOBERANO C.A.">
                  BANCO DEL PUEBLO SOBERANO C.A.
                </option>
                <option value="0163">BANCO DEL TESORO</option>
                <option value="BANCO ESPIRITO SANTO, S.A.">
                  BANCO ESPIRITU SANTO, S.A.
                </option>
                <option value="BANCO EXTERIOR C.A.">BANCO EXTERIOR C.A.</option>
                <option value="BANCO INDUSTRIAL DE VENEZUELA.">
                  BANCO INDUSTRIAL DE VENEZUELA.
                </option>
                <option value="BANCO INTERNACIONAL DE DESARROLLO, C.A.">
                  BANCO INTERNACIONAL DE DESARROLLO, C.A.
                </option>
                <option value="BANCO MERCANTIL C.A.">
                  BANCO MERCANTIL C.A.
                </option>
                <option value="BANCO NACIONAL DE CREDITO">
                  BANCO NACIONAL DE CREDITO
                </option>
                <option value="BANCO OCCIDENTAL DE DESCUENTO">
                  BANCO OCCIDENTAL DE DESCUENTO.
                </option>
                <option value="BANCO PLAZA">BANCO PLAZA</option>
                <option value="BANCO PROVINCIAL BBVA">
                  BANCO PROVINCIAL BBVA
                </option>
                <option value="BANCO VENEZOLANO DE CREDITO S.A.">
                  BANCO VENEZOLANO DE CREDITO S.A.
                </option>
                <option value="BANCRECER S.A. BANCO DE DESARROLLO">
                  BANCRECER S.A. BANCO DE DESARROLLO
                </option>
                <option value="BANESCO BANCO UNIVERSAL">
                  BANESCO BANCO UNIVERSAL
                </option>
                <option value="BANFANB">BANFANB</option>
                <option value="BANGENTE">BANGENTE</option>
                <option value="BANPLUS BANCO COMERCIAL C.A">
                  BANPLUS BANCO COMERCIAL C.A
                </option>
                <option value="CITIBANK">CITIBANK.</option>
                <option value="CORP BANCA">CORP BANCA.</option>
                <option value="DELSUR BANCO UNIVERSAL">
                  DELSUR BANCO UNIVERSAL
                </option>
                <option value="FONDO COMUN">FONDO COMUN</option>
                <option value="MIBANCO BANCO DE DESARROLLO">
                  MIBANCO BANCO DE DESARROLLO, C.A.
                </option>
                <option value="SOFITASA">SOFITASA</option>
              </SelectField>
            </div>
            <div className="col-10 mx-auto">
              <SelectField label="Banco emisor" name="bankDestiny">
                <option value="">Seleccione un banco</option>
                <option value="BANCO DE VENEZUELA S.A.I.C.A.">
                  BANCO DE VENEZUELA S.A.I.C.A.
                </option>
                <option value="BANCO MERCANTIL C.A.">
                  BANCO MERCANTIL C.A.
                </option>
                <option value="BANCO NACIONAL DE CREDITO">
                  BANCO NACIONAL DE CREDITO
                </option>
                <option value="BANCO OCCIDENTAL DE DESCUENTO">
                  BANCO OCCIDENTAL DE DESCUENTO.
                </option>
                <option value="BANCO PROVINCIAL BBVA">
                  BANCO PROVINCIAL BBVA
                </option>
                <option value="BANESCO BANCO UNIVERSAL">
                  BANESCO BANCO UNIVERSAL
                </option>
              </SelectField>
            </div>
            <div className="col-10 mx-auto">
              <FormGroup
                label="Cantidad abonada"
                name="amount"
                type="text"
              ></FormGroup>
            </div>
            <div className="col-10 mx-auto">
              <FormGroup
                label="Documento de identidad del dueño de la cuenta"
                name="accountOwnerDni"
                type="text"
              ></FormGroup>
            </div>
            <div className="col-10 mx-auto">
              <FormGroup
                label="Nombre del dueño de la cuenta"
                name="accountOwnerName"
                type="text"
              ></FormGroup>
            </div>
          </div>

          <div className="row text-center my-3">
            <div className="form-group">
              <div className="col-12">{createAlert(requestStatus)}</div>

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

export default CreatePayoutReport;
