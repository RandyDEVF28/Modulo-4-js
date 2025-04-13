export class Transporte {
    constructor(nombre, costo) {
        this.nombre = nombre;
        this.costo = costo;
    }

    mostrar() {
        console.log(`${this.nombre}: \$${this.costo}`)
    }
}

export const transportes = [
    new Transporte("Avión", 400),
    new Transporte("Barco", 500),
    new Transporte("Camión", 100),
    new Transporte("Tren", 200),
]
export const agregarTransportes=(transporte)=>transportes.push(transporte);