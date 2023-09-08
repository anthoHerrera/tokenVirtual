import React, { useState } from 'react';
import axios from 'axios';

function GenerateToken({ cliente }) {
  const [generatedToken, setGeneratedToken] = useState('');

  const handleGenerateToken = async () => {
    try {
      const response = await axios.get(`/api/users/generarToken/${cliente}`);
      const { token } = response.data;
      setGeneratedToken(token);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Generar Token</h2>
      <button onClick={handleGenerateToken}>Generar Token</button>
      {generatedToken && (
        <div>
          <p>Token generado: {generatedToken}</p>
          {/* Aquí debes agregar lógica para mostrar el tiempo de validez */}
        </div>
      )}
    </div>
  );
}

export default GenerateToken;
