console.log("Hello Word");

// navegando no DOM (html)
var section = $('<section>');//criando uma section
var content = $('.content');//selecionando um elemento que tenha uma class='content'
var button = $('<button class="btn btn-primary">Clique aqui!</button>')//criando botão
var div = $('<div style="width:50px;height:50px;"></div>'); // criando uma div com atributos cssgreen;">estou dentro da tag body e fui criado com Jquery!</h1>');
// anexar o button no .content
var text = $('.text');

var left = $('#left');
var right = $('#right');

var cube =$('.cube');

content.append(section);
content.append(button);
content.append(div);

button.click(()=>{
  // atributos css, valor dos atributos
  div.css('background-color','#888888')
});
// eventos(quando o usuário passar o mouse por cima de texto,clicar em um botão , eventos de navegador)
// listener .on ('nome do evento', função callback);
function mouseOn() {
  $(this).css({
    'background-color':'yellow'
  });
}

function mouseOut() {
  $(this).css({
    'background-color':'transparent'
  });
}
text.hover(mouseOn, mouseOut);


right.click(function() {
  cube.animate({'left':'+=50px'}, "slow")
});

left.click(function() {
  cube.animate({'left':'-=50px'}, "slow")
});
