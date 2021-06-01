const express = require('express');
const fetch = require('node-fetch');

const app = express();
const PORT = process.env.PORT || 4000;

app.get('/', function (req, res) {

  res.send('Hola mundo');
});

app.get('/repositorios/:userId', async function (req, res) {

  try {
    const userId = req.params.userId;

    const fetchResponse = await fetch(`https://api.github.com/users/${userId}`);
    const user = await fetchResponse.json();

    const reposUrl = user.repos_url;

    const fetchRepos = await fetch(reposUrl);  
    const repos = await fetchRepos.json();

    const repoNames = [];

    repos.forEach(repo => {
      console.log(repo.name);
      repoNames.push(repo.name);
    })

    res.send({ mensaje: 'Repositorios obtenidos con exito', repositorios: repoNames });
  } catch (exception) {
    res.send({ mensaje: 'Ocurrió un error', error: exception });
  }
})

app.listen(4000, () => {
  console.log(`App listening on port ${PORT}`);
});