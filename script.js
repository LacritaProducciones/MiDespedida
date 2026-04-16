

// LIRIOS
function crearLirio() {
    const lirio = document.createElement("img");
    lirio.src = "lirio.png";
    lirio.classList.add("lirio");

    lirio.style.left = Math.random() * window.innerWidth + "px";
    lirio.style.animationDuration = (5 + Math.random() * 5) + "s";

    document.body.appendChild(lirio);

    setTimeout(() => {
        lirio.remove();
    }, 10000);
}

setInterval(crearLirio, 800);

// 🔊 ACTIVAR MUSICA (forma segura REAL)
window.addEventListener("load", () => {
    const musica = document.getElementById("musica");

    function iniciarMusica() {
        musica.play().catch(() => {});
        
        // quitar eventos después de activar
        document.removeEventListener("click", iniciarMusica);
        document.removeEventListener("keydown", iniciarMusica);
    }

    // activar con cualquier interacción
    document.addEventListener("click", iniciarMusica);
    document.addEventListener("keydown", iniciarMusica);
});
