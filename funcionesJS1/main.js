// 1- Dentro de un bucle, ejecutar x veces (x según usuario) una función que te pida saludo ("Hola", "Adiós", etc) y nombre ("Marga", "Carol", etc) , y al final te
// muestre los resultados en pantalla.


let numeroSaludos = parseInt(prompt('¿A cuantas personas querrás saludar?'));

function pedirDatos (){
    let saludo = prompt('¿Como quieres que salude?');
    let persona = prompt('¿A quien quieres saludar?');
    document.write('<h4>'+saludo+' '+persona+'</h4>');
}

for (i=0; i<numeroSaludos; i++){
    pedirDatos();
}

