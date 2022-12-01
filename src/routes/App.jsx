
import { Container } from 'react-bootstrap';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { ContactoPage } from '../pages/ContactoPage';
import { HomePage } from '../pages/HomePage';
import { Menu } from '../components/Menu';
import { NotFound } from '../pages/NotFound';
import { PacientePage } from '../pages/PacientesPage';
import { PacienteDetalle } from '../pages/PacienteDetalle';
import { PacienteForm } from '../pages/PacienteForm';

function App() {
  return (
    <Container className='mt-5'>
    <Menu/>
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/contacto" element={<ContactoPage/>}/>
        <Route path="/pacientes" element={<PacientePage/>}/>
        <Route path="/pacientes/registrar" element={<PacienteForm/>}/>
        <Route path="/pacientes/:id" element={<PacienteDetalle/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </HashRouter>
    </Container>   
   
  );
}

export default App;
