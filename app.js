// Função para exibir o texto em um elemento específico
function displayText(tag, text) {
    let campo = document.querySelector(tag);
    campo.innerHTML = `<strong class="titulo__negrito">${text}</strong>`;

    let imagemLupa = document.querySelector('.imagem__lupa');
    if (imagemLupa) {
      imagemLupa.style.display = 'none';
    }
  }
  
  // Criptografar com entrada do textarea
  function criptografar() {
    let textoCrip = document.querySelector("textarea").value;
  
    let textocripto = textoCrip
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");
  
    displayText(".apresentacao__direita__mensagem", textocripto);
  
    document.querySelector("textarea").value = "";
    
  }
  
  // Descriptografar com entrada do textarea
  function descriptografar() {
    let textoDes = document.querySelector("textarea").value;
      // Parâmetros da cripto
      let textoDescrip = textoDes
      .replace(/enter/g, "e")
      .replace(/imes/g, "i")
      .replace(/ai/g, "a")
      .replace(/ober/g, "o")
      .replace(/ufat/g, "u");
      
      displayText(".apresentacao__direita__mensagem", textoDescrip);
  
      document.querySelector("textarea").value = "";
  }
  
  // Função de copiar
  function copiar() {
    let textoCopiado = document.querySelector(".apresentacao__direita__mensagem").innerText;
    navigator.clipboard.writeText(textoCopiado);
  }
  
document.querySelector('.titulo__botao__primeiro').addEventListener('click', criptografar);
document.querySelector('.titulo__botao__segundo').addEventListener('click', descriptografar);
document.querySelector('.copiar').addEventListener('click', copiar);