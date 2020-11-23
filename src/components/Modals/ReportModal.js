import { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import reportService from "../../services/report.service";

function ReportModal(props) {
    const [reportInfo, setReportInfo]= useState();
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        const getData = async ()=>{
            const report = reportService.getReportById(1);
            setReportInfo(report.data);
            setLoading(!loading);            
        };
        getData();   
        console.log('hola')
    },[props.onHide]); 

  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter centered">
          Información del reporte
        </Modal.Title>
      </Modal.Header>
      {loading?(
          <Modal.Body>Cargando...</Modal.Body>

      ):
      <Modal.Body>{reportInfo}</Modal.Body>

      }
    </Modal>
  );
}

export default ReportModal;
