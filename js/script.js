// Captura o formulário de contato pelo ID
const form = document.getElementById("formContato");

if (form) {
    form.addEventListener("submit", function (e) {
        // Impede o envio padrão do formulário para validar com JavaScript
        e.preventDefault();

        const nome = document.getElementById("nome").value.trim();
        const email = document.getElementById("email").value.trim();
        const mensagem = document.getElementById("mensagem").value.trim();
        const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (nome === "" || email === "" || mensagem === "") {
            alert("Preencha todos os campos.");
            return;
        }

        if (!emailValido.test(email)) {
            alert("Digite um e-mail válido.");
            return;
        }

        alert("Mensagem enviada com sucesso!");
        form.reset();
    });

    // Define a aba "Sobre mim" como padrão ao carregar a página
    if (!location.hash) {
        location.hash = "#sobre";
    }

}