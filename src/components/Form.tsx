import { ReactElement, useState, ChangeEvent, useEffect } from 'react';
import { Service } from './Service';

type FormProps = {
  addService: (newService: Service) => void;
};

function Form({ addService }: FormProps): ReactElement {
  const [showForm, setShowForm] = useState(true);
  const [service, setService] = useState('');
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [url, setUrl] = useState('');
  const [minLength, isMinLength] = useState(false);
  const [maxLength, isMaxLength] = useState(false);
  const [hasLettersAndNumbers, setHasLettersAndNumbers] = useState(false);
  const [hasSpecialCharacter, setHasSpecialCharacter] = useState(false);
  const validPassword = 'valid-password-check';
  const invalidPassword = 'invalid-password-check';

  const formValidation = () => {
    return (
      service.trim() !== ''
      && login.trim() !== ''
      && url.trim() !== ''
      && password.length >= 8
      && password.length <= 16
      && /(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/.test(password)
    );
  };

  const changeService = (event: ChangeEvent<HTMLInputElement>) => {
    setService(event.target.value);
  };

  const changeLogin = (event: ChangeEvent<HTMLInputElement>) => {
    setLogin(event.target.value);
  };

  const changePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const changeUrl = (event: ChangeEvent<HTMLInputElement>) => {
    setUrl(event.target.value);
  };

  useEffect(() => {
    isMinLength(password.length >= 8);
    isMaxLength(password.length <= 16);
    setHasLettersAndNumbers(/^(?=.*[a-zA-Z])(?=.*\d).+$/.test(password));
    setHasSpecialCharacter(/[!@#$%^&*()_+{}[\]:;<>,.?~\\/-]/.test(password));
  }, [password]);

  const register = () => {
    console.log('Form validation result:', formValidation());
    const clearForm = () => {
      setService('');
      setLogin('');
      setPassword('');
      setUrl('');
    };
    if (formValidation()) {
      const newService = {
        handleservice: service,
        handlelogin: login,
        handlepassword: password,
        handleurl: url,
      };
      addService(newService);
      clearForm();
    }
  };

  const handleCancel = () => {
    setShowForm(false);
  };

  return (
    <div>
      {showForm ? (
        <form onSubmit={ register }>
          <label htmlFor="service">Nome do serviço</label>
          <input
            type="text"
            id="service"
            value={ service }
            onChange={ changeService }
            placeholder="Digite o nome do serviço"
          />

          <label htmlFor="login">Login</label>
          <input
            type="text"
            id="login"
            value={ login }
            onChange={ changeLogin }
            placeholder="Digite o seu login"
          />

          <label htmlFor="password">Senha</label>
          <input
            type="password"
            id="password"
            value={ password }
            onChange={ changePassword }
            placeholder="Digite a sua senha"
          />

          <label htmlFor="url">URL</label>
          <input
            type="text"
            id="url"
            value={ url }
            onChange={ changeUrl }
            placeholder="Digite a URL do serviço"
          />

          <div
            key="min-length"
            className={ minLength ? validPassword : invalidPassword }
          >
            Possuir 8 ou mais caracteres
          </div>
          <div
            key="max-length"
            className={ maxLength ? validPassword : invalidPassword }
          >
            Possuir até 16 caracteres
          </div>
          <div
            key="letters-numbers"
            className={ hasLettersAndNumbers ? validPassword : invalidPassword }
          >
            Possuir letras e números
          </div>
          <div
            key="special-character"
            className={ hasSpecialCharacter ? validPassword : invalidPassword }
          >
            Possuir algum caractere especial
          </div>

          <button
            id="register"
            disabled={ !formValidation() }
            onClick={ register }
          >
            Cadastrar
          </button>
          <button id="cancel" onClick={ handleCancel }>Cancelar</button>
        </form>
      ) : (
        <button
          id="button"
          onClick={ () => setShowForm(true) }
        >
          Cadastrar nova senha
        </button>
      )}
    </div>
  );
}

export default Form;
