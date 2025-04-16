function salvarDados(event) {
    event.preventDefault(); // Impede o envio do formulário

    // Captura os dados dos inputs
    let usuario = document.getElementById("usuario").value;
    let email = document.getElementById("email").value;

    // Armazena no localStorage para uso na próxima página
    localStorage.setItem("usuario", usuario);
    localStorage.setItem("email", email);

    // Redireciona para outra página (exemplo: dashboard.html)
    window.location.href = "dashboard.html";
}
