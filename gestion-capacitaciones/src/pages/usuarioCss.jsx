import React, { useState, useEffect } from 'react';

export const AceptarCursosCss = (props) => {
    const [cursosGuardados1, setCursosGuardados1] = useState([]);
    const [cursosAceptados1, setCursosAceptados1] = useState([]);
  
    useEffect(() => {
      const cursos1 = JSON.parse(localStorage.getItem('cursos1')) || [];
      const cursosAceptados1 = JSON.parse(localStorage.getItem('cursosAceptados1')) || [];
      setCursosGuardados1(cursos1);
      setCursosAceptados1(cursosAceptados1);
    }, []);
  
    const handleAceptarCurso = (cursoIndex) => {
      const cursoAceptado1 = cursosGuardados1[cursoIndex];
      const updatedCursosAceptados1 = [...cursosAceptados1, cursoAceptado1];
      localStorage.setItem('cursosAceptados', JSON.stringify(updatedCursosAceptados1));
      setCursosAceptados1(updatedCursosAceptados1);
    };
  
    const handleBorrarCursoAceptado = (cursoIndex) => {
      const confirmarBorrado1 = window.confirm('¿Estás seguro que deseas eliminar este curso?');
  if (confirmarBorrado1) {
    const updatedCursosAceptados1 = [...cursosAceptados1];
    updatedCursosAceptados1.splice(cursoIndex, 1);
    localStorage.setItem('cursosAceptados1', JSON.stringify(updatedCursosAceptados1));
    setCursosAceptados1(updatedCursosAceptados1);
  }
    };
  
    return (
      <div className='aceptar-cursos'>
        <h2>Cursos disponibles</h2>
        {cursosGuardados1.length > 0 ? (
          <ul>
            {cursosGuardados1.map((curso, index) => (
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
        <button onClick={() => props.onFormSwitch('perfil')}>Regresar</button>
        
      </div>
    );  
};


