// Lista de regalos
const gifts = ["Muñeca", "Carro de juguete", "Rompecabezas", "Lego", "Pelota"];


function findGift(gifts, giftName, index = 0) {
    
    if (index === gifts.length) {
        return `${giftName} no está en la lista.`;
    }

    
    if (gifts[index] === giftName) {
        return `${giftName} está en la posición ${index}.`;
    }

    
    return findGift(gifts, giftName, index + 1);
}
