import fs from 'fs';

//leer archivo
fs.readFile('./data/example.txt', 'utf8', (err, data) => {
    if(err) throw err;
    console.log('Contenido del archivo: prueba', data);
});

//escribir en un nuevo archivo

fs.writeFile('./data/newfile.txt', 'Contenido nuevo prueba', (err) => {
    if(err) throw err;
    console.log('Archivo creado y escrito');
});

//renombrar un archivo
fs.rename('./data/newfile.txt', './data/renamefile.txt', (err) => {
    if(err) throw err;
    console.log('Archivo renombrado');
});