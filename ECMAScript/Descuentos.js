// Funcion para calcular los descuentos 

const calcularDescuento = (numeroDePersonas, costoTotal) => {
    if (numeroDePersonas > 5) {
      return costoTotal * 0.9;  // 10% de descuento
    }
    return costoTotal;
  };

  //Exportamos 
  export { calcularDescuento };
  