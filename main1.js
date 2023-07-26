const form = document.getElementById('activity');
    
const primeiroNumero = document.getElementById('primeiro-numero');
const segundoNumero = document.getElementById('segundo-numero');
const terceiroNumero = document.getElementById('terceiro-numero');
const quartoNumero = document.getElementById('quarto-numero');


form.addEventListener('submit', function(e){
    e.preventDefault();

    const messagemSucesso1 = `Parabens! <b>${primeiroNumero.value}</b> é maior que <b>${segundoNumero.value}</b>`;
    const messagemErro1 = `Não foi dessa vez! <b>${primeiroNumero.value}</b> não é maior que <b>${segundoNumero.value}</b>`;

    const messagemSucesso2 = `Parabens! <b>${terceiroNumero.value}</b> é menor que <b>${quartoNumero.value}</b>`;
    const messagemErro2 = `Não foi dessa vez! <b>${terceiroNumero.value}</b> não é menor que <b>${quartoNumero.value}</b>`;

    const containerMenssagemSucesso1 = document.querySelector('.messagem-sucesso1');
    const containerMenssagemSucesso2 = document.querySelector('.messagem-sucesso2');
    const containerMenssagemErro1 = document.querySelector('.messagem-erro1');
    const containerMenssagemErro2 = document.querySelector('.messagem-erro2');

    if (primeiroNumero.value > segundoNumero.value){
        containerMenssagemSucesso1.innerHTML = messagemSucesso1;
        containerMenssagemSucesso1.style.display = 'block';
    } else{
        containerMenssagemErro1.innerHTML = messagemErro1;
        containerMenssagemErro1.style.display = 'block';
    }

    if (terceiroNumero.value < quartoNumero.value){
        containerMenssagemSucesso2.innerHTML = messagemSucesso2;
        containerMenssagemSucesso2.style.display = 'block';
    } else{
        containerMenssagemErro2.innerHTML = messagemErro2;
        containerMenssagemErro2.style.display = 'block';
    }
})

function recarregarAPagina(){
    window.location.reload();
} 
console.log(form);