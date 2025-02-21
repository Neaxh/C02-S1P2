import path from 'path';

//ruta de archivo 
const filePath ='./data/example.txt';

//obtener directorio base
const dirName= path.dirname(filePath);
console.log('directorio base:', dirName);

//obtener nombre del archivo sin extension
const baseName=path.basename(filePath, '.txt');
console.log('Nombre del archivo:', baseName);

//obtener extension del archivo
const extName = path.extname(filePath);
console.log('extensión del archivo:', extName);

//crear ruta unica
const newPath= path.join('/user', 'docs', 'newfile.txt');
console.log('nueva ruta:', newPath);

