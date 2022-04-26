function Esqueceu() {
  window.location.href = 'cadastro/esqueceu.html'
}

function LoginCadastro() {
  window.location.href = 'cadastro/CriarLogin.html'
}

// button mostrar senha
function Toggle() {
  var temp = document.getElementById('typepass')
  if (temp.type === 'password') {
    temp.type = 'text'
  } else {
    temp.type = 'password'
  }
}


