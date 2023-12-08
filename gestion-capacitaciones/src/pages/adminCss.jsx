import React, { useState } from 'react';
export const RegistrarCssAdmin = (props) => {
  const [nombreCurso1, setNombreCurso1] = useState('');
  const [fechaInicio1, setFechaInicio1] = useState('');
  const [duracion1, setDuracion1] = useState('');
  const [infoCurso1, setInfoCurso1] = useState('');
  
  const handleGuardarCurso = () => {
    //valiciones
    //vacios

    if (nombreCurso1.trim() === '' || fechaInicio1.trim() === '' || duracion1.trim() === '' || infoCurso1.trim() === '') {
      alert('Por favor, complete todos los campos.');
      return;
    }
  
    // Validar la longitud de los campos
    if (nombreCurso1.length > 10 || duracion1.length > 10 || infoCurso1.length > 30) {
      alert('Asegúrese de que el nombre tenga menos de 10 caracteres, la duración menos de 10 caracteres y la información menos de 30 caracteres.');
      return;
    }
     // Mostrar alerta al registrar exitosamente
  alert('¡Curso registrado exitosamente!');
    // Crear objeto con la información del curso
    const curso1 = {
      nombre: nombreCurso1,
      inicio: fechaInicio1,
      duracion: duracion1,
      informacion: infoCurso1,
    };

    // Obtener cursos almacenados en localStorage o inicializar un arreglo vacío
    const cursosGuardados1 = JSON.parse(localStorage.getItem('cursos1')) || [];

    // Agregar el nuevo curso al arreglo
    cursosGuardados1.push(curso1);

    // Guardar el arreglo actualizado en localStorage
    localStorage.setItem('cursos1', JSON.stringify(cursosGuardados1));

    // Limpiar los campos del formulario después de guardar
    setNombreCurso1('');
    setFechaInicio1('');
    setDuracion1('');
    setInfoCurso1('');
  };

  const handleChangeNombre = (e) => {
    setNombreCurso1(e.target.value);
  };

  const handleChangeFechaInicio = (e) => {
    setFechaInicio1(e.target.value);
  };

  const handleChangeDuracion = (e) => {
    setDuracion1(e.target.value);
  };

  const handleChangeInfoCurso = (e) => {
    setInfoCurso1(e.target.value);
  };

  return (
    <div className='formulario-curso'>
      <h2>Formulario de Curso de CSS</h2>
      <form>
        <label>
          Nombre del Curso:
          <input
            type="text"
            value={nombreCurso1}
            onChange={handleChangeNombre}
          />
        </label>
        <br />
        <label>
          Fecha de Inicio:
          <input
            type="date"
            value={fechaInicio1}
            onChange={handleChangeFechaInicio}
          />
        </label>
        <br />
        <label>
          Duración:
          <input
            type="text"
            value={duracion1}
            onChange={handleChangeDuracion}
          />
        </label>
        <br />
        <label>
          Información del Curso:
          <textarea
            value={infoCurso1}
            onChange={handleChangeInfoCurso}
          ></textarea>
        </label>
        <br />
        <button type="button" onClick={handleGuardarCurso}>
          Guardar Curso
        </button>
        <button onClick={() => props.onFormSwitch('opciones')}>Regresar</button>
        <button onClick={() => props.onFormSwitch('vercss')}>Ver cursos registrados</button>
        
      </form>
    </div>
  );
};
