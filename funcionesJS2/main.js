// 2- Pide dos números. Pide si quiere sumar o restar (#/-). Según el caso, llama a la función sumar() o restar) y muestra el resultado de sumar o restar ambos
// números. Prueba a realizar esto sin return
// +EXTRA: prueba a realizar lo mismo con return


alert('Primero necesito saber dos números y despues te preguntaré si prefieres sumarlos o restarlos entre ellos.');

function suma (a, b){

    let sum = a + b; 
    document.write('El resultado de la suma es: '+sum);  
    console.log(sum);
}
function resta (a, b){
    let res = a - b;    
    document.write('El resultado de la resta es: '+res);
    console.log(res);
}

let num1 = parseInt (prompt('Introduce el primero número:'));
let num2 = parseInt (prompt('Introduce el segundo número:'));

let operacion = prompt('¿Que operación quieres hacer? Responde solo con signo + o -');

if (operacion == '+'){
    suma(num1,num2);
}
else if (operacion == '-'){
    resta(num1,num2);  
}
else{
    alert('Prueba nuevamente introduciendo solo los signos + o -');
}

