import '../style/ProjectCard.css';

function ProjectCard(props) {
  return (
    <main key={props.key} className="ProjectCard">
      <div className="project-card">
        <div>
          <img src={props.src} alt="foto-do-projeto" />
        </div>
        <p>{props.description}</p>
      </div>
      <button> Saiba mais </button>
    </main>
  );
}

export default ProjectCard;