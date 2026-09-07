const footerHTML = `<footer>
                        <nav class="footer-links">
                            <ul>
                                <li><a href="Prensa.html">Prensa</a></li>
                                <li><a href="seguridad.html">Seguridad</a></li>
                                <li><a href="privacidad.html">Aviso de privacidad</a></li>
                                <li><a href="terminos.html">Términos de servicio</a></li>
                                <li><a href="asistencia.html">Asistencia al jugador</a></li>                
                                <li><a href="verificar.html">Verificar en línea</a></li>
                            </ul>
                        </nav>
                        <a href="#" class="btn-inicio">IR AL INICIO ▲</a>
                        <p class="footer-social">
                            <a href="https://discord.com" target="Dis">Discord</a> | 
                            <a href="https://twitch.tv" target="Tw">Twitch</a> | 
                            <a href="https://instagram.com" target="Ig">Instagram</a>
                        </p>
                    </footer>`;
document.getElementById('footer-placeholder').innerHTML = footerHTML;


function inicializarBurger() {
  const burgers = document.querySelectorAll('.navbar-burger');

  burgers.forEach(burger => {
    burger.addEventListener('click', () => {
      const targetId = burger.dataset.target;
      const target = document.getElementById(targetId);

      burger.classList.toggle('is-active');
      target.classList.toggle('is-active');
    });
  });
}

function validarGmail(texto) {
  const regex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
  return regex.test(texto);
}

console.log(validarGmail("usuario@gmail.com")); // true
console.log(validarGmail("usuario@outlook.com")); // false

document.getElementById('form-crear').addEventListener('submit', (event) => {
  event.preventDefault();
  const correo = document.getElementById('correo').value;
  const patronGmail = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
  if (patronGmail.test(correo)) {
    window.location.href = '../index.html';
  } else {
    alert('Por favor, ingresa un correo electrónico válido de Gmail.');
  }
});