const express = require('express')
const sequelize = require('./database')
const userRoutes = require('./routes/userRoutes.js')

const app = express()
const port = process.env.PORT || 3000;

app.use(express.json())

app.use('/api/users', userRoutes)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})