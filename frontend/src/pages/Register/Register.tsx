import { FaEnvelope, FaLock, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Register() {
  return (
    <div className="container">
      <div className="form form--medium">
        <form className="form-fields">
          <h1 className="cadastro-title">Seja bem vindo! Preencha o cadastro.</h1>
          <div className='input-container'>
            <input className="form-input" type="text" placeholder="Nome completo" />
            <FaUser className="form-icon" />
          </div>
          <div className="input-container">
            <input className="form-input" type="text" placeholder="E-mail" />
            <FaEnvelope className="form-icon" />
          </div>
          <div className="input-container">
            <input className="form-input" type="password" placeholder="Senha" />
            <FaLock className="form-icon" />
          </div>
          <div className="input-container">
            <input className="form-input" type="password" placeholder="Confirme a senha" />
            <FaLock className="form-icon" />
          </div>
        </form>
        <button type="submit" className="submit-button">Cadastar-se</button>
        <div id="register-container">
          <span>Ja possui cadastro?</span>
          <Link id="register-ref" to="/">Faça login!</Link>
        </div>
      </div>
    </div>
  );
}

export default Register;
