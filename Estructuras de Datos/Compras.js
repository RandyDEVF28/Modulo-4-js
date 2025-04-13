// Lista de compras
const listaDeCompras = new Set();

// Agregar Producto
const agregarProducto = (producto) => {
    if (!listaDeCompras.has(producto)) {
        listaDeCompras.add(producto);
        console.log(`Producto "${producto}" agregado a la lista.`);
    } else {
        console.log(`El producto "${producto}" ya está en la lista.`);
    }
};

// Eliminar Producto
const eliminarProducto = (producto) => {
    if (listaDeCompras.has(producto)) {
        listaDeCompras.delete(producto);
        console.log(`Producto "${producto}" eliminado de la lista.`);
    } else {
        console.log(`El producto "${producto}" no está en la lista.`);
    }
};

// Mostrar Lista 
const mostrarLista = () => {
    if (listaDeCompras.size === 0) {
        console.log("La lista de compras está vacía.");
    } else {
        console.log("Lista de compras:");
        listaDeCompras.forEach(producto => console.log(`- ${producto}`));
    }
};

// Ejemplo de uso
agregarProducto("Arroz");
agregarProducto("Bebida energetizante");
agregarProducto("Pan dulce");
agregarProducto("Arroz"); // Producto duplicado
mostrarLista();
eliminarProducto("Arroz");
mostrarLista();