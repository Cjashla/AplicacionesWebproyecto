import React, { useState } from 'react';

export const RegistrarHtmlAdmin = (props) => {
  const [nombreCurso2, setNombreCurso2] = useState('');
  const [fechaInicio2, setFechaInicio2] = useState('');
  const [duracion2, setDuracion2] = useState('');
  const [infoCurso2, setInfoCurso2] = useState('');

  const handleGuardarCurso = () => {
    //valiciones
    //vacios

    if (nombreCurso2.trim() === '' || fechaInicio2.trim() === '' || duracion2.trim() === '' || infoCurso2.trim() === '') {
      alert('Por favor, complete todos los campos.');
      return;
    }
  
    // Validar la longitud de los campos
    if (nombreCurso2.length > 10 || duracion2.length > 10 || infoCurso2.length > 30) {
      alert('Asegúrese de que el nombre tenga menos de 10 caracteres, la duración menos de 10 caracteres y la información menos de 30 caracteres.');
      return;
    }
     // Mostrar alerta al registrar exitosamente
  alert('¡Curso registrado exitosamente!');
    const curso2 = {
      nombre: nombreCurso2,
      inicio: fechaInicio2,
      duracion: duracion2,
      informacion: infoCurso2,
    };

    const cursosGuardados2 = JSON.parse(localStorage.getItem('cursos2')) || [];

    cursosGuardados2.push(curso2);

    localStorage.setItem('cursos2', JSON.stringify(cursosGuardados2));

    setNombreCurso2('');
    setFechaInicio2('');
    setDuracion2('');
    setInfoCurso2('');
  };

  const handleChangeNombre = (e) => {
    setNombreCurso2(e.target.value);
  };

  const handleChangeFechaInicio = (e) => {
    setFechaInicio2(e.target.value);
  };

  const handleChangeDuracion = (e) => {
    setDuracion2(e.target.value);
  };

  const handleChangeInfoCurso = (e) => {
    setInfoCurso2(e.target.value);
  };

  return (
    <div className='formulario-curso'>
      <h2>Formulario de Curso de Html</h2>
      <form>
        <label>
          Nombre del Curso:
          <input
            type="text"
            value={nombreCurso2}
            onChange={handleChangeNombre}
          />
        </label>
        <br />
        <label>
          Fecha de Inicio:
          <input
            type="date"
            value={fechaInicio2}
            onChange={handleChangeFechaInicio}
          />
        </label>
        <br />
        <label>
          Duración:
          <input
            type="text"
            value={duracion2}
            onChange={handleChangeDuracion}
          />
        </label>
        <br />
        <label>
          Información del Curso:
          <textarea
            value={infoCurso2}
            onChange={handleChangeInfoCurso}
          ></textarea>
        </label>
        <br />
        <button type="button" onClick={handleGuardarCurso}>
          Guardar Curso
        </button>
        <button onClick={() => props.onFormSwitch('opciones')}>Regresar</button>
        <button onClick={() => props.onFormSwitch('verhtml')}>Ver cursos registrados</button>
      </form>
    </div>
  );
};
