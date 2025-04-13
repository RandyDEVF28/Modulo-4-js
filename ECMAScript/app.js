import { Viaje } from "./viajes.js"
import { Transporte, agregarTransportes }  from "./Transportes.js"
import { Destino, agregarDestinos }  from "./destinos.js"

const iniciarApp = ()=>{
    agregarTransportes(new Transporte('Jet',300));
    agregarDestinos(new Destino('Brazil',300));
    let viajes =[
        new Viaje("Paris", "2026-01-10", "Avión",2),    
        new Viaje("Londres", "2025-09-15", "Tren",3),
        new Viaje("Brazil", "2025-12-01", "Jet",1),
    ];
    viajes.forEach(element => {
        element.mostrarItinerario();
    });
}

// Ejecutar la aplicación
iniciarApp();