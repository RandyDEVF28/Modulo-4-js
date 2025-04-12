// Creamos Array para los Destinos
const destinos = [];

// Funcion para registrar un destino 
const registrarDestino = (Destino, Fecha, Transporte) => {
    // se crea objeto con los datos del viaje 
    const nuevoViaje = {
      Destino,
      Fecha,
      Transporte,
      costo: calcularCosto(Destino, Transporte)
    };
    destinos.push(nuevoViaje);
  };

  //CALCULO DEL COSTO DEL VIAJE 

  const calcularCosto = (destino, transporte) => {
    let costoBase = 0;
  
    // Costo base por destino
    if (destino === "Paris") {
      costoBase = 900;
    } else if (destino === "Londres") {
      costoBase = 1100;
    } else if (destino === "New York") {
      costoBase = 700;
    }
  
    // Costo adicional por tipo de transporte
    if (transporte === "Avión") {
      costoBase += 200;
    } else if (transporte === "Tren") {
      costoBase += 100;
    }
  
    return costoBase;
  };


//ITINERARIO DE VIAJE 

const mostrarItinerario = () => {
    // Se recorre el arreglo de Destinos y se muestra la info de cada uno 
    destinos.forEach(viaje => {
      console.log(`Destino: ${viaje.destino}`);
      console.log(`Fecha: ${viaje.fecha}`);
      console.log(`Transporte: ${viaje.transporte}`);
      console.log(`Costo: $${viaje.costo}`);
      console.log("---------------------------");
    });
  };
  
  // Exportamos las funciones para usarlas en otros módulos
  export { registrarDestino, mostrarItinerario };