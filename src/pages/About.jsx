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
/* 
<section>
<CardGroup>
<Card>
  <div className='card-image'>
    <Card.Img variant="top" src={ card1 } />
  </div>
  <Card.Body>
    <Card.Title>Certificações</Card.Title>
    <Card.Text>
      This is a wider card with supporting text below as a natural lead-in
      to additional content. This content is a little bit longer.
    </Card.Text>
  </Card.Body>
  <Card.Footer>
    <small className="text-muted">Last updated 3 mins ago</small>
  </Card.Footer>
</Card>
<Card>
  <div className='card-image'>
    <Card.Img variant="top" src={ card2 } />
  </div>
  <Card.Body>
    <Card.Title>Projetos</Card.Title>
    <Card.Text>
      This card has supporting text below as a natural lead-in to
      additional content.{' '}
    </Card.Text>
  </Card.Body>
  <Card.Footer>
    <small className="text-muted">Last updated 3 mins ago</small>
  </Card.Footer>
</Card>
<Card>
<div className='card-image'>
    <Card.Img variant="top" src={ card3 } />
  </div>
  <Card.Body>
    <Card.Title>Áreas de Atuação</Card.Title>
    <Card.Text>
      This is a wider card with supporting text below as a natural lead-in
      to additional content. This card has even longer content than the
      first to show that equal height action.
    </Card.Text>
  </Card.Body>
  <Card.Footer>
    <small className="text-muted">Last updated 3 mins ago</small>
  </Card.Footer>
</Card>
</CardGroup>
</section> */