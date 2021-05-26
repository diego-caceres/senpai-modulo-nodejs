/*
 * Senpai NodeJS - Ejemplo Async Code
 */
const fs = require('fs');
const path = require('path');

// Sustituir esto por nombres validos en su directorio
const directoryPath = path.join('/Users/diegocaceres/', 'Documents');

// Lectura de directorio asincrónica
fs.readdir(directoryPath, function (err, files) {
  if (err) {
    console.log(`No se pudo leer el directorio ${directoryPath}, hubo un error: ${err}`);
    // finalizo la ejecución de esta función
    return;
  }

  // Si no entro al if anterior, no hubo ningún error, imprimimos la lista de files
  console.log(`Archivos en ${directoryPath}:`);
  files.forEach(function (file) {
    console.log(file);
  });
});
