

//Completando informações dos campos automaticamente:
let tel = document.querySelector('#tel');
tel.addEventListener('keypress', () => {
  let inputLength = tel.value.length;

  if (inputLength == 0) {
    tel.value = '(' + tel.value;
  }

  if (inputLength == 3) {
    tel.value += ') ';
  }

  let espaco = tel.value.indexOf(' ');

  if (inputLength == espaco + 5) {
    tel.value += '-';
  }

  if (inputLength == espaco + 10) {
    var str = tel.value.split('');
    var i   = tel.value.indexOf('-');
    var j   = tel.value.indexOf('-')+1;

    var aux   = str[i];    
    str[i]    = str[j];
    str[j]    = aux;    
    tel.value = str.join('');
  }
    
})

let cnpj = document.querySelector('#CNPJ');
cnpj.addEventListener('keypress', () => {
  let inputLength = cnpj.value.length;

  if (inputLength == 2 || inputLength == 6) {
    cnpj.value += '.';
  }

  if (inputLength == 10) {
    cnpj.value += '/';
  }

  if (inputLength == 15) {
    cnpj.value += '-';
  }

})

window.addEventListener("scroll", function () {
  let header = document.querySelector("#header");
  header.classList.toggle("rolagem", window.scrollY > 525);
});

function changeLogoOnScroll() {
  const headerLogo = document.getElementById("logo-nav-mb");
  const scrollPosition = window.scrollY;
  const icon1 = document.getElementById("faqs");
  const icon2 = document.getElementById("sitemb");
  const icon3 = document.getElementById("menu-icon");
  const icon4 = document.getElementById("plus");



  if (scrollPosition > 525) {
    headerLogo.classList.add("desativalogo");
    headerLogo.src = "assets/logo preta png copiar.png";
    icon1.src = "assets/perguntando (2).png";
    icon2.src = "assets/sacola-de-compras (1).png";
    icon3.src = "assets/menu-aberto (1).png";
    icon4.src = "assets/mais (1).png";

  } else {
    headerLogo.classList.remove("desativalogo");
    headerLogo.src = "assets/Novo Projeto (1).png";
    icon1.src = "assets/perguntando (1).png";
    icon2.src = "assets/sacola-de-compras.png";
    icon3.src = "assets/menu-aberto.png";
    icon4.src = "assets/mais.png";

  }
}


function changeMenuOnScroll() {
  const headerLogo = document.querySelector(".iconm");
  const scrollPosition = window.scrollY;

  if (scrollPosition > 525) {
    headerLogo.src = "assets/menu_black_36dp.svg";
  } else {
    headerLogo.src ="assets/menu_white_36dp.svg";
  }
}



let headerLogo = document.querySelector(".iconm");

window.addEventListener("scroll", changeLogoOnScroll);
window.addEventListener("scroll", changeMenuOnScroll);


window.addEventListener('scroll', function() {
  var footer = document.querySelector('footer');
  var floatButton = document.querySelector('#btn-whatsapp');



  // Obtém a posição do footer em relação à viewport
  var footerRect = footer.getBoundingClientRect();
  var windowHeight = window.innerHeight;

  // Se o footer está visível na tela, reposiciona o botão
  if (footerRect.top <= windowHeight) {
    // Ajusta a posição do botão para não sobrepor o footer
    floatButton.style.bottom = (windowHeight - footerRect.top + 40) + 'px';
  } else {
    // Reseta o botão para a posição original quando o footer não está visível
    floatButton.style.bottom = '40px';
  }

});

document.querySelectorAll('.input-box').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetSection = document.querySelector(this.getAttribute('href'));
    targetSection.scrollIntoView({
      behavior: 'smooth'
    });
  });
});

const items = document.querySelectorAll('.item img');

  
  items.forEach(item => {
    item.addEventListener('touchstart', () => {
      
      item.classList.add('animate');
    });

    
    item.addEventListener('touchend', () => {
      setTimeout(() => {
        item.classList.remove('animate');
      }, 300); 
    });
  });

  document.querySelectorAll('.item').forEach(item => {
    item.addEventListener('touchstart', () => {
      item.classList.add('touch-active');
    });

    
    item.addEventListener('touchend', () => {
      setTimeout(() => {
        item.classList.remove('touch-active');
      }, 300);
    });
  });


  document.addEventListener("DOMContentLoaded", () => {
    const menuButton = document.querySelector(".menu-button_nav");
    const menuNav = document.querySelector(".menu_nav");
    const closeButton = document.querySelector(".close-button_nav");
    const blur = document.getElementById("blurbk");
    const mobileButton = document.getElementById("mobile-button");

    mobileButton.addEventListener("click", () => {
      menuNav.style.transform = "translateX(0)";
      blur.style.display = "flex";
      menuNav.style.width = "100%";
    });

    menuButton.addEventListener("click", () => {
      menuNav.style.width = "50%";

      menuNav.style.transform = "translateX(0)";
      blur.style.display = "flex";
    });
  
    closeButton.addEventListener("click", () => {
      menuNav.style.width = "50%";

      menuNav.style.transform = "translateX(100%)";
      blur.style.display = "none";
    });
  });
  