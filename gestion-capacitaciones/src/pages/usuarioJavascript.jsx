import React, { useState, useEffect } from 'react';

export const AceptarCursosJavascript = (props) => {
  const [cursosGuardados3, setCursosGuardados3] = useState([]);
  const [cursosAceptados3, setCursosAceptados3] = useState([]);

  useEffect(() => {
    const cursos3 = JSON.parse(localStorage.getItem('cursos3')) || [];
    const cursosAceptados3 = JSON.parse(localStorage.getItem('cursosAceptados3')) || [];
    setCursosGuardados3(cursos3);
    setCursosAceptados3(cursosAceptados3);
  }, []);

  const handleAceptarCurso = (cursoIndex) => {
    const cursoAceptado3 = cursosGuardados3[cursoIndex];
    const updatedCursosAceptados3 = [...cursosAceptados3, cursoAceptado3];
    localStorage.setItem('cursosAceptados3', JSON.stringify(updatedCursosAceptados3));
    setCursosAceptados3(updatedCursosAceptados3);
  };

  const handleBorrarCursoAceptado = (cursoIndex) => {
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
      <h2>Cursos disponibles</h2>
      {cursosGuardados3.length > 0 ? (
        <ul>
          {cursosGuardados3.map((curso, index) => (
            <li key={index}>
              <strong>Nombre:</strong> {curso.nombre}, <strong>Inicio:</strong>{' '}
              {curso.inicio}, <strong>Duración:</strong> {curso.duracion},{' '}
              <strong>Información:</strong> {curso.informacion}
              <button onClick={() => handleAceptarCurso(index)}>Aceptar</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No hay cursos registrados.</p>
      )}

      <h2>Cursos Aceptados</h2>
      {cursosAceptados3.length > 0 ? (
        <ul>
          {cursosAceptados3.map((curso, index) => (
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
      <button onClick={() => props.onFormSwitch('perfil')}>Regresar</button>
    </div>
  );
};
