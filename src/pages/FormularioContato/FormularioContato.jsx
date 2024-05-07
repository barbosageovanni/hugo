import React, { useState } from 'react';
import InputMask from 'react-input-mask';

function FormularioContato() {
  const [contact, setContact] = useState({
    email: '',
    telefone: '',
    mensagem: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('YOUR_BACKEND_ENDPOINT', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contact),
      });
      if (response.ok) {
        console.log('Submission successful');
        setContact({ email: '', telefone: '', mensagem: '' }); // Resets the form
      } else {
        console.error('Submission failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleReturn = () => {
    // Add code here to handle the return to the home page
    window.location.href = '/banner'; // Redirects to the home page
  };

  // ...


  return (

    
    <form onSubmit={handleSubmit} className="container-FormularioContato mt-5">
      <div className="mb-2">
        <label htmlFor="email" className="form-label">Email:</label>
        <input type="email" className="form-control" id="email" name="email" value={contact.email} onChange={handleChange} placeholder="Digite seu e-mail"/>
      </div>
      <div className="mb-2">
        <label htmlFor="telefone" className="form-label">Telefone:</label>
        <InputMask
          mask="(99) 99999-9999"
          value={contact.telefone}
          onChange={handleChange}
          className="form-control"
          id="telefone"
          name="telefone"
          placeholder="Digite seu telefone"
        />
      </div>
      <div className="mb-2">
        <label htmlFor="mensagem" className="form-label">Mensagem:</label>
        <textarea className="form-control" id="mensagem" name="mensagem" rows="3" value={contact.mensagem} onChange={handleChange}></textarea>
      </div>

      <button type="button" className="btn btn-Formulario-return" onClick={handleReturn}>Voltar</button>
      <button type="submit" className="btn btn-Formulario-enviar">Enviar</button>
    </form>
  );
}

export default FormularioContato;