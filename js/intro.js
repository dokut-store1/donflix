
document.addEventListener("DOMContentLoaded", function () {
    const videoContainer = document.getElementById("intro-video");
    const videoPC = document.getElementById("video-bienvenida-pc");
    const videoCelular = document.getElementById("video-bienvenida-celular");

    // Para el video en PC
    videoPC.addEventListener("ended", function () {
        videoContainer.classList.add("ocultar");
        setTimeout(() => {
            videoContainer.style.display = "none";
        }, 1000);
    });

    // Para el video en celular
    videoCelular.addEventListener("ended", function () {
        videoContainer.classList.add("ocultar");
        setTimeout(() => {
            videoContainer.style.display = "none";
        }, 1000);
    });
});