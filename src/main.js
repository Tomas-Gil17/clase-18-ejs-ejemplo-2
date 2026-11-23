const path = require("path");
const express = require("express");
const personajesRouter = require("./personajes/personajes.routes");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "templates"));
app.use("/personajes", personajesRouter);

app.get("/", (req, res) => {
    res.json({ estado: "funcionando" });
})

app.listen(process.env.PUERTO, () => {
    console.log(`Se arrancó el servidor en el puerto ${process.env.PUERTO}`);
});