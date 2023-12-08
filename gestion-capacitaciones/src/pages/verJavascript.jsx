import React, { useState, useEffect } from 'react';

export const VerCursosJavascript = (props) => {
  const [cursosGuardados3, setCursosGuardados3] = useState([]);

  useEffect(() => {
    const cursos3 = JSON.parse(localStorage.getItem('cursos3')) || [];
    setCursosGuardados3(cursos3);
  }, []);

  const handleBorrarCurso = (index) => {
    const updatedCursos3 = [...cursosGuardados3];
    updatedCursos3.splice(index, 1);
    localStorage.setItem('cursos3', JSON.stringify(updatedCursos3));
    setCursosGuardados3(updatedCursos3);
  };

  const handleBorrarTodosLosCursos = () => {
    localStorage.removeItem('cursos3');
    setCursosGuardados3([]);
  };

  return (
    <div className='ver-cursos'>
      <h2>Cursos Registrados</h2>
      {cursosGuardados3.length > 0 ? (
        <ul>
          {cursosGuardados3.map((curso3, index) => (
            <li key={index}>
              <strong>Nombre:</strong> {curso3.nombre}, <strong>Inicio:</strong>{' '}
              {curso3.inicio}, <strong>Duración:</strong> {curso3.duracion},{' '}
              <strong>Información:</strong> {curso3.informacion}
              <button onClick={() => handleBorrarCurso(index)}>Eliminar</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No hay cursos registrados.</p>
      )}
      <button type="button" onClick={handleBorrarTodosLosCursos}>
        Borrar Todos los Cursos
      </button>
      <button onClick={() => props.onFormSwitch('adminjavascript')}>Regresar</button>
    </div>
  );
};
