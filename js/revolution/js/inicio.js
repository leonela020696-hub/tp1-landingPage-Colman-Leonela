import Swal from 'sweetalert2';

function mostrarBienvenida() {
    Swal.fire({
        title: '¡Bienvenido!',
        text: 'Gracias por visitar nuestra página 😊',
        icon: 'success',
        confirmButtonText: 'Continuar'
    });
}


window.addEventListener('load', () => {
    mostrarBienvenida();
});