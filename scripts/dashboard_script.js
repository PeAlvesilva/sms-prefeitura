document.addEventListener("DOMContentLoaded", function() {
    // Recupera o nome do usuário do localStorage
    let usuario = localStorage.getItem("usuario");

    // Exibe o nome na página se existir
    if (usuario) {
        document.getElementById("nomeUsuario").textContent = usuario;
    } else {
        document.getElementById("nomeUsuario").textContent = "Usuário";
    }
});