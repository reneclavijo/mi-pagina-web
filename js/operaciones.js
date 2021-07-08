// IF

// a = 10


// function comparar_numeros(x, y){
//     if(x > y){
//         console.log(x, " es mayor")
//     }else{
//         console.log(y, " es mayor")
//     }
// }

// comparar_numeros(4 , 5)
// comparar_numeros(30 , 5)
// comparar_numeros(-4 , -5)
// comparar_numeros(8 , -5)
// comparar_numeros(6 , 25)
// comparar_numeros(8 , 50)

// FOR - Cíclicas, finita por cantidad de vueltas

// 13 / 2 = 6 y sobra 1
// 12 / 2 = 6 y sobra 0


// function mostrar_pares_en_body(){
//     var dom = document.body

//     for(var i = 0; i <= 10; i++){
//         if(i % 2 == 0){
//             dom.innerHTML += "<h1>" +  i + " es par </h1>"
//             console.log(i, " es par")
//         }
//     }
// }

// ==========================












// Crear 5 objetos de javascript que contengan la siguiente información por persona: nombre, edad y peso. 
// Crear una función que regrese el promedio de la edad y otra función que regrese el promedio del peso. 
// Al finalizar se deberá imprimir en consola dos mensajes, uno con el promedio de edad yo tro con el 
// promedio de peso.

// numeros
var a = 3
b = 5

console.log(a + b)

// cadenas 
var cadena_3 = '3'
var cadena_5 = "5"

console.log(cadena_3 + cadena_5)

// bool
var pregunta = false

console.log(pregunta)


persona5 = {}

// Esta función ahora solo recibe 1 lista
// y que devuelve el valor del promedio calculado
function promediar_edades(arreglo_personas) {

    promedio_edades = 0

    for (i = 0; i < arreglo_personas.length ; i++){
    
        promedio_edades += arreglo_personas[i].edad
    
    }
    
    promedio_edades /= arreglo_personas.length

    return promedio_edades
}

// objeto donde agrupamos datos
persona = {
    "nombre": "marcos",
    "edad": 88,
    "peso": 70.4
}
persona2 = {
    "nombre": "camila",
    "edad": 15,
    "peso": 45
}
persona3 = {
    "nombre": "laura",
    "edad": 56,
    "peso": 70
}
persona4 = {
    "nombre": "mauricio",
    "edad": 90,
    "peso": 109
}
arreglo_personas = [persona, persona2, persona3, persona4]

promediar_edades(arreglo_personas)


personaX = {
    "nombre": "x",
    "edad": 5,
    "peso": 70.4
}
personaY = {
    "nombre": "y",
    "edad": 3,
    "peso": 45
}

lista_persona = [personaX, personaY]
resultado = promediar_edades(lista_persona)

console.log(resultado)
document.body.innerHTML = resultado








































