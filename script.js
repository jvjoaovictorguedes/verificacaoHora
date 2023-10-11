var dia = new Date;
var hora = dia.getHours();
const imagem = document.getElementById('imagem')
const horasElemento = document.getElementById('horas');

function atualizarHora() {
    const dia = new Date();
    const horas = dia.getHours().toString().padStart(2, '0');
    const minutos = dia.getMinutes().toString().padStart(2, '0');
    const segundos = dia.getSeconds().toString().padStart(2, '0');
  
    const horasElemento = document.getElementById('horas');
  
    horasElemento.innerHTML = `São exatamente ${horas}:${minutos}:${segundos}`;
  }

setInterval(atualizarHora, 1000);
  
function imagens() {
    const imagem = document.getElementById('imagem')
    const dia = new Date();
    const hora = dia.getHours();
    const corFundo = document.getElementById('cor_fundo');
    
    if(hora >= 0 && hora < 13) {
        imagem.innerHTML = '<img src="./images/hills-2836301_640.jpg">'
        corFundo.style.backgroundImage = 'linear-gradient(to top, rgb(212, 212, 25), rgb(218, 218, 100), rgb(247, 247, 197))'
    } else if (hora > 13 && hora < 18) {
        imagem.innerHTML = '<img src="./images/nature-5168551_640.jpg">'
        corFundo.style.backgroundImage = 'linear-gradient(to top, rgb(190, 130, 18), rgb(218, 175, 96), rgb(241, 229, 206))'
    } else if (hora > 18) {
        imagem.innerHTML = '<img src="./images/milky-way-4526277_640.jpg">'
        corFundo.style.backgroundImage= 'linear-gradient(to top, rgb(94, 28, 114), rgb(92, 77, 158), rgb(203, 203, 248))'
    }

}
imagem.addEventListener('loadeddata', imagens());