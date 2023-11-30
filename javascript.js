//funcao whatsapp
function abrirWhatsapp() {
  var nome = document.getElementById("nome").value;
  var telefone = document.getElementById("telefone").value;
  var email = document.getElementById("email").value;
  var msg = document.getElementById("msg").value;
  var url = "https://wa.me/5551993220719?text=" // Seu numero
    + "Suas Dúvidas" + "%0a" // Mensagem personalizada
    + "%0a" // Quebra de linha
    + "*Nome*: " + nome + "%0a" // Dados do formulário
    + "*Telefone*: " + telefone + "%0a"
    + "*E-mail*: " + email + "%0a"
    + "*Mensagem*: " + msg;
  window.open(url, '_blank').focus();
}

//funcao para o carrossel de imagens no inicio do site
const slides = document.querySelector('.slides');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let slidePosition = 0;
const slidesCount = slides.childElementCount;

function updateSlidePosition() {
    for (let slide of slides.children) {
        slide.style.transform = `translateX(-${slidePosition}px)`;
    }
}

function moveToNextSlide() {
    if (slidePosition === (slidesCount - 1) * slides.children[0].clientWidth) {
        slidePosition = 0;
    } else {
        slidePosition += slides.children[0].clientWidth;
    }
    updateSlidePosition();
}

function moveToPrevSlide() {
    if (slidePosition === 0) {
        slidePosition = (slidesCount - 1) * slides.children[0].clientWidth;
    } else {
        slidePosition -= slides.children[0].clientWidth;
    }
    updateSlidePosition();
}

nextButton.addEventListener('click', moveToNextSlide);
prevButton.addEventListener('click', moveToPrevSlide);