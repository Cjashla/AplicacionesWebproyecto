import React, { useState } from 'react';

export const RegistrarJavascriptAdmin = (props) => {
  const [nombreCurso3, setNombreCurso3] = useState('');
  const [fechaInicio3, setFechaInicio3] = useState('');
  const [duracion3, setDuracion3] = useState('');
  const [infoCurso3, setInfoCurso3] = useState('');

  const handleGuardarCurso = () => {
    //valiciones
    //vacios

    if (nombreCurso3.trim() === '' || fechaInicio3.trim() === '' || duracion3.trim() === '' || infoCurso3.trim() === '') {
      alert('Por favor, complete todos los campos.');
      return;
    }
  
    // Validar la longitud de los campos
    if (nombreCurso3.length > 10 || duracion3.length > 10 || infoCurso3.length > 30) {
      alert('Asegúrese de que el nombre tenga menos de 10 caracteres, la duración menos de 10 caracteres y la información menos de 30 caracteres.');
      return;
    }
     // Mostrar alerta al registrar exitosamente
  alert('¡Curso registrado exitosamente!');
    const curso3 = {
      nombre: nombreCurso3,
      inicio: fechaInicio3,
      duracion: duracion3,
      informacion: infoCurso3,
    };

    const cursosGuardados3 = JSON.parse(localStorage.getItem('cursos3')) || [];

    cursosGuardados3.push(curso3);

    localStorage.setItem('cursos3', JSON.stringify(cursosGuardados3));

    setNombreCurso3('');
    setFechaInicio3('');
    setDuracion3('');
    setInfoCurso3('');
  };

  const handleChangeNombre = (e) => {
    setNombreCurso3(e.target.value);
  };

  const handleChangeFechaInicio = (e) => {
    setFechaInicio3(e.target.value);
  };

  const handleChangeDuracion = (e) => {
    setDuracion3(e.target.value);
  };

  const handleChangeInfoCurso = (e) => {
    setInfoCurso3(e.target.value);
  };

  return (
    <div className='formulario-curso'>
      <h2>Formulario de Curso de Javascript</h2>
      <form>
        <label>
          Nombre del Curso:
          <input
            type="text"
            value={nombreCurso3}
            onChange={handleChangeNombre}
          />
        </label>
        <br />
        <label>
          Fecha de Inicio:
          <input
            type="date"
            value={fechaInicio3}
            onChange={handleChangeFechaInicio}
          />
        </label>
        <br />
        <label>
          Duración:
          <input
            type="text"
            value={duracion3}
            onChange={handleChangeDuracion}
          />
        </label>
        <br />
        <label>
          Información del Curso:
          <textarea
            value={infoCurso3}
            onChange={handleChangeInfoCurso}
          ></textarea>
        </label>
        <br />
        <button type="button" onClick={handleGuardarCurso}>
          Guardar Curso
        </button>
        <button onClick={() => props.onFormSwitch('opciones')}>Regresar</button>
        <button onClick={() => props.onFormSwitch('verjavascript')}>Ver cursos registrados</button>
      </form>
    </div>
  );
};
