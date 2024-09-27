import { FaEnvelope, FaLock } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="container">
      <div className="form form--medium">
        <h1 id="title" className="underline">list.</h1>
        <form className="form-fields">
          <div className="input-container">
            <input className="form-input" type="text" placeholder="E-mail" />
            <FaEnvelope className="form-icon" />
          </div>
          <div className="input-container">
            <input className="form-input" type="password" placeholder="Senha" />
            <FaLock className="form-icon" />
          </div>
        </form>
        <button type="submit" className="submit-button">Login</button>
        <div id="register-container">
          <span>Não possui cadastro?</span>
          <Link id="register-ref" to="/register">Clique aqui!</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
