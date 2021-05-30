const fetch = require('node-fetch');

async function main () {
  try {
    let fetchResponse = await fetch('https://api.github.com/users/diego-caceres');  
    const response = await fetchResponse.json();

    const reposUrl = response.repos_url;

    fetchResponse = await fetch(reposUrl);  
    const repos = await fetchResponse.json();

    console.log('Sus repositorios son:');
    repos.forEach(repo => {
      console.log(repo.name);
    })
    
  } catch (exception) {
    console.log('Fallo la request:', exception);
  }
}

main();