import {Link} from 'react-router-dom'

const ClientPanelSidebar = () => {
  return (
    <ul
      className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
      id="accordionSidebar"
    >
      <Link href="/admin">
        <a className="sidebar-brand d-flex align-items-center justify-content-center">
          <div className="sidebar-brand-icon rotate-n-15">
            <img src="/images/logo.png" style={{ width: "50px" }}></img>
          </div>
          <div className="sidebar-brand-text mx-3">BlueWeb</div>
        </a>
      </Link>

      <hr className="sidebar-divider my-0" />

      <li className="nav-item active">
        <a className="nav-link" href="index.html">
          <i className="fas fa-fw fa-tachometer-alt"></i>
          <span>Inicio</span>
        </a>
      </li>

      <hr className="sidebar-divider" />

      <div className="sidebar-heading">Clientes</div>

      <li className="nav-item">
        <a
          className="nav-link collapsed"
          href="#"
          data-toggle="collapse"
          data-target="#collapseTwo"
          aria-expanded="true"
          aria-controls="collapseTwo"
        >
          <i className="fas fa-plus-square "></i>
          <span>Creacion/edición</span>
        </a>
        <div
          id="collapseTwo"
          className="collapse"
          aria-labelledby="headingTwo"
          data-parent="#accordionSidebar"
        >
          <div className="bg-white py-2 collapse-inner rounded">
            <h6 className="collapse-header">Creación/edicion de clientes:</h6>
            <Link href="/admin/clientes/">
              <a className="collapse-item">Ver clientes</a>
            </Link>
            <Link href="/admin/clientes/crear">
              <a className="collapse-item">Agregar cliente</a>
            </Link>
            <Link href="/admin/clientes/modificar">
              <a className="collapse-item">Modificar clientes</a>
            </Link>
          </div>
        </div>
      </li>
      <hr className="sidebar-divider" />

      <div className="sidebar-heading">Facturación</div>

      <li className="nav-item">
        <a className="nav-link" href="tables.html">
          <i className="fas fa-fw fa-table"></i>
          <span>Tables</span>
        </a>
      </li>

      <hr className="sidebar-divider" />

      <div className="sidebar-heading">Planes</div>

      <li className="nav-item">
        <Link href="/admin/planes">
          <a className="nav-link">
            <i className="fas fa-fw fa-table"></i>
            <span>Ver Planes</span>
          </a>
        </Link>
        <Link href="/admin/planes/editar">
          <a className="nav-link">
            <i className="fas fa-fw fa-table"></i>
            <span>Editar Planes</span>
          </a>
        </Link>
      </li>
      <hr className="sidebar-divider" />

      <div className="sidebar-heading">Factibilidad</div>
      <li className="nav-item">
        <Link href="/admin/factibilidad/">
          <a className="nav-link">
            <i className="fas fa-fw fa-table"></i>
            <span>Solicitudes de factibilidad</span>
          </a>
        </Link>
      </li>

      <hr className="sidebar-divider d-none d-md-block" />

      <div className="text-center d-none d-md-inline">
        <button className="rounded-circle border-0" id="sidebarToggle"></button>
      </div>
    </ul>
  );
};

export default ClientPanelSidebar;
