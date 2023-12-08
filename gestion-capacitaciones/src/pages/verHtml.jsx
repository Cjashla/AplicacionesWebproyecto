import React, { useState, useEffect } from 'react';

export const VerCursosHtml = (props) => {
  const [cursosGuardados2, setCursosGuardados2] = useState([]);

  useEffect(() => {
    const cursos2 = JSON.parse(localStorage.getItem('cursos2')) || [];
    setCursosGuardados2(cursos2);
  }, []);

  const handleBorrarCurso = (index) => {
    const updatedCursos2 = [...cursosGuardados2];
    updatedCursos2.splice(index, 1);
    localStorage.setItem('cursos2', JSON.stringify(updatedCursos2));
    setCursosGuardados2(updatedCursos2);
  };

  const handleBorrarTodosLosCursos = () => {
    localStorage.removeItem('cursos2');
    setCursosGuardados2([]);
  };

  return (
    <div className='ver-cursos'>
      <h2>Cursos Registrados</h2>
      {cursosGuardados2.length > 0 ? (
        <ul>
          {cursosGuardados2.map((curso2, index) => (
            <li key={index}>
              <strong>Nombre:</strong> {curso2.nombre}, <strong>Inicio:</strong>{' '}
              {curso2.inicio}, <strong>Duración:</strong> {curso2.duracion},{' '}
              <strong>Información:</strong> {curso2.informacion}
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
      <button onClick={() => props.onFormSwitch('adminhtml')}>Regresar</button>
    </div>
  );
};
