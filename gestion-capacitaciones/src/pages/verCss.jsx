import React, { useState, useEffect } from 'react';

export const VerCursosCss = (props) => {
    const [cursosGuardados1, setCursosGuardados1] = useState([]);

    useEffect(() => {
      const cursos1 = JSON.parse(localStorage.getItem('cursos1')) || [];
      setCursosGuardados1(cursos1);
    }, []);
  
    const handleBorrarCurso = (index) => {
      const updatedCursos1 = [...cursosGuardados1];
      updatedCursos1.splice(index, 1);
      localStorage.setItem('cursos1', JSON.stringify(updatedCursos1));
      setCursosGuardados1(updatedCursos1);
    };
  
    const handleBorrarTodosLosCursos = () => {
      localStorage.removeItem('cursos1');
      setCursosGuardados1([]);
    };
  
    return (
      <div className='ver-cursos'>
        <h2>Cursos Registrados</h2>
        {cursosGuardados1.length > 0 ? (
          <ul>
            {cursosGuardados1.map((curso1, index) => (
              <li key={index}>
                <strong>Nombre:</strong> {curso1.nombre}, <strong>Inicio:</strong>{' '}
                {curso1.inicio}, <strong>Duración:</strong> {curso1.duracion},{' '}
                <strong>Información:</strong> {curso1.informacion}
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
        <button onClick={() => props.onFormSwitch('admincss')}>Regresar</button>

      </div>
    );
  };
  

