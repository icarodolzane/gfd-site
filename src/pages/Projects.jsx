
import '../style/Projects.css';
import Banner from '../components/Banner';
import projectList from '../data';
import ProjectCard from '../components/ProjectCard';
import Header from '../components/Header';

function Projects() {
  return (
    <>
      <Header/>
      <div className="Projects">
        <Banner heading="Projetos" />
        <div className="projects-content">
          <h1> Projetos Recentes </h1>
          <div className="frame">
            {
              projectList.map((project) => 
                <ProjectCard 
                  key={ project.id }
                  src={ project.url }
                  description={ project.description } />
              )
            }
          </div>
        </div>
    </div>
    </>
  );
}

export default Projects;