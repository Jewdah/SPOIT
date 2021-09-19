//Operadores Logicos en TypeScript
// Declaracion de Variables
let numero1 : number = 20;
let numero2 : number = 70;
let Resultado_AND : boolean;
let Resultado_OR : boolean;
let Resultado_NOT : boolean;
let ResultadoFinal : String;

// Creamos una funcion para calcular los resultados teniendo en cuenta las variables
function CalcularOperadorLogico(valor1:number, valor2:number){

    //Uso del operador Logico && (Y)

    Resultado_AND = ((numero1 > 30) && (numero2 < 60));

    //Uso del operador Logico || (O)
     
    Resultado_OR = ((numero1 > 10) || (numero2 < 60));

    //Uso del operador Logico ! (NO)

    Resultado_NOT = !((numero1 > 30) && (numero2 < 60));

    //Creacion del Texto que mostraremos en Consola
    ResultadoFinal = `Variable usuadas: 
    
    Primer Numero= ` + numero1 + `
    
    Segundo Numero= ` + numero2 + `
    
    La operacion ` + numero1 + ` > 30 Y ` + numero2 + ` < 60, nos arroja = ` + Resultado_AND + `

    La operacion ` + numero1 + ` > 10 O ` + numero2 + ` < 60, nos arroja = ` + Resultado_OR + `

    El resultado inverso de la operacion ` + numero1 + ` > 30 Y ` + numero2 + ` < 60, es = ` + Resultado_NOT + 
    
    ``;

}

//Ejecutamos la funcion
CalcularOperadorLogico(numero1,numero2);

//Exportamos el resultado para ser usado en el archivo index.ts
export {ResultadoFinal};

