
import os from 'os';

//obtener la arquitectura del sistema
console.log('Arquitectura:', os.arch());

//obtener el tipo de sistema operativo 
console.log('Plataforma: ', os.platform());

//cantidad total de memoria
console.log('Memoria total:', os.totalmem());

//memoria libre
console.log('Memoria libre:', os.freemem());

//informacion de la CPU
console.log('Informacion de la CPu:' , os.cpus());