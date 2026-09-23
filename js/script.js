// ==========================================
// CONFIGURACIÓN
// ==========================================

const PASSWORD = "17demarzo2025";


// ==========================================
// ABRIR CARTA
// ==========================================

function openLetter() {

    const input = document.getElementById("password");
    const error = document.getElementById("error");
    const letter = document.getElementById("letter");
    const card = document.getElementById("card");
    const musica = document.getElementById("musica");
    const musicButton = document.getElementById("musicButton");


    if (input.value.toLowerCase() === PASSWORD.toLowerCase()) {

        error.classList.remove("show");

        card.classList.add("opened");

        letter.classList.add("open");

        createHearts();


        // 🎵 Comenzar música desde el principio
        musica.currentTime = 0;

        musica.play();


        // Mostrar que la música está reproduciéndose
        musicButton.textContent = "🎵";

    } else {

        error.classList.add("show");

        input.value = "";

        input.focus();

    }

}


// ==========================================
// CERRAR CARTA
// ==========================================

function closeLetter() {

    const letter = document.getElementById("letter");
    const card = document.getElementById("card");
    const musica = document.getElementById("musica");
    const musicButton = document.getElementById("musicButton");


    // 💌 Cerrar carta
    letter.classList.remove("open");

    card.classList.remove("opened");


    // 🔇 Detener música
    musica.pause();

    // 🔄 Volver al principio
    musica.currentTime = 0;


    // Restaurar botón
    musicButton.textContent = "🎵";

}


// ==========================================
// BOTÓN DE MÚSICA
// ==========================================

const musicButton = document.getElementById("musicButton");
const musica = document.getElementById("musica");


musicButton.addEventListener("click", function () {

    if (musica.paused) {

        // ▶️ Reproducir
        musica.play();

        musicButton.textContent = "🎵";

        musicButton.setAttribute(
            "aria-label",
            "Pausar música"
        );

    } else {

        // ⏸️ Pausar
        musica.pause();

        musicButton.textContent = "▶️";

        musicButton.setAttribute(
            "aria-label",
            "Reproducir música"
        );

    }

});


// ==========================================
// ENTER EN CONTRASEÑA
// ==========================================

document
    .getElementById("password")
    .addEventListener("keydown", function(event) {

        if (event.key === "Enter") {

            openLetter();

        }

    });


// ==========================================
// CORAZONES
// ==========================================

function createHearts() {

    for (let i = 0; i < 18; i++) {

        setTimeout(() => {

            const heart = document.createElement("div");

            heart.classList.add("heart");

            heart.innerHTML =
                Math.random() > 0.5 ? "💛" : "✨";

            heart.style.left =
                Math.random() * 100 + "vw";

            heart.style.top =
                "100vh";

            heart.style.animationDuration =
                (3 + Math.random() * 3) + "s";


            document.body.appendChild(heart);


            setTimeout(() => {

                heart.remove();

            }, 6000);

        }, i * 150);

    }

}
