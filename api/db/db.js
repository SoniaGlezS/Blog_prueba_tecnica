const Sequelize = require('sequelize');
const path = 'mysql://root@localhost:3306/80_dias'

const db = new Sequelize(path,{operatorsAliases: 0});

db.authenticate().catch(err =>{
    console.log(err)
})

module.exports = db;