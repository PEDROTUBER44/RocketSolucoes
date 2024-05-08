const dados = {
    name: 'Nome',
    dateofbirth: '31/12/0000',
    country: 'country'
    
};

const configuracaoString = JSON.stringify(dados);
localStorage.setItem('dados', configuracaoString);
console.log(configuracaoString);