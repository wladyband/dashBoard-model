import React from 'react';
import '../css/navbar.css'
class Navbar extends React.Component {


  render() {
    return (
      <div>
        <nav className="navbar navbar-dark bg-dark fixed-top">
          <div className="container-fluid d-flex justify-content-between">
            <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <a className="navbar-brand" href="#">Coutinho Construções</a>

           {/* Esse trecho de código é temporário */}
            <a className="navbar-brand" href="#" style={{width: '25%'}}></a>
            <a className="navbar-brand" href="#" style={{width: '25%'}}></a>
            <a className="navbar-brand" href="#" style={{width: '25%'}}></a>
           {/* Esse trecho de código é temporário */} 
            
            <div className="offcanvas offcanvas-start text-bg-dark" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Coutinho Construções</h5>
                <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <div className="offcanvas-body">
                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                  <li className="nav-item dropdown ">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                       <i className="bi bi-house-door icon-size" ></i>Obras
                    </a>
                    <ul className="dropdown-menu dropdown-menu-dark">
                      <li><a className="dropdown-item" href="#"></a></li>
                      <li><a className="dropdown-item" href="#"></a></li>
                      <li><a className="dropdown-item" href="#"></a></li>
                      <li><a className="dropdown-item" href="#"></a></li>
                    </ul>
                  </li>
                
                <li className="nav-item dropdown ">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <i className="bi bi-journal-bookmark icon-size" ></i> Etapas
                    </a>
                    <ul className="dropdown-menu dropdown-menu-dark">
                      <li><a className="dropdown-item" href="#">Fundação</a></li>
                      <li><a className="dropdown-item" href="#">Estrutura</a></li>
                      <li><a className="dropdown-item" href="#">Cobertura</a></li>
                      <li><a className="dropdown-item" href="#">Piso</a></li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <i className="bi bi-clipboard icon-size" ></i> Relatórios</a>
                  </li>
                </ul>
                <form className="d-flex mt-3" role="search">
                  <input className="form-control me-2" type="search" placeholder="Busca rapida" aria-label="Search"/>
                  <button className="btn btn-success" type="submit">Localizar</button>
                </form>
              </div>
            </div>
          </div>          
        </nav>
      </div>
    );
  }
}

export default Navbar;
