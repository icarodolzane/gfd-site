import '../style/HomeCard.css';
import home from "../icons/home.png";
import info from "../icons/info100.png";
import email from "../icons/email100.png";
function HomeCard() {
  return (
    <main className="HomeCard">
      <div className="card">
        <div>
          <img src={ home } alt="" />
        </div>
          <a href="/about"> <h3>A Empresa</h3> </a>
        <p>A GFD - Projetos Elétricos é uma empresa amazonense que atua no mercado realizando projetos elétricos.</p>
      </div>
      <div className="card">
        <div>
          <img src={ info } alt="" />
        </div>
        <a href="/services"> <h3>Serviços</h3> </a>
        <p>Conheça nossos principais projetos validados ...</p>
      </div>
      <div className="card">
        <div>
          <img src={ email } alt="" />
        </div>
        <a href="/contact"> <h3>Fale Conosco</h3> </a>
        <p>Solicitação de Orçamentos, dúvidas ou sugestões:
Segunda a sexta, das 08h às 18h, nos sábados das 08h às 13h.</p>
      </div>
    </main>
  );
}

export default HomeCard;