const Sequelize = require('sequelize');

const sequelize = new Sequelize('tokens', 'vtoken', 'Virtual2023.', {
  host: 'localhost',
  dialect: 'mysql', // Indica que estás usando MySQL
  port: 3306, // El puerto por defecto de MySQL es 3306
});

// Verificar la conexión
sequelize
  .authenticate()
  .then(() => {
    console.log('Conexión establecida correctamente con la base de datos.');
  })
  .catch((err) => {
    console.error('No se pudo conectar a la base de datos:', err);
  });

module.exports = sequelize;

