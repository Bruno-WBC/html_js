const form = document.getElementById('activity');

const primeiroNumero = document.getElementById('primeiro-numero');
const segundoNumero = document.getElementById('segundo-numero');
const terceiroNumero = document.getElementById('terceiro-numero');
const quartoNumero = document.getElementById('quarto-numero');

form.addEventListener('submit', function(e){
    e.preventDefault();

    const messagemSucesso1 = `Parabens! <b>${primeiroNumero.value}</b> é maior que <b>${segundoNumero.value}</b>`;
    const messagemErro1 = `Não foi dessa vez! <b>${primeiroNumero.value}</b> não é maior que <b>${segundoNumero.value}</b>`;

    if (primeiroNumero.value > segundoNumero.value) {
        const containerMenssagemSucesso1 = document.querySelector('.messagem-sucesso1');
        containerMenssagemSucesso1.innerHTML = messagemSucesso1;
        containerMenssagemSucesso1.style.display = 'block';

    } else{
        const containerMenssagemErro1 = document.querySelector('.messagem-erro1');
        containerMenssagemErro1.innerHTML = messagemErro1;
        containerMenssagemErro1.style.display = 'block';
    }
})

console.log(form);