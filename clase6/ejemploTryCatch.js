try {
  console.log('Inicio del Try');
  const x = 100;
  console.log('Fin del Try');
} catch (err) {
  console.log('Ocurrió un error!');
  console.error(err);
} finally {
  console.log('finally!');
}