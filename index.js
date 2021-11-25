//Configuracion de express

// const express = require('express');
//Otra manera
import express from 'express';
import router from './routes/index.js';
import db from './config/db.js';
import dotenv from 'dotenv';

const app = express();

//Conectar a la DB

db.authenticate()
    .then(() => console.log('Base de datos conectada'))
    .catch(error => console.log(error));
    


//Habilitar pug
app.set('view engine', 'pug');

//Obtener el año actual
/*
    next se utiliza para ir al siguiente middleware
    poner el return antes del next para forzarlo
*/
app.use( (req, res, next) => {

    const year = new Date();

    res.locals.actualYear = year.getFullYear();
    res.locals.nombreSitio = 'Agencia de Viajes';

    next();

});

//Agregar body parser para leer datos del formulario
app.use(express.urlencoded({extended: true}));

//Definir carpeta publica 
app.use(express.static('public'));

//Agregar router
/*
    use soporta todos los verbos: GET, POST, PUT, DELETE, PATCH
*/
app.use('/', router);

//Definir el puerto
const port = process.env.PORT || 4000;
//Definir el host
const host = process.env.HOST || '0.0.0.0';

//.listen funcion que arranca el servidor
app.listen(port, host, () => {

    console.log(`El servidor esta funcionando en el puerto ${port} y host ${host}`);
});