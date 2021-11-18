import express from "express";
import { mongoConnect } from './database/MongoConnection'
import {URLController} from './controller/URLController'
import "dotenv/config"
import cors from 'cors'

const app = express()
app.use(express.json())
app.use(cors())

mongoConnect()

const urlController = new URLController()
app.post('/shorten', urlController.shorten)
app.get('/:hash', urlController.redirect)

app.listen(process.env.PORT, () => console.log("Server UP"))