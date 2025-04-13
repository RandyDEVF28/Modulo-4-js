// Lista de productos con nombre, precio y categoría
const productos = [
    { nombre: "Capacitor", precio: 35, categoria: "Componentes" },
    { nombre: "Microswitch", precio: 25, categoria: "Componentes" },
    { nombre: "Transistor", precio: 240, categoria: "Componentes" },
    { nombre: "Multimetro", precio: 680, categoria: "Herramientas" },
    { nombre: "Estacion de Soldadura", precio: 2000, categoria: "Herramientas" },
    { nombre: "Tinta conductiva", precio: 900, categoria: "DIY" }
];

//Precio menor a $100
const productosBaratos = productos.filter(producto => producto.precio < 100);

// Ordenar los productos filtrados alfabéticamente por nombre
const productosOrdenados = productosBaratos.sort((a, b) => a.nombre.localeCompare(b.nombre));

// Obtener solo los nombres de los productos
const nombresProductos = productosOrdenados.map(producto => producto.nombre);

// Mostrar resultados en consola
console.log("Productos filtrados (menos de $100):", productosBaratos);
console.log("Productos ordenados alfabéticamente:", productosOrdenados);
console.log("Nombres de productos ordenados:", nombresProductos);


const costoTotal = productosBaratos.reduce((total, producto) => total + producto.precio, 0);
console.log("Costo total de los productos baratos:", costoTotal);

// Verificar si hay al menos un producto en la categoría "Herramientas"
const hayHerramientas = productos.some(producto => producto.categoria === "Herramientas");
console.log("¿Hay productos en la categoría 'Herramientas'?:", hayHerramientas);

// Comprobar si todos los productos tienen un precio menor a $3000
const todosMenosDe3000 = productos.every(producto => producto.precio < 3000);
console.log("¿Todos los productos cuestan menos de $3000?:", todosMenosDe3000);

// Verificar si "Tinta Conductiva" está en la lista de nombres
const incluyeTinta = nombresProductos.includes("Tinta conductiva");
console.log("¿La lista incluye 'Tinta conductiva'?:", incluyeTinta);