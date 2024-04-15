document.addEventListener('DOMContentLoaded', function() {
    const formularioVenta = document.getElementById('formularioVenta');
    const listaBoletos = document.getElementById('listaBoletos');

    formularioVenta.addEventListener('submit', function(event) {
        event.preventDefault();

        const nombre = document.getElementById('nombre').value;
        const fecha = document.getElementById('fecha').value;
        const salida = document.getElementById('salida').value;
        const destino = document.getElementById('destino').value;
        const asiento = document.getElementById('asiento').value;

        const nuevoBoleto = document.createElement('li');
        nuevoBoleto.classList.add('boleto');
        nuevoBoleto.innerHTML = `<strong>Nombre:</strong> ${nombre}, <strong>Fecha de Viaje:</strong> ${fecha}, <strong>Salida:</strong> ${salida}, <strong>Destino:</strong> ${destino}, <strong>Asiento:</strong> ${asiento}`;
        listaBoletos.appendChild(nuevoBoleto);

        // Limpiar el formulario después de registrar el boleto
        formularioVenta.reset();
    });
});
