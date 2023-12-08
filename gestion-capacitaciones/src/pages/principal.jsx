import React from 'react';

export const Inicio = (props) => {
  return (
    <div>
      <header>
        <nav>
          <div>
            <center>
              <img src="https://www.uleam.edu.ec/wp-content/uploads/2012/09/LOGO-ULEAM-VERTICAL.png" alt="Logo de la Universidad" className="logo" />
            </center>
          </div>
          <ul>
            <center>
            <button onClick={() => props.onFormSwitch('inicio')}>Capacitaciones Uleam</button>
            <button onClick={() => props.onFormSwitch('registro')}>Registrarse</button><br /><br />
            <button onClick={() => props.onFormSwitch('iniciarSesion')}>Iniciar sesión</button>
            </center>
          </ul>
        </nav>
      </header>

      <div className="hero">
        <div className="container">
          <h1>Bienvenido a las Capacitaciones en línea</h1>
          <p>Una plataforma enfocada en ayudarte a aprender de la mejor manera y con la mayor comodidad</p>
        </div>
      </div>

      <section className="about">
        <div className="container">
          <h2>Acerca de Nosotros</h2>
          <p>Nuestra página ofrece a los usuarios la comodidad de aprender mediante varios cursos impartidos por profesionales que les enseñarán de la mejor manera.</p>
        </div>
      </section>

      <section className="features">
        <h2>Características Principales</h2>

        <div className="feature">
          <div>
            <img src="https://th.bing.com/th/id/OIP.7Af7fIq_qBZlQKTogILDlgHaG6?pid=ImgDet&rs=1" alt="Curso de Css" />
            <h3>Curso de Css</h3>
            <p>Mediante este curso aprenderás lo básico e intermedio de este lenguaje de programación</p>
            <button onClick={() => props.onFormSwitch('usuariocss')}>Ir</button>
          </div>
        </div>
        <div className="feature">
            <div>
                <img src="https://logospng.org/download/html-5/logo-html-5-2048.png" alt="curso de html"/>
                <h3>Curso de Html</h3>
                <p>Mediante este curso aprenderas a crear paginas con este lenguaje de programacion</p>
                <button onClick={() => props.onFormSwitch('usuariohtml')}>Ir</button>
            </div>
        </div>
        <div className="feature">
            <div >
                <img src="https://www.global-itech.com/wp-content/uploads/2020/04/javaScriptIcon-768x870.jpeg" alt="Generación de Horarios"/>
                <h3>Curso de Javascript</h3>
                <p>Aprenderas a crear validaciones para tus paginas web mediante este curso</p>
                <button onClick={() => props.onFormSwitch('usuariojavascript')}>Ir</button>
            </div>
        </div> <br />
        <div className="feature">
            <div>
                <img src="https://th.bing.com/th/id/OIP.S_NiLML9YoyIPiqqVaJtcgHaHa?pid=ImgDet&rs=1" alt="Generación de Horarios"/>
                <h3>Gestionar cursos para los usuarios</h3>
                <p>Crea y elimina los cursos para los usuarios</p>
                <button onClick={() => props.onFormSwitch('loginAdmin')}>Ir</button>
            </div>
        </div>
      </section>

      <footer>
        <p>&copy; 2023 Sistema de Capacitaciones en Línea - ULEAM</p>
      </footer>
    </div>
  );
}


