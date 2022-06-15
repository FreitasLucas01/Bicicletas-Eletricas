const formulario = document.querySelector("form")

formulario.addEventListener("submit" , (e) => {
    e.preventDefault();
    const button = document.querySelector("form button")
    button.disabled = "true"
    button.innerHTML = "Enviando..."
})