import { EventEmitter} from 'events';

//crear una instancia de Eventemitter
const emisor = new EventEmitter();

//definir un evento personalizado
emisor.on('Saludo', (nombre)=>{
    console.log(`¡Hola, ${nombre}!`);
});

//emitir el evento saludo
emisor.emit('Saludo', 'Mundo')

