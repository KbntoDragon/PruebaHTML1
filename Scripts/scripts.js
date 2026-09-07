const headerHTML = `<header>
        <nav class="navbar">
           <div class="navbar-brand">
                <a class="navbar-item" href="#">
                    <img src="../Imagenes/Logo.webp" class="logo">
                </a>
                <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarPrincipal">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
           </div>
           <div class="navbar-menu" id="navbarPrincipal">
                <div class="navbar-start">
                    <a class="navbar-item" href="../index.html">
                        Inicio
                    </a>
                    <a class="navbar-item" href="../Html/campeones.html">
                        Campeones
                    </a>
                    <a class="navbar-item" href="#">
                        Citas
                    </a>
                </div>
                <div class="navbar-end">
                    <div class="navbar-item">
                        <div class="field">
                            <div class="control">
                                <input class="input" type="text" placeholder="Buscar...<3">
                            </div>
                        </div>
                    </div>
                    <div class="navbar-item">
                        <a class="button is-primary" href="../Html/login.html">
                            Iniciar sesión
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    </header>`;
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
document.addEventListener('DOMContentLoaded', () => {
document.getElementById('header-placeholder').innerHTML = headerHTML;
document.getElementById('footer-placeholder').innerHTML = footerHTML;
inicializarBurger();
});

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


