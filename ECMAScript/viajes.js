// Array para guardar los destinos
import { capitalize } from "./formato.js";
import { transportes } from "./Transportes.js";
import { destinos } from "./destinos.js";

export class Viaje {
    constructor(destino, fecha, transporte,personas) {
        this.destino = destino;
        this.fecha = fecha;
        this.transporte = transporte;
        this.personas = personas;
        this.calcularCosto();
    }
    calcularCosto() {
        this.costo = 0;

        const transporte = transportes.find(transp => transp.nombre === this.transporte);
        const destino = destinos.find(dest => dest.nombre === this.destino);
        // Costo base por destino
        if(transporte){
            this.costo += transporte.costo;
        }
        if(destino){
            this.costo += destino.costo;
        }

        if(this.personas>3){
            this.costo = this.costo-(this.costo*0.30);
        }
        this.costo *= this.personas;
    }

    mostrarItinerario() {
        let txt = '';
        for (const propiedad in this) {
            if (Object.prototype.hasOwnProperty.call(this, propiedad)) {
                if (propiedad == 'costo') {
                    txt += `${capitalize(propiedad)}: $${this[propiedad]}\n`
                } else {
                    txt += `${capitalize(propiedad)}: ${this[propiedad]}\n`
                }
            }
        }
        txt += "---------------------------";
        console.log(txt);
    }
}