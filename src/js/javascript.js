function mostrar_senha(){
    const campo_de_senha = document.getElementById("password");
    const mostrar_senha = document.getElementById("eye-icon");

    if(campo_de_senha.type === "password"){
        campo_de_senha.type = "text";
        mostrar_senha.innerHTML = '<i class="fa-regular fa-eye-slash"></i>';
    } else {
        campo_de_senha.type = "password";
        mostrar_senha.innerHTML = '<i class="fa-regular fa-eye"></i>';
    }
}

function validar_senha() {
    const senha = document.getElementById("password").value;
    const email = document.getElementById("email").value;
    const mensagens = document.getElementById("senha-mensagens");
    const texto_email = document.getElementById("email-mensagem");

    if (!validar_senha_digitar() && !validar_email()) {
        mensagens.classList.remove("hidden");
        texto_email.classList.remove("hidden");
        return false;
    }
    return true;
}

function validacao_template(texto, cor, icone){
  const template = `<span class="text-${cor}-600"><i class="fa-solid ${icone}"></i> ${texto}</span>`;
  return template;
}

function validar_email(){

    const email = document.getElementById('email').value;
    const mensagem_email = document.getElementById('email-mensagem');
    const texto_email = document.getElementById('texto-email');
  
    const valida_email = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);

    texto_email.innerHTML = valida_email ? validacao_template('E-mail válido', 'green', 'fa-circle-check') : validacao_template('E-mail inválido', 'red', 'fa-circle-xmark');

    mensagem_email.classList.remove('hidden');

    return valida_email;
}

function validar_senha_digitar(){

    const senha = document.getElementById("password").value;
    const mensagens = document.getElementById("senha-mensagens");
    const msg_tamanho = document.getElementById("msg-tamanho");
    const msg_caixaalta = document.getElementById("msg-caixaalta");
    const msg_numero = document.getElementById("msg-numero");
    const msg_especial = document.getElementById("msg-especial");

    const temMinimo8 = senha.length >= 8;
    const temMaiuscula = /[A-Z]/.test(senha);
    const temNumero = /\d/.test(senha);
    const temEspecial = /[@$!%*?&]/.test(senha);

    msg_tamanho.innerHTML = temMinimo8 ? validacao_template('Mínimo de 8 caracteres', 'green', 'fa-circle-check') : validacao_template('Mínimo de 8 caracteres', 'red', 'fa-circle-xmark');
    msg_caixaalta.innerHTML = temMaiuscula ? validacao_template('Pelo menos 1 letra maiúscula', 'green', 'fa-circle-check') : validacao_template('Pelo menos 1 letra maiúscula', 'red', 'fa-circle-xmark');
    msg_numero.innerHTML = temNumero ? validacao_template('Pelo menos 1 número', 'green', 'fa-circle-check') : validacao_template('Pelo menos 1 número', 'red', 'fa-circle-xmark');
    msg_especial.innerHTML = temEspecial ? validacao_template('Pelo menos 1 caractere especial (@$!%*?&)', 'green', 'fa-circle-check') : validacao_template('Pelo menos 1 caractere especial (@$!%*?&)', 'red', 'fa-circle-xmark');

    mensagens.classList.remove("hidden");

    return temMinimo8 && temMaiuscula && temNumero && temEspecial;

}