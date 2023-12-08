import React from 'react';

export const Opciones = (props) => {


  return (
      <body>
        <div className="banner">
          <div className="banner-contenedor">
            <div className="banner-contenido banner1">
              <h1 className="promocion-titulo">Gestionar cursos de css</h1>
              <p className="promocion-texto">Crea y elimina los cursos de css</p>
              <button onClick={() => props.onFormSwitch('admincss')}>Registrar cursos de css</button>
            </div>
            <div className="banner-contenido banner2">
              <h1 className="promocion-titulo">Gestionar cursos de html</h1>
              <p className="promocion-texto">Elimina curso de html</p>
              <button onClick={() => props.onFormSwitch('adminhtml')}>Registrar cursos de html </button>
            </div>
            <div className="banner-contenido banner3">
              <h1 className="promocion-titulo">Gestionar cursos de javascript</h1>
              <p className="promocion-texto">Elimina curso de javascript</p>
              <button onClick={() => props.onFormSwitch('adminjavascript')}>Registrar cursos de javascript </button>
            </div>
            <div className="banner-contenido banner4">
              <h1 className="promocion-titulo">Gestionar cursos registrados por el usuario</h1>
              <p className="promocion-texto">Elimina curso registrados por el usuario</p>
              <button onClick={() => props.onFormSwitch('total')}>Registrar cursos de javascript </button>
            </div>
            <button onClick={() => props.onFormSwitch('loginAdmin')}>Cerrar sesión</button>
          </div>
        </div>
      </body>
  );
}
