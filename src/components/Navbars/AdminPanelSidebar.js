import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledUl = styled.ul`
  background-color: #243147;
`;

const ClientPanelSidebar = ({ pendingMessages, pendingRequests }) => {
  return (
    <StyledUl
      className="navbar-nav  sidebar sidebar-dark accordion"
      id="accordionSidebar"
    >
      <Link to="/admin">
        <a className="sidebar-brand d-flex align-items-center justify-content-center">
          <div className="sidebar-brand-icon">
            <img
              src="/images/icons/BluewebLogoWhite.png"
              style={{ width: "50px" }}
            ></img>
          </div>
          <div className="sidebar-brand-text mx-3">
            <img
              style={{ width: "100px" }}
              src="/images/icons/Blueweb-letters.png"
            ></img>
          </div>
        </a>
      </Link>

      <hr className="sidebar-divider my-0" />

      <li className="nav-item active">
        <Link className="nav-link" to="index.html" className="nav-link">
          <i className="fas fa-fw fa-tachometer-alt"></i>
          <span>Inicio</span>
        </Link>
      </li>

      <hr className="sidebar-divider" />

      <div className="sidebar-heading">Clientes</div>

      <li className="nav-item">
        <a
          className="nav-link collapsed"
          to="#"
          data-toggle="collapse"
          data-target="#collapseTwo"
          aria-expanded="true"
          aria-controls="collapseTwo"
        >
          <i className="fas fa-people-square "></i>
          <span>Creacion/edición</span>
        </a>
        <div
          id="collapseTwo"
          className="collapse"
          aria-labelledby="headingTwo"
          data-parent="#accordionSidebar"
        >
          <div className="bg-white py-2 collapse-inner rounded">
            <h6 className="collapse-header">Seccion de clientes:</h6>
            <Link to="/admin/clientes/" className="collapse-item">
              Ver clientes
            </Link>
            <Link to="/admin/clientes/crear" className="collapse-item">
              Agregar cliente
            </Link>
          </div>
        </div>
      </li>

      <hr className="sidebar-divider" />

      <div className="sidebar-heading">Factibilidad</div>
      <li className="nav-item">
        <Link to="/admin/factibilidad/" className="nav-link">
          <i className="fas fa-fw fa-table"></i>
          <span>
            Ver solicitudes
            {pendingRequests ? (
              <span className="badge badge-danger badge-counter">
                {pendingRequests}
              </span>
            ) : (
              ""
            )}
          </span>
        </Link>
      </li>
      <hr className="sidebar-divider" />
      <div className="sidebar-heading">Mensajes de Contacto</div>
      <li className="nav-item">
        <Link to="/admin/mensajes/" className="nav-link">
          <i className="fas fa-fw fa-table"></i>
          <span>
            Ver Mensajes Pendientes
            {pendingMessages !== 0 && (
              <span className="badge badge-danger badge-counter">
                {pendingMessages}
              </span>
            )}
          </span>
        </Link>

        <Link to="/admin/formularios-chat/" className="nav-link">
          <i className="fas fa-fw fa-table"></i>
          <span>Ver formularios de chat</span>
        </Link>
      </li>
      <hr className="sidebar-divider d-none d-md-block" />

      <div className="sidebar-heading">Usuarios</div>

      <li className="nav-item">
        <a
          className="nav-link collapsed"
          to="#"
          data-toggle="collapse"
          data-target="#collapseUser"
          aria-expanded="true"
          aria-controls="collapseUser"
        >
          <i className="fas fa-plus-square "></i>
          <span>Creacion/edición</span>
        </a>
        <div
          id="collapseUser"
          className="collapse"
          aria-labelledby="headingUser"
          data-parent="#accordionSidebar"
        >
          <div className="bg-white py-2 collapse-inner rounded">
            <h6 className="collapse-header">Opciones de usuario:</h6>
            <Link to="/admin/usuarios/" className="collapse-item">
              Ver/modificar usuarios
            </Link>
            <Link to="/admin/usuarios/crear" className="collapse-item">
              Crear usuario
            </Link>
          </div>
        </div>
      </li>
      <hr className="sidebar-divider d-none d-md-block" />
      <div className="sidebar-heading">Reportes de problemas</div>

      <li className="nav-item">
        <Link to="/admin/reportes" className="nav-link">
          <i className="fas fa-fw fa-table"></i>
          <span>Reportes</span>
        </Link>
      </li>
      <hr className="sidebar-divider d-none d-md-block" />
      <div className="sidebar-heading">Pagos reportados</div>

      <li className="nav-item">
        <Link to="/admin/pagos" className="nav-link">
          <i className="fas fa-fw fa-table"></i>
          <span>Reportes de pago</span>
        </Link>
      </li>
      <hr className="sidebar-divider d-none d-md-block" />

      <div className="sidebar-heading">Configuración</div>

      <li className="nav-item">
        <Link to="/admin/reportes/categorias" className="nav-link">
          <i className="fas fa-fw fa-table"></i>
          <span>Estados y categorias de reporte</span>
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/admin/pagos/cuentas" className="nav-link">
          <i className="fas fa-fw fa-money-check-alt"></i>
          <span>Cuentas de banco</span>
        </Link>
      </li>

      <div className="text-center d-none d-md-inline">
        <button className="rounded-circle border-0" id="sidebarToggle"></button>
      </div>
    </StyledUl>
  );
};

export default ClientPanelSidebar;
