require('dotenv').config();
import mysql from 'mysql2'

const connection = mysql.createConnection({
  host: "localhost",
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: "login", 
})

connection.connect((error) => {
  if(!error){
    console.log("Conectado ao banco de dados!")
  }
  return `Erro ao conectar ao banco de dados ${error}`
})

export default connection