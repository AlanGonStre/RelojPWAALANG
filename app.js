const elementoHora = document.getElementById("horaActual");

function actualizarHora() 
{
    const ahora = new Date();
    const horas = String(ahora.getHours()).padStart(2, "0");
    const minutos = String(ahora.getMinutes()).padStart(2, "0");
    const segundos = String(ahora.getSeconds()).padStart(2, "0");
    elementoHora.textContent = `${horas}:${minutos}:${segundos}`;
}

actualizarHora();
setInterval(actualizarHora, 1000);

if ("serviceWorker" in navigator) 
{
    window.addEventListener("load", () => 
    {
        navigator.serviceWorker.register("service-worker.js").then((registro) => 
        {
            console.log("Service Worker registrado correctamente:", registro);
        }).catch((error) => 
            {
                console.error("Error al registrar el Service Worker:", error);
            });
    });
}