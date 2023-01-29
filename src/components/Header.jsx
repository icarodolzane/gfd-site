import logo from "../images/logo.png";
import menu from "../icons/menu.png";
import '../style/Header.css';

const headerResponsive = (

  <nav className="my-nav-responsive">
    <div className="dropdown">
      <button class="dropbtn">
          <img src={menu} alt="menu-icon" />
          <i class="fa fa-caret-down"></i>
        </button>
        <div class="dropdown-content">
            <a href="/"> Início </a>
            <a href="/about">Sobre a Empresa</a>
            <a href="/services">Serviços</a>
            <a href="/projects">Projetos</a>
            <a href="/team">Equipe</a>
            <a href="/contact">Contato</a>
        </div>
    </div>
  </nav>
);

function Header() {
  return (
    <header className="my-header">
      <a href="/" className="logo">
        <img src={ logo } alt="logo-gfd" />
      </a>
      {headerResponsive}
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
