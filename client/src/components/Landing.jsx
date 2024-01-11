import { Link } from 'react-router-dom';


const Landing = () => {
    return (
        <div>
          <h1>Giuliana Marchiondelli</h1>
          <div>
            <p>Asesoría personalizada en Entrenamientos y nutrición</p>
          </div>
          <Link to='/home'>
            <button>Empezá ahora</button>
          </Link>
          <Link to='/adminLogin'>
            <button>Ingresar como administrador</button>
          </Link>
        </div>
      );
}

export default Landing;