
// Menu
const menuLista = {
    opcion1: "Mascota",
    opcion2: "Ofertas",
    opcion3: "Blog",
    opcion4: "Adoptame",
    opcion5: "DogCast",
    info: {
        mensaje: "Escribenos", 
        numero: "+57 322 8262128"
    }
}

// Asignación de valores a variables menu
let opcion1 = menuLista.opcion1
let opcion2 = menuLista.opcion2
let opcion3 = menuLista.opcion3
let opcion4 = menuLista.opcion4
let opcion5 = menuLista.opcion5
let opcion6Message = menuLista.info.mensaje
let opcion6Contact = menuLista.info.numero
let opcion6 = menuLista.opcion1

// POST de opciones en menu

document.getElementById("opcion1").innerHTML = opcion1
document.getElementById("opcion2").innerHTML = opcion2
document.getElementById("opcion3").innerHTML = opcion3
document.getElementById("opcion4").innerHTML = opcion4
document.getElementById("opcion5").innerHTML = opcion5
document.getElementById("opcion6Message").innerHTML = opcionMessage
document.getElementById("opcion6Contact").innerHTML = opcionContact


