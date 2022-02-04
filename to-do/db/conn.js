const {Sequelize } = require('sequelize')
const sequelize = new Sequelize('nodemvc', 'root', '',{
  host:'localhost',
  dialect: 'mysql'
})

try {
  sequelize.authenticate()
  console.log('conectei ao banco')
} catch (error) {
    console.log('Não foi possível conectar')
}

module.exports = sequelize