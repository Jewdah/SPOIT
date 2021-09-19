// Declaracion de Variables
let numero1 : number = 0 ;
let positivo : boolean;
let negativo : boolean;
let neutro : boolean;
let resultado : String;

// Creamos una funciona para terminar si el numero de la variable es positivo o negativo
function DeterminarTipo(valor1:number){


    if (valor1 > 0)

        {

            positivo = true;
            negativo = false;
            neutro= false;

            resultado = "El numero ingresado es Positivo";

        }


    if (valor1 == 0)

        {

            positivo = false;
            negativo = false;
            neutro= true;

            resultado = "El numero ingresado es Neutro";

        }

    if (valor1 < 0)

        {

            positivo = false;
            negativo = true;
            neutro= false;

            resultado = "El numero ingresado es Negativo";

        }    

}



//Ejecutamos la funciones
DeterminarTipo(numero1);
export {resultado};


