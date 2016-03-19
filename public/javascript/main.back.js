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
