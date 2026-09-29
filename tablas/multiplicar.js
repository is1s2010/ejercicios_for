function generarTablas() {
    let contenedor = document.getElementById("txtTabla");
    let inputUsuario = document.getElementById("inputNumero").value;
    let numeroTabla = parseInt(inputUsuario);
    
    if (isNaN(numeroTabla)) {
        contenedor.innerHTML = `<div class="mensaje-ayuda">Por favor, escribe un número válido para continuar. 🤔</div>`;
        return; 
    }

    let contenido = "";
    for (let i = 1; i <= 10; i++) {
        let resultado = numeroTabla * i;
        contenido += `<div class="fila"><span>${numeroTabla} x ${i}</span> <span>=</span> <span>${resultado}</span></div>`;
    }
    
    contenedor.innerHTML = contenido;
}