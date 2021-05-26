const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Preguntamos el nombre, y le damos un callback para ejecutar cuando el usuario responda en la terminal
rl.question("Cual es tu nombre ? ", function (name) {
  
  // Tenemos el nombre, ahora preguntamos el pais
  rl.question("Cual es tu pais ? ", function (pais) {
    
    // Imprimimos el resultado
    console.log(`${name} es un ciudadano de ${pais}`);

    // Ahora ejecutamos el evento close
    rl.close();
  });
});

/*
  Aca estamos dandole una funcion callback para que Readline nos avise
  cuando termine con sus operaciones, osea, que ocurra el evento "close"
*/
rl.on("close", function() {

  // En este callback, cerramos la ejecución de Node con: process.exit(0);
  console.log("Hasta luego!");
  process.exit(0);
});

