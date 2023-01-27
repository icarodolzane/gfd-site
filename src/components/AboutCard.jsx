import '../style/AboutCard.css';
import visao from "../icons/visao.png";
import missao from "../icons/missao.png";
import valores from "../icons/valores.png";

function AboutCard() {
  return (
    <main className="AboutCard">
      <div className="aboutcard">
        <div>
          <img src={ missao } alt="" />
        </div>
        <h3>Missão</h3>
        <p>Fornecer soluções em projetos, gerenciamento e execução de obras, elevando, com qualidade, os negócios de nossos clientes e buscando especializar nosso corpo técnico com intuito de evoluir sempre.</p>
      </div>
      <div className="aboutcard">
        <div>
          <img src={ visao } alt="" />
        </div>
        <h3>Visão</h3>
        <p>Ser uma empresa de engenharia reconhecida no âmbito nacional não só pelos serviços prestados, mas também pelo compartilhamento de nossos conhecimentos com os profissionais e parceiros.</p>
      </div>
      <div className="aboutcard">
        <div>
          <img src={ valores } alt="" />
        </div>
        <h3>Valores</h3>
        <p>Nossos valores são baseados em: ética, profissionalismo, comprometimento, transparência, respeito, cooperação e evolução contínua.</p>
      </div>
    </main>
  );
}

export default AboutCard;