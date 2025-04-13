export class Destino {
    constructor(nombre, costo) {
        this.nombre = nombre;
        this.costo = costo;
    }
    
    mostrar() {
        console.log(`${this.nombre}: \$${this.costo}`)
    }
}

export const destinos=[
    new Destino("Paris",500),
    new Destino("Londres",400),
    new Destino("New York",600),
    new Destino("México",700),
]
export const agregarDestinos = (destino) => destinos.push(destino);