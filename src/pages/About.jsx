import bannerabout from "../images/banner-about.png";
import '../style/About.css';
import AboutCard from '../components/AboutCard';
import Banner from '../components/Banner';
import Header from '../components/Header';
function About() {
  return (
    <>
      <Header/>
        <div className="About">
        <Banner src={ bannerabout } />
        <div className="about-content">
          <div className='about-paragraph'>
            <div className='paragraph-frame'>
              <p>
              A GFD - Projetos elétricos é uma empresa amazonense que visa qualidade dos seus serviços prestados e a satisfação dos seus clientes. Partimos sempre da vontade de aprimorar conhecimentos, buscando aperfeiçoamento diário e desenvolvimento de novas ideias, com profissionais qualificados, a GFD vem trabalhando no mercado de elaboração, execução e validação de projetos elétricos e consultorias.Procuramos entregar projetos personalizados de acordo com a necessidade de cada cliente, buscando excelência com clareza, organização e agilidade na entrega.
              </p>
            </div>
          </div>
          <AboutCard/>
        </div>
      </div>
    </>
  );
}

export default About;
