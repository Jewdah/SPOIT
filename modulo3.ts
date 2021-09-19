//Operaciones Matematicas en Typescript
//Declaracion de Variables
let numero1: number = 25;
let numero2: number = 90;
let resultadoSuma: number;
let resultadoResta: number;
let resultadoMulti: number;
let resultadoDivision: number;
let resultadoRaizCuadrada: number;
let resultadoLogaritmo: number;
let resultadoPotenciacion: number;
let resultadoSeno: number;
let resultadoCoseno: number;
let resultadoTangente: number;
let TextoResultadosOperaciones: String;

//Operacion de Suma
resultadoSuma = numero1 + numero2;

//Operacion de Resta
resultadoResta = numero2 - numero1;

//Operacion de Multiplicacion
resultadoMulti = numero1 * numero2;

//Operacion de Division
resultadoDivision = numero2 / numero1;

//Operacion de Raiz Cuadrada
resultadoRaizCuadrada = Math.sqrt(numero1);

//Operacion de Logaritmo
resultadoLogaritmo = Math.log(numero1);

//Operacion de Potenciacion
resultadoPotenciacion = Math.pow(numero1, 3);

//Operacion de Seno
resultadoSeno =  Math.sin(numero1);

//Operacion de Coseno
resultadoCoseno = Math.cos(numero1);

//Operacion de Tangente
resultadoTangente = Math.tan(numero1);


//Creacion del texto donde mostraremos los resultados

    TextoResultadosOperaciones = `Variable usuadas: 
    
    Primer Numero= ` + numero1 + `
    
    Segundo Numero= ` + numero2 + `
    
    Suma de ` + numero1 + ` + ` + numero2 + ` = ` + resultadoSuma + `

    Resta de ` + numero2 + ` - ` + numero1 + ` = ` + resultadoResta + `

    Multiplicacion de ` + numero1 + ` * ` + numero2 + ` = ` + resultadoMulti + `

    Devision de ` + numero2 + ` / ` + numero1 + ` = ` + resultadoDivision + `

    Raiz cuadrada de ` + numero1 + ` = ` + resultadoRaizCuadrada + `
    
    Logaritmo de ` + numero1 + ` = ` + resultadoLogaritmo + `

    Potencia de ` + numero1 + ` al cubo = ` + resultadoPotenciacion + `

    Seno de ` + numero1 + ` = ` + resultadoSeno + `

    Coseno de ` + numero1 + ` = ` + resultadoCoseno + `

    Tangente de ` + numero1 + ` = ` + resultadoTangente + `

    `;

    export {TextoResultadosOperaciones}