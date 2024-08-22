function abrirWhatsapp() {
  const nome = document.getElementById('nome').value;
  const telefone = document.getElementById('telefone').value;
  const email = document.getElementById('email').value;
  const msg = document.getElementById('msg').value;
  const url = 'https://wa.me/5551993220719?text=Minha%20D%C3%BAvida' +
    '%0a' +
    '*Nome*:' + nome + '%0a' +
    '*Telefone*:' + email + '%0a' +
    '*Mensagem*' + msg;
  window.open(url, '_blank');
}
