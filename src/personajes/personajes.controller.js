const getPersonajes = (req, res) => {
    res.render("personajes/listado", { arrayPersonajes: [{ nombre: "Tomás" }, { nombre: "Fernando" }] });
}

module.exports = { getPersonajes };