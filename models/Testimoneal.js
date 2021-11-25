import Sequelize from 'sequelize';
import db from '../config/db.js';

//Crear tablas con sequelize
export const Testimoneal = db.define('testimoneales', {

    nombre: {

        type: Sequelize.STRING
    },
    correo: {

        type: Sequelize.STRING
    },
    mensaje: {

        type: Sequelize.STRING
    }

});
