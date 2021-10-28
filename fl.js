    //se crean individual 
// const fl=require('fs');
// const os=require('os');


// var pc=os.cpus()[0].model;


// fl.writeFile("mi archivo.txt",pc,function(error){
//     if (error) {
//         console.log(error);
//     }else{
//         console.log("se creo el archivo txt con exito");
//     }
// });
        //version 

// const fl=require('fs');
// const os=require('os');


// var ver=os.version();


// fl.writeFile("version.txt",ver,function(error){
//     if (error) {
//         console.log(error);
//     }else{
//         console.log("se creo el archivo txt con exito");
//     }
// });


            //se crea en un solo archivo todas las funciones

const fl=require('fs');
const os=require('os');
// const { uptime } = require('process');


var texto='imformacion de mi computador \n';

var texto=capacidad_memoria()+'\n';

texto+= version_sistema_operativo()+ '\n';
texto += version()+ '\n';
texto += type()+'\n';
texto += tm()+'\n';
texto += relax()+'\n';
texto += plataforma()+ '\n';
texto += nework()+ '\n';
texto += host()+ '\n';
texto += vinario()+ '\n';


fl.writeFile("informacion.txt",texto,function(error){
    if (error) {
        console.log(error);
    }else{
        console.log("se creo el archivo txt con exito");
    }
});

function capacidad_memoria() {
    var memoria='total memoria :' + os.totalmem();
    return memoria;     
}
function version_sistema_operativo() {
    var version_sistema_operativo='version del sistema operativo :' + os.release();
    return version_sistema_operativo;     
}
function version() {
    var version='sistema operativo: ' + os.version();
    return version;     
}
function type() {
    var time='tipo windows : ' + os.type();
    return time;     
}
function tm() {
    var tmdir='Devuelve el directorio predeterminado del sistema operativo para archivos temporales como una cadena : '+ os.tmpdir();
    return tmdir;
}
function relax() {
    var cadena= 'Devuelve el sistema operativo como una cadena : '+ os.release();
    return cadena;
}
function plataforma() {
    var plataforma= 'Devuelve una cadena que identifica la plataforma del sistema operativo : '+ os.platform();
    return plataforma
}
function nework() {
    var trabajo ='Devuelve la arquitectura de CPU del sistema operativo para la que se compiló el binario de Node.js : '+ os.arch();
    return trabajo
}
function host() {
    var sistema ='Devuelve el nombre de host del sistema operativo como una cadena : '+ os.hostname();
    return sistema
}
function vinario() {
    var node ='Devuelve una cadena que identifica el endianness de la CPU para la que se compiló el binario Node.js : '+ os.endianness();
    return node
}
