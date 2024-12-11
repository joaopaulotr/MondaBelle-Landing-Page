import sensivel from './sensivel.js';

function validacaoEmail(email) {
    const usuario = email.split("@");
  
    return new Promise((resolve) => {
        if (email.indexOf("@") < 0) {
            return resolve(true);
        }  
        if ((usuario[0].length >=1) &&
        (usuario[1].length >=3) &&
        (email.indexOf(" ") < 0) &&
        (usuario[1].indexOf(".") >=1)&&
        (usuario[1].lastIndexOf(".") < usuario[1].length - 1)) {
            return resolve(false);
        } 
      resolve(true);
    });  
}

document.addEventListener('DOMContentLoaded', () => {
const buttonCadastro = document.querySelector('#enviar-duvida');
if (buttonCadastro) {
    buttonCadastro.addEventListener('click', async (e) => {
    e.preventDefault(); // Evita o comportamento padrão do formulário

    // Inicializar o EmailJS com seu User ID
    emailjs.init(sensivel.public_key);  

    let erro = 0;

    // Definições das RegExp e validação dos campos
    const validaLetra = /[^a-zA-ZÀ-ÖØ-öø-ÿ\s]/;

    // Pega os dados das dúvidas
    let nome = document.querySelector('#nome-duvida');
    let duvida = document.querySelector('#mensagem-duvida');
    let email = document.querySelector('#email-duvida');

    // Validações dos campos
    if (nome.value.length <= 0 || !(validaLetra.test(nome))) {
        errorInput(nome);
        erro++;
    } else {
        nome.parentNode.className = "input-field"
    }

    const emailValido = await validacaoEmail(email.value);
    if (emailValido) {
        errorInput(email);
        erro++;
    } else {
        email.parentNode.className = "input-field"
    }

    if (duvida.value.length <= 0) {
        errorTextArea(duvida);
        erro++;
    } else {
        duvida.parentNode.className = "textarea-group"
    }


    console.log(email.value);
    console.log(nome.value);
    console.log(duvida.value);

    // Se houver erros, não prosseguir
    if (erro > 0) {
        return;
    }

    // Se não houver erros, prosseguir com o cadastro
    const templateParams = {
        nome: nome.value,
        email: email.value,
        duvida: duvida.value,
      };

    nome.value = "";
    email.value = "";
    duvida.value = "";

    document.querySelector('.overlay-duvida').style.display = 'flex';
    emailjs.send(sensivel.service_id, sensivel.template_id, templateParams);

    });
}
});

function errorInput(input) {
    const formItem = input.parentNode;  
    formItem.className = "input-field error";
}

function errorTextArea(input) {
    const formItem = input.parentNode;  
    formItem.className = "textarea-group error";
}

document.querySelector('.dialog_duvida_close').addEventListener('click', () => {
    document.querySelector('.overlay-duvida').style.display = 'none';
});