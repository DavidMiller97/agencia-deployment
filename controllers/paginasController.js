import { Viaje } from "../models/Viaje.js";
import { Testimoneal } from "../models/Testimoneal.js";

const paginaInicio = async (req, res) => {


    //Consultar tres viajes

    const promiseDB = [];
    promiseDB.push(Viaje.findAll({ limit: 3}));
    promiseDB.push(Testimoneal.findAll({ limit: 3}));
    try {
        
        const resultado = await Promise.all(promiseDB);

        res.render('inicio', {

            pagina: 'Inicio',
            clase: 'home',
            viajes: resultado[0],
            testimoneales: resultado[1]
        });

    } catch (error) {
        
        console.log(error);
    }
    
};

const paginaNosotros = (req, res) => {

    res.render('nosotros', {

        pagina: 'Nosotros'
    });
};

const paginaViajes = async (req, res) => {

    //Consultar DB
    const viajes = await Viaje.findAll();

    res.render('viajes', {
        
        pagina: 'Proximos viajes',
        viajes
    });
};

const paginaTestimoneales = async (req, res) => {

    try {

        const testimoneales = await Testimoneal.findAll();

        res.render('testimoneales', {
            
            pagina: 'Testimoneales',
            testimoneales
        });
        
    } catch (error) {
        
        console.log(error);
    }

    
};

//Mostrar el detalle de una pagina de un viaje
const paginaDetalleViaje = async (req, res) => {

    const {viaje} = req.params;

    try{

        const resultado = await Viaje.findOne({ where: { slug: viaje }});
        res.render('viaje', {

            pagina: 'Infromacion Pagina',
            resultado
        });

    }catch(error){

        console.log(error);
    }
}

export {

    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimoneales,
    paginaDetalleViaje
}