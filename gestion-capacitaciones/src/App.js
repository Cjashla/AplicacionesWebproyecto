import React, { useState } from 'react';
import './App.css';
import { Inicio } from './pages/principal';
import { IniciarSesion } from './pages/login';
import { AdminLogin } from './pages/administrador';
import { RegistroUsuario } from './pages/registro';
import { Perfil } from './pages/perfil';
import { RegistrarCssAdmin } from './pages/adminCss';
import { VerCursosCss } from './pages/verCss';
import { AceptarCursosCss } from './pages/usuarioCss';
import { RegistrarHtmlAdmin } from './pages/adminHmtl';
import { VerCursosHtml } from './pages/verHtml';
import { AceptarCursosHtml } from './pages/usuarioHtml';
import { RegistrarJavascriptAdmin } from './pages/adminJavascript';
import { VerCursosJavascript } from './pages/verJavascript';
import { AceptarCursosJavascript } from './pages/usuarioJavascript';
import { AceptarCursosTotales } from './pages/cursosAceptado';
import { Opciones } from './pages/adminOpciones';

function App() {
  const [currentForm, setCurrentForm] = useState('inicio');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };

  const components = {
    inicio: <Inicio onFormSwitch={toggleForm} />,
    iniciarSesion: <IniciarSesion onFormSwitch={toggleForm} />,
    loginAdmin: <AdminLogin onFormSwitch={toggleForm} />,
    registro: <RegistroUsuario onFormSwitch={toggleForm} />,
    perfil: <Perfil onFormSwitch={toggleForm} />,
    admincss: <RegistrarCssAdmin onFormSwitch={toggleForm} />,
    vercss: <VerCursosCss onFormSwitch={toggleForm} />,
    usuariocss: <AceptarCursosCss onFormSwitch={toggleForm} />,
    adminhtml: <RegistrarHtmlAdmin onFormSwitch={toggleForm} />,
    verhtml: <VerCursosHtml onFormSwitch={toggleForm} />,
    usuariohtml: <AceptarCursosHtml onFormSwitch={toggleForm} />,
    adminjavascript: <RegistrarJavascriptAdmin onFormSwitch={toggleForm} />,
    verjavascript: <VerCursosJavascript onFormSwitch={toggleForm} />,
    usuariojavascript: <AceptarCursosJavascript onFormSwitch={toggleForm} />,
    total: <AceptarCursosTotales onFormSwitch={toggleForm} />,
    opciones: <Opciones onFormSwitch={toggleForm} />,
  };

  const CurrentComponent = components[currentForm];

  return (
    <div className="App">
      {CurrentComponent}
    </div>
  );
}

export default App;
