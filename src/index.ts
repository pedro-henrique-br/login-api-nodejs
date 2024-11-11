import cors from 'cors'
import connection from "./database";
import express from "express";


connection.connect()
const app = express()
app.use(cors())
app.use(express.json())
const PORT: number = 8080
const SECRET_KEY: string = process.env.SECRET_KEY || "YOUR SECRET KEY HERE"

app.use(express.json())

app.get("/", (request, response) => {
  response.send("Hello world...")
})

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`)
})