// 3- Pides al usuario su altura y peso. Decirle "Tu altura es X y tu peso Y", y con un botón, hacer que calcule el peso ideal y lo muestre en pantalla.

alert('Para poder calcular tu peso ideal necesitaré saber tu altura y peso actual.')
let imcIdeal = 24.9;

function pesoIdeal (a, imc){
    let miPeso = imc * ((a/100)**2);
    alert('Tu peso ideal sería: '+miPeso.toFixed(2)+' kg');
    return miPeso;
} 

function calculoImc (p, a){
    let imc = p / ((a/100)**2);
    return imc;
}

let altura = parseInt(prompt('Indicame tu altura en cm. Ejemplo 175'));
let peso = parseFloat(prompt('Indicame cuanto pesas en kg. Ejemplo 78.50'));
let imc = calculoImc (peso, altura);

document.write('<p>Tu altura es: ' + (altura/100).toFixed(2)+' m</p>');
document.write('<p>El peso introducido es: '+peso.toFixed(2)+' kg</p>');
document.write('<p>Tu IMC actualmente es de: '+imc.toFixed(2)+'%, el ideal se estima en 24.9%</p>');


