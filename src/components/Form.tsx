import React from 'react';

type FormType = {
  onCancel: () => void
};

function Form({ onCancel }: FormType) {
  return (
    <div>
      <label htmlFor="nomeServico">Nome do serviço:</label>
      <input type="text" id="nomeServico" />

      <label htmlFor="login">Login:</label>
      <input type="text" id="login" />

      <label htmlFor="senha">Senha:</label>
      <input type="password" id="senha" />

      <label htmlFor="url">URL:</label>
      <input type="text" id="url" />

      <button type="submit">Cadastrar</button>
      <button type="button" onClick={ onCancel }>Cancelar</button>
    </div>
  );
}

export default Form;
