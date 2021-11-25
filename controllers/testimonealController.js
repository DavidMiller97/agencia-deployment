import { Testimoneal } from "../models/Testimoneal.js";

const guardarTestimoneal = async (req, res) => {

    //Validar
    const {nombre, correo, mensaje} = req.body;
    const errores = [];

    if(nombre.trim() === ''){

        errores.push('El nombre esta vacio');
    }

    if(correo.trim() === ''){

        errores.push('El correo esta vacio');
    }
    if(mensaje.trim() === ''){

        errores.push('El mensaje esta vacio');
    }

    if(errores.length > 0){

        const testimoneales = await Testimoneal.findAll();

        res.render('testimoneales', {

            pagina: 'Testimoneales',
            errores,
            nombre,
            correo, 
            mensaje,
            testimoneales
        });

    }else{

        //Almacenar en la BD
        try {
            await Testimoneal.create({

                nombre, 
                correo,
                mensaje
            });

            res.redirect('/testimoneales');

        } catch (error) {
            
            console.log(error);
        }

    }
}



export {
    
    guardarTestimoneal
};