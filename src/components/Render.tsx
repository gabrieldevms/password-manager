import { useState, ReactElement } from 'react';
import Form from './Form';
import { Service } from './Service';

function Render(): ReactElement {
  const [showForm, setShowForm] = useState(false);
  const [services, setServices] = useState<Service[]>([]);
  const [hidePasswords, setHidePasswords] = useState(false);

  console.log('Services:', services);

  function toggleForm() {
    console.log('Toggling form visibility');
    setShowForm(true);
  }

  const handleService = (addService: Service) => {
    console.log('Adding service to state:', addService);
    setServices([...services, addService]);
    setShowForm(false);
    console.log('Updated services:', services);
  };

  const remove = (login: string) => {
    const updatedServices = services.filter((servicex) => servicex.handlelogin
      !== login);
    setServices(updatedServices);
  };

  const show = () => {
    setHidePasswords(!hidePasswords);
  };

  return (
    <div>
      {showForm && (
        <Form addService={ handleService } />
      )}
      {services.length > 0 && (
        <div>
          <h2>Lista de serviços cadastrados</h2>
          {services.length > 0 && (
            <div>
              <label htmlFor="hide-password">Esconder senhas</label>
              <input
                type="checkbox"
                id="hide-password"
                checked={ hidePasswords }
                onChange={ show }
              />
            </div>
          )}
          {services.map((service) => (
            <div key={ service.handleservice }>
              <a href={ service.handleurl }>{ service.handleservice }</a>
              {}
              <p>
                Login:
                <span>{ service.handlelogin }</span>
              </p>
              <p>
                Password:
                <span>{ hidePasswords ? '******' : service.handlepassword }</span>
              </p>
              <button
                data-testid="remove-btn"
                onClick={ () => remove(service.handlelogin) }
              >
                Remover
              </button>
              {}
            </div>
          ))}
        </div>
      )}
      {!showForm && (
        <button id="button" onClick={ toggleForm }>
          Cadastrar nova senha
        </button>
      )}
      {services.length === 0 && <h3>Nenhuma senha cadastrada</h3>}
    </div>
  );
}

export default Render;
