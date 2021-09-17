let message1: string="Bienevenidos a la clase de Typescript";
let string1: string = "Type";
let string2: string = "script";
let resultado: string = string1 + " " + string2;
class Vuelo {
    Aerolinea: string;
    Numero_de_vuelo: number;
    Destino: string;
    Hora_de_embarque: number;
    Fecha_de_salida: string;
    Fecha_de_regreso: string;
  
    constructor(Aerolinea:string, Numero_de_vuelo:number, Destino:string, Hora_de_embarque:number, Fecha_de_salida:string, Fecha_de_regreso: string) {
      this.Aerolinea = Aerolinea;
      this.Numero_de_vuelo = Numero_de_vuelo;
      this.Destino = Destino;
      this.Hora_de_embarque = Hora_de_embarque;
      this.Fecha_de_salida = Fecha_de_salida;
      this.Fecha_de_regreso = Fecha_de_regreso;
      
    }
  
    imprimir() {
      console.log(`Aerolinea: ${this.Aerolinea} y Numero_de_vuelo:${this.Numero_de_vuelo} Destino: ${this.Destino}
       Hora_de_embarque: ${this.Hora_de_embarque} Fecha_de_salida: ${this.Fecha_de_salida}  Fecha_de_regreso: ${this.Fecha_de_regreso}  `);
    }
  }
  
  let vuelo1: Vuelo;
  vuelo1 = new Vuelo ("Avianca",  45 , "Madrid", 700,  "Noviembre 11",  "Noviembre 30")
  vuelo1.imprimir();
let minusculas: string = "Proyecto De Grado";
minusculas = minusculas.toLowerCase();
let mayusculas: string = "fundacion universitaria uninpahu";
mayusculas = mayusculas.toLocaleUpperCase();
let message2: string = "Asadero El Gran Rodeo";
message2 = message2.charAt(8);
let reemplazo: string = "Electiva de la profesion";
reemplazo = reemplazo.replace("de la profesion", "Disciplinar");
let tipo: string = "¿Que tipo soy?";
tipo=(typeof tipo);
let espacios: string = "          Estoy quitando los espacios           ";
espacios = espacios.trim();
let subcadena2: string = " Estoy escuchando musica gospel";
subcadena2 = subcadena2.substr(5-10);
let buscando: string = "Esta funcion busca similitudes dentro de la cadena hola mundo";
let buscando1 = buscando.search("hola");
let example: string = "Electiva de la profesion"; 
let example1 = example.indexOf("profe");

  
export{message1,resultado,vuelo1,minusculas,mayusculas,message2,example1,reemplazo,tipo,espacios,subcadena2,buscando1};