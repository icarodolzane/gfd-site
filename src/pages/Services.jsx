import '../style/Services.css';
import Banner from '../components/Banner';
import Gallery from '../components/Gallery';
import Header from '../components/Header';
import banner from "../images/banner-services.png";
function Services() {
  return (
    <>
    <Header />
    <div className="Services">
      <Banner src={ banner } />
        <div className="services-content">
            <h1> Projetos Elétricos </h1> 
            <div className="paragraph-service">
              <p>
              Em nossos projetos trabalhamos com as plataformas Revit (modelagem de informação de construção, ou o chamado BIM) e AutoCAD, além de softwares que agilizam o processo de execução.
              </p>
            </div>
            <ul>
            <li>
              Baixa e média tensão (residenciais, comerciais, industriais, hospitalares e shopping centers)
            </li>
            <li>
              Sistema de Proteção Contra Descargas Atmosféricas (SPDA pela NBR 5419:2015)
            </li>
            <li>
              Subestações (aprovação na concessionária)
            </li>
            <li>
              Centros de Medição
            </li>
            <li>
              Painéis elétricos de baixa tensão
            </li>
            <li>
              Luminotécnico.
            </li>
            <li>
              Sistemas fotovoltaicos integrados em residências (On grid e Off grid).
            </li>
            </ul>
        </div>
      {/* <Gallery /> */}
    </div>
    </>
  );
}

export default Services;