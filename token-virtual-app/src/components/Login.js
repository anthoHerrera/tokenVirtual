import React, { useState } from 'react';

function Login() {
  const [formData, setFormData] = useState({
    username: '',
    virtualToken: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Envía los datos al backend para la autenticación
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Iniciar Sesión</h2>
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
          name="virtualToken"
          placeholder="Token Virtual"
          value={formData.virtualToken}
          onChange={handleChange}
        />
        <button type="submit">Iniciar Sesión</button>
      </form>
    </div>
  );
}

export default Login;
