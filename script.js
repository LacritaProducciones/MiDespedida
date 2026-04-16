// EFECTO ESCRITURA POR PÁRRAFOS (más limpio)
function escribirParrafo(el, velocidad = 25) {
    const texto = el.innerText;
    el.innerText = "";
    let i = 0;

    function escribir() {
        if (i < texto.length) {
            el.innerText += texto[i];
            i++;
            setTimeout(escribir, velocidad);
        }
    }

    escribir();
}

window.addEventListener("load", () => {
    const parrafos = document.querySelectorAll(".texto");

    let delay = 0;

    parrafos.forEach((p) => {
        const texto = p.innerText;

        setTimeout(() => {
            escribirParrafo(p, 20);
        }, delay);

        delay += texto.length * 20 + 500; // pausa entre párrafos
    });
});


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
