import logo from "../images/logo-white.png";
import wpp from "../images/whatsapp.png";
import '../style/Header.css';
function Header() {
  return (
    <header className="my-header">
      <div className="logo">
        <img src={ logo } alt="logo-gfd" />
      </div>
      <nav className="my-nav">
        <a href="/"> Início </a>
        <a href="/about"> Sobre a Empresa </a>
        <a href="/services"> Serviços </a>
        <a href="/projects"> Projetos </a>
        <a href="/contact"> Contato </a>
      </nav>
    </header>
  );
}

export default Header;
