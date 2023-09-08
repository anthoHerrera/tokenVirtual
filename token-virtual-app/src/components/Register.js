import React, { useState } from 'react';

function Register() {
  const [formData, setFormData] = useState({
    username: '',
    secret: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Envía los datos al backend para el registro
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Registro de Usuario</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Nombre de Usuario"
          value={formData.username}
          onChange={handleChange}
        />
        <input
          type="text"
          name="secret"
          placeholder="Secreto Compartido"
          value={formData.secret}
          onChange={handleChange}
        />
        <button type="submit">Registrar</button>
      </form>
    </div>
  );
}

export default Register;
