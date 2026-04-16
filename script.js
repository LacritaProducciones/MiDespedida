

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

// 🔊 FORZAR MÚSICA (funciona siempre)
window.addEventListener("load", () => {
    const musica = document.getElementById("musica");

    const intentar = () => {
        musica.play().catch(() => {});
    };

    intentar();

    document.addEventListener("click", intentar);
});
