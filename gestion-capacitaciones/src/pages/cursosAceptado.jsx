import React, { useState, useEffect } from 'react';

export const AceptarCursosTotales = (props) => {
  
    const [cursosGuardados1, setCursosGuardados1] = useState([]);
    const [cursosAceptados1, setCursosAceptados1] = useState([]);
  
    useEffect(() => {
      const cursos1 = JSON.parse(localStorage.getItem('cursos1')) || [];
      const cursosAceptados1 = JSON.parse(localStorage.getItem('cursosAceptados1')) || [];
      setCursosGuardados1(cursos1);
      setCursosAceptados1(cursosAceptados1);
    }, []);
  
  
    const handleBorrarCursoAceptado = (cursoIndex) => {
      const confirmarBorrado1 = window.confirm('¿Estás seguro que deseas eliminar este curso?');
  if (confirmarBorrado1) {
    const updatedCursosAceptados1 = [...cursosAceptados1];
    updatedCursosAceptados1.splice(cursoIndex, 1);
    localStorage.setItem('cursosAceptados1', JSON.stringify(updatedCursosAceptados1));
    setCursosAceptados1(updatedCursosAceptados1);
  }
    };
  // -------------------------------------
  const [cursosGuardados2, setCursosGuardados2] = useState([]);
  const [cursosAceptados2, setCursosAceptados2] = useState([]);

  useEffect(() => {
    const cursos2 = JSON.parse(localStorage.getItem('cursos2')) || [];
    const cursosAceptados2 = JSON.parse(localStorage.getItem('cursosAceptados2')) || [];
    setCursosGuardados2(cursos2);
    setCursosAceptados2(cursosAceptados2);
  }, []);


  const handleBorrarCursoAceptado2 = (cursoIndex) => {
    const confirmarBorrado2 = window.confirm('¿Estás seguro que deseas eliminar este curso?');
  if (confirmarBorrado2) {
    const updatedCursosAceptados2 = [...cursosAceptados2];
    updatedCursosAceptados2.splice(cursoIndex, 1);
    localStorage.setItem('cursosAceptados2', JSON.stringify(updatedCursosAceptados2));
    setCursosAceptados2(updatedCursosAceptados2);
  }
  };
  //--------------------------------------------
  const [cursosGuardados3, setCursosGuardados3] = useState([]);
  const [cursosAceptados3, setCursosAceptados3] = useState([]);

  useEffect(() => {
    const cursos3 = JSON.parse(localStorage.getItem('cursos3')) || [];
    const cursosAceptados3 = JSON.parse(localStorage.getItem('cursosAceptados3')) || [];
    setCursosGuardados3(cursos3);
    setCursosAceptados3(cursosAceptados3);
  }, []);



  const handleBorrarCursoAceptado3 = (cursoIndex) => {
    const confirmarBorrado3 = window.confirm('¿Estás seguro que deseas eliminar este curso?');
  if (confirmarBorrado3) {
    const updatedCursosAceptados3 = [...cursosAceptados3];
    updatedCursosAceptados3.splice(cursoIndex, 1);
    localStorage.setItem('cursosAceptados3', JSON.stringify(updatedCursosAceptados3));
    setCursosAceptados3(updatedCursosAceptados3);
  }
  };

    return (
      <div className='aceptar-cursos'>
  
        <h2>Cursos Aceptados de Css por usuario</h2>
        {cursosAceptados1.length > 0 ? (
          <ul>
            {cursosAceptados1.map((curso, index) => (
              <li key={index}>
                <strong>Nombre:</strong> {curso.nombre}, <strong>Inicio:</strong>{' '}
                {curso.inicio}, <strong>Duración:</strong> {curso.duracion},{' '}
                <strong>Información:</strong> {curso.informacion}
                <button onClick={() => handleBorrarCursoAceptado(index)}>Eliminar</button>
              </li>
            ))}
          </ul>
        ) : (
          <p>No hay cursos aceptados.</p>
        )}
        {/* ---------------------- */}
        <h2>Cursos Aceptados de html por usuario</h2>
      {cursosAceptados2.length > 0 ? (
        <ul>
          {cursosAceptados2.map((curso, index) => (
            <li key={index}>
              <strong>Nombre:</strong> {curso.nombre}, <strong>Inicio:</strong>{' '}
              {curso.inicio}, <strong>Duración:</strong> {curso.duracion},{' '}
              <strong>Información:</strong> {curso.informacion}
              <button onClick={() => handleBorrarCursoAceptado2(index)}>Eliminar</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No hay cursos aceptados.</p>
      )}
      {/* ------------------ */}
      <h2>Cursos Aceptados de Javascript por usuario</h2>
      {cursosAceptados3.length > 0 ? (
        <ul>
          {cursosAceptados3.map((curso, index) => (
            <li key={index}>
              <strong>Nombre:</strong> {curso.nombre}, <strong>Inicio:</strong>{' '}
              {curso.inicio}, <strong>Duración:</strong> {curso.duracion},{' '}
              <strong>Información:</strong> {curso.informacion}
              <button onClick={() => handleBorrarCursoAceptado3(index)}>Eliminar</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No hay cursos aceptados.</p>
      )}
      <button onClick={() => props.onFormSwitch('opciones')}>Regresar</button>
      </div>
    );  
};




