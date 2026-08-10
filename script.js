//botões
const botoes= document.querySelectorAll('button');

//para cada botão podemos curtir
botoes.forEach(botao => {
   let curtiu = false;
   
   botao.addEventLitener("click", curtir);

   function curtir (){
    let num = botao.querySelector('span');

    num.textContent++;
   }
});