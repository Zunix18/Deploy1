import React from "react";

function AboutMe() {
  return (
    <section className="page">
      <div className="container">
        <h2>Про мене</h2>

        <div className="card">
          <h3>Як людина</h3>
          <p>
            Мене звати Микола. Я відповідальний, наполегливий та зацікавлений у
            саморозвитку. Мені подобається вивчати нові технології та працювати
            над практичними завданнями.
          </p>
        </div>

        <div className="card">
          <h3>Як розробник</h3>
          <p>
            Я початківець-розробник, який вивчає HTML, CSS, JavaScript та React.
            Мені цікаво створювати сучасні сайти та вебзастосунки.
          </p>
        </div>

        <div className="card">
          <h3>Мої цінності та захоплення</h3>
          <p>
            Я ціную дисципліну, розвиток, чесність і бажання постійно вчитися.
            У вільний час люблю вдосконалювати свої навички в програмуванні.
          </p>
        </div>

        <div className="card">
          <h3>Мої проєкти</h3>

          <h4>HTML + CSS</h4>
          <div className="links-group">
            <a href="https://github.com/yourusername/html-project-1" target="_blank" rel="noreferrer">
              HTML/CSS Проєкт 1
            </a>
            <a href="https://github.com/yourusername/html-project-2" target="_blank" rel="noreferrer">
              HTML/CSS Проєкт 2
            </a>
          </div>

          <h4>JavaScript</h4>
          <div className="links-group">
            <a href="https://github.com/yourusername/js-project-1" target="_blank" rel="noreferrer">
              JavaScript Проєкт 1
            </a>
            <a href="https://github.com/yourusername/js-project-2" target="_blank" rel="noreferrer">
              JavaScript Проєкт 2
            </a>
          </div>

          <h4>React</h4>
          <div className="links-group">
            <a href="https://github.com/yourusername/react-project-1" target="_blank" rel="noreferrer">
              React Проєкт 1
            </a>
            <a href="https://github.com/yourusername/react-project-2" target="_blank" rel="noreferrer">
              React Проєкт 2
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;