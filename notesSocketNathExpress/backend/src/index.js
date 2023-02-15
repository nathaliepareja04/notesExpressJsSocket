import express from "express";
import { connectDb } from "./database.js";
import { socket } from "./socket/note.socket.js";

connectDb()
const app=express()

app.set("Port",4000)

const server=app.listen(app.get("Port"),()=>{
    console.log("server escuchando por el puerto",app.get("Port"))
})

socket(server)