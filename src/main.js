import pace from 'pace-js';
import 'pace-js/themes/blue/pace-theme-minimal.css';
import Swal from 'sweetalert2';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";


document.getElementById("miFormulario").addEventListener("submit", function(event) {
    event.preventDefault(); // ❌ Evita recargar la página
    console.log("Formulario enviado sin recargar");

    // Ejemplo de SweetAlert2:
    Swal.fire({
 text: 'Gracias por contactarte con nosotros',
        icon: 'success',
        confirmButtonText: 'Volver',
    });
});


