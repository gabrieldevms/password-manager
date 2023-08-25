import './App.css';
import { useState } from 'react';
import Form from './components/Form';

function App() {
  const [showForm, setShowForm] = useState(false);

  const handleToggleForm = () => {
    setShowForm(!showForm);
  };
  return (
    <div>
      <h1>Gerenciador de senhas</h1>
      {!showForm ? (
        <button onClick={ handleToggleForm }>Cadastrar nova senha</button>
      ) : (
        <Form onCancel={ handleToggleForm } />
      )}
    </div>
  );
}

export default App;
