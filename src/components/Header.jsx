import logo from "../images/logo.png";

import '../style/Header.css';
function Header() {
  return (
    <header className="my-header">
      <div className="logo">
        <img src={ logo } alt="logo-gfd" />
      </div>
      <nav className="my-nav">
        <a href="/"> Início </a>
        <a href="/services"> Serviços </a>
        <a href="/projects"> Projetos </a>
        <div className="dropdown">
          <button class="dropbtn">Sobre
            <i class="fa fa-caret-down"></i>
          </button>
          <div class="dropdown-content">
          <a href="/about">Sobre a Empresa</a>
          <a href="/team">A equipe</a>
        </div>
        </div>
        <a href="/contact"> Contato </a>
      </nav>
    </header>
  );
}

export default Header;
