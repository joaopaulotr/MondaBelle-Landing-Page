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

    let erro = 0;

    // Definições das RegExp e validação dos campos
    const validaLetra = /[^a-zA-ZÀ-ÖØ-öø-ÿ\s]/;

    // Pega os dados das dúvidas
    let nome = document.querySelector('#nome');
    let duvida = document.querySelector('#duvida');
    let email = document.querySelector('#email');

    // Validações dos campos
    if (nome.value.length <= 0 || !(validaLetra.test(nome))) {
        errorInput(fantasia);
        erro++;
    } else {
        fantasia.parentNode.className = "input-field"
    }

    const emailValido = await validacaoEmail(email.value);
    if (emailValido) {
        errorInput(email);
        erro++;
    } else {
        email.parentNode.className = "input-field"
    }

    if (duvida.value.length <= 0) {
        errorInput(duvida);
        erro++;
    } else {
        duvida.parentNode.className = "input-field"
    }

    // Se houver erros, não prosseguir
    if (erro > 0) {
        return;
    }

    // Se não houver erros, prosseguir com o cadastro
    const payload = {
        NOME: nome.value.trim(),
        EMAIL: email.value.trim(),
        DUVIDA: duvida.value.trim(),
    };

    nome.value = "";
    email.value = "";
    duvida.value = "";

    document.querySelector('.overlay-duvida').style.display = 'flex';
    await createRow(payload);

    });
}
});




function errorInput(input) {
    const formItem = input.parentNode;  
    formItem.className = "input-field error";
  }