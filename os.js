
// modulo os es para mostrar las caracteristicas de mi computador

var os=require("os");


// var procesador=os.cpus()[0].model;   //invoco la funcion cpus que retorna la informacion de mi maquina y como es con funcion json se puede llamar el modulo q queramos en  este caso llamamos el modulo 0 y solo el model


// var memoria=os.totalmem(); //muestra las gb de memoria en el computador


var version=os.version(); //me muestra la vercion del la maquina 


//  var constante=os.constants.signals(); /* para mostrar una constante pero no pude */ 


console.log(version) // mostramos en la consola


