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