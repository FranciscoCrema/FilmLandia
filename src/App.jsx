import "./App.scss";

function App() {
  return (
    <div className="layout">
      <header className="header">
        <div className="logo">
          <div className="play"></div>
        </div>

        <h1>FilmLandia</h1>
      </header>

      <nav className="nav">
        <ul>
          <li>
            <a href="#">Inicio</a>
          </li>

          <li>
            <a href="#">Peliculas</a>
          </li>

          <li>
            <a href="#">Blog</a>
          </li>

          <li>
            <a href="#">Contacto</a>
          </li>
        </ul>
      </nav>

      <section className="content">
        <article className="peli_item">
          <h3 className="title">Desarrollo web</h3>
          <p className="description">francrema00@gmail.com</p>

          <button className="edit">Editar</button>
          <button className="delete">Borrar</button>
        </article>

        <article className="peli_item">
          <h3 className="title">Desarrollo web</h3>
          <p className="description">francrema00@gmail.com</p>

          <button className="edit">Editar</button>
          <button className="delete">Borrar</button>
        </article>

        <article className="peli_item">
          <h3 className="title">Desarrollo web</h3>
          <p className="description">francrema00@gmail.com</p>

          <button className="edit">Editar</button>
          <button className="delete">Borrar</button>
        </article>

        <article className="peli_item">
          <h3 className="title">Desarrollo web</h3>
          <p className="description">francrema00@gmail.com</p>

          <button className="edit">Editar</button>
          <button className="delete">Borrar</button>
        </article>
      </section>

      {/* Barra lateral */}
      <aside className="lateral">
        <div className="search">
          <h3 className="title">Buscador</h3>
          <form>
            <input type="text" />
            <button>Buscar</button>
          </form>
        </div>

        <div className="add">
          <h3 className="title">Añadir pelicula</h3>
          <form>
            <input type="text" placeholder="Titulo" />
            <textarea placeholder="Descripcion"></textarea>
            <input type="submit" value="Guardar" />
          </form>
        </div>
      </aside>

      <footer className="footer">
        &copy;
        <a href="https://portfolio-fc2023.netlify.app/" target="_blank">
          Francisco Crema
        </a>
      </footer>
    </div>
  );
}

export default App;
