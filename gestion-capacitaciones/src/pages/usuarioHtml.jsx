import React, { useState, useEffect } from 'react';

export const AceptarCursosHtml = (props) => {
  const [cursosGuardados2, setCursosGuardados2] = useState([]);
  const [cursosAceptados2, setCursosAceptados2] = useState([]);

  useEffect(() => {
    const cursos2 = JSON.parse(localStorage.getItem('cursos2')) || [];
    const cursosAceptados2 = JSON.parse(localStorage.getItem('cursosAceptados2')) || [];
    setCursosGuardados2(cursos2);
    setCursosAceptados2(cursosAceptados2);
  }, []);

  const handleAceptarCurso = (cursoIndex) => {
    const cursoAceptado2 = cursosGuardados2[cursoIndex];
    const updatedCursosAceptados2 = [...cursosAceptados2, cursoAceptado2];
    localStorage.setItem('cursosAceptados2', JSON.stringify(updatedCursosAceptados2));
    setCursosAceptados2(updatedCursosAceptados2);
  };

  const handleBorrarCursoAceptado = (cursoIndex) => {
    const confirmarBorrado2 = window.confirm('¿Estás seguro que deseas eliminar este curso?');
  if (confirmarBorrado2) {
    const updatedCursosAceptados2 = [...cursosAceptados2];
    updatedCursosAceptados2.splice(cursoIndex, 1);
    localStorage.setItem('cursosAceptados2', JSON.stringify(updatedCursosAceptados2));
    setCursosAceptados2(updatedCursosAceptados2);
  }
  };

  return (
    <div className='aceptar-cursos'>
      <h2>Cursos disponibles</h2>
      {cursosGuardados2.length > 0 ? (
        <ul>
          {cursosGuardados2.map((curso, index) => (
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
      {cursosAceptados2.length > 0 ? (
        <ul>
          {cursosAceptados2.map((curso, index) => (
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
