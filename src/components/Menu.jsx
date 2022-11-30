import { Nav, NavDropdown } from "react-bootstrap";
//import { Link } from "react-router-dom";


function Menu(){

    return(
        <Nav variant="pills" className="justify-content-end" >
      <Nav.Item>
        <Nav.Link  href="#/">
          Pagina de Inicio
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link  href="#/contacto">
          Pagina de Contacto
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#/pacientes">
          Pagina de Pacientes
        </Nav.Link>
      </Nav.Item>
      <NavDropdown title="Dropdown" id="nav-dropdown">
        <NavDropdown.Item href="#/pacientes">Pacientes</NavDropdown.Item>
        <NavDropdown.Item href="#/">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#/">Something else here</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#/">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    );
    
    
}
export {Menu}