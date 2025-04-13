//Creamos el arreglo de los invitados

const invitados = [
    "Álvaro", "Andrea", "Bruno", "Camila", "Carlos",
    "Damián", "Daniela", "Érika", "Eduardo", "Fabiola",
    "Fernando", "Gabriela", "Guillermo", "Héctor", "Hugo"
];

// Imprimir
const resultado = encontrarParPorInicial(invitados);
console.log(resultado.mensaje);

//Funcion para que el programa ignore tildes
function quitarTildes(texto) {
    return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

//Funcion para encontrar el primer par de invitados
function encontrarParPorInicial(invitados) {
    let left = 0;
    let right = 1;

    while (right < invitados.length) {
        const inicialIzq = quitarTildes(invitados[left][0].toLowerCase());
        const inicialDer = quitarTildes(invitados[right][0].toLowerCase());

        if (inicialIzq === inicialDer) {
            return {
                nombres: [invitados[left], invitados[right]],
                posiciones: [left, right],
                //Muestra en que posicion del arreglo esta la pareja encontrada
                mensaje: `¡Pareja encontrada!: ${invitados[left]} y ${invitados[right]} en posiciones ${left} y ${right}`
            };
        }

        left++;
        right++;
    }

    return {
        nombres: null,
        posiciones: null,
        //Indica si no ha sido posible encontrar una pareja que cumpla los criterios de la funcion
        mensaje: "No se encontró ninguna pareja de invitados con la misma inicial."
    };
}