// 2- Pide dos números. Pide si quiere sumar o restar (#/-). Según el caso, llama a la función sumar() o restar) y muestra el resultado de sumar o restar ambos
// números. Prueba a realizar esto sin return
// +EXTRA: prueba a realizar lo mismo con return

//En este caso utilizo el return para llevar el valor fuera de la funcion e imprimirlo fuera.

alert('Primero necesito saber dos números y despues te preguntaré si prefieres sumarlos o restarlos entre ellos.');

function suma (a, b){
    let sum = a + b; 
    let resultado = ('El resultado de la suma entre '+a+' mas '+b+' es: '+sum);
    return resultado;
}
function resta (a, b){
    let res = a - b;
    let resultado = ('El resultado de la resta entre '+a+' menos '+b+' es: '+res);
    return resultado;
}

let num1 = parseInt (prompt('Introduce el primero número:'));
let num2 = parseInt (prompt('Introduce el segundo número:'));
let operacion = prompt('¿Que operación quieres hacer? Responde solo con signo + o -');

let resultado;

if (operacion == '+'){
    resultado = suma(num1,num2);
}
else if (operacion == '-'){
    resultado = resta(num1,num2);  
}
else{
    resultado = 'Prueba nuevamente introduciendo solo los signos + o -';
}

document.write(resultado);
