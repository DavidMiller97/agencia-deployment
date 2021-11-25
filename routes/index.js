import express from 'express';
import { paginaInicio, 
    paginaNosotros, 
    paginaViajes, 
    paginaTestimoneales,
    paginaDetalleViaje } from '../controllers/paginasController.js';
import { guardarTestimoneal } from '../controllers/testimonealController.js';

const router = express.Router();

/*
    req - Lo que enviamos
    res - Lo que express responde
    
    res.json - regresa un json
    res.send - un texto
    res.render - una vista
*/
router.get('/', paginaInicio);

router.get('/nosotros', paginaNosotros);

router.get('/viajes', paginaViajes);
router.get('/viajes/:viaje', paginaDetalleViaje);

router.get('/testimoneales', paginaTestimoneales);

router.post('/testimoneales', guardarTestimoneal);

export default router;