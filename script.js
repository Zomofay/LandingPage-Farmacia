function scrollToForm() {
  document.getElementById("formSection").scrollIntoView({
    behavior: "smooth"
  });
}

function register() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let msg = document.getElementById("msg");

  if (!name || !email) {
    msg.style.color = "red";
    msg.innerText = "Preencha todos os campos!";
    return;
  }

  msg.style.color = "green";
  msg.innerText = "Cadastro realizado com sucesso!";
}

// animação ao scroll
const elements = document.querySelectorAll(".fade");

window.addEventListener("scroll", () => {
  elements.forEach(el => {
    const pos = el.getBoundingClientRect().top;

    if (pos < window.innerHeight - 50) {
      el.classList.add("show");
    }
  });
});
