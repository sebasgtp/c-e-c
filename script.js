const cantidadInput = document.getElementById('cantidad');
const localidadSection = document.getElementById('localidadSection');
const localidadSelect = document.getElementById('localidad');
const segundaLocalidadSection = document.getElementById('segundaLocalidadSection');
const segundaLocalidadSelect = document.getElementById('segundaLocalidad');
const resultado = document.getElementById('resultado');
const totalSpan = document.getElementById('total');
const confirmarBtn = document.getElementById('confirmarBtn');

cantidadInput.addEventListener('input', () => {
    const cantidad = parseInt(cantidadInput.value);
    if (cantidad >= 1 && cantidad <= 10) {
      localidadSection.classList.remove('d-none');
      segundaLocalidadSection.classList.remove('d-none');
    } else {
      localidadSection.classList.add('d-none');
      segundaLocalidadSection.classList.add('d-none');
      resultado.classList.add('d-none');
    }
});

[localidadSelect, segundaLocalidadSelect].forEach(select => {
    select.addEventListener('change', calcularTotal);
}); 

function calcularTotal() {
    const cantidad = parseInt(cantidadInput.value);
    const localidad = localidadSelect.value;
    const segundaLocalidad = segundaLocalidadSelect.value;

    if (!localidad) return;

    let total = 0;
    
    if (segundaLocalidad && segundaLocalidad !== localidad) {
        if(cantidad < 2) {
            alert('Debes seleccionar al menos 2 entradas para poder usar 2 localidades');
            return;
        }

        const mitad = Math.floor(cantidad /2);
        const otraMitad=cantidad-mitad;

        const precio1 = localidad === "VIP" ? 500000 : 350000;
        const precio2 = segundaLocalidad === "VIP" ? 500000 : 350000;

        total = (mitad * precio1) + (otraMitad * precio2);

        if (cantidad === 2 &&
            ((localidad === "VIP" && segundaLocalidad === "General") ||
            (localidad === "General" && segundaLocalidad === "VIP"))) {
        total *= 0.8;
        }

  }     else {
        const precio = localidad === "VIP" ? 500000 : 350000;
        total = cantidad * precio;
        }

        totalSpan.textContent = `$${total.toLocaleString()}`;
        resultado.classList.remove('d-none');
        }
} 