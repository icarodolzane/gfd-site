import '../style/TeamCard.css';
import iconInstagram from "../icons/instagram200.png";
import iconLinkedin from "../icons/linkedin200.png";
import 'animate.css';
function TeamCard(props) {
  return (
    <main className="TeamCard">
        <div className="card-image">
          <img src={props.src} alt="foto-equipe" />
        </div>
        <div className="profile-description">
          <h2>{ props.name }</h2>
          <h3>{ props.job }</h3>
          <p>{ props.description }</p>
        </div>
        <div className="social-network">
          <a href={props.urlInstagram}>
            <img src={ iconInstagram } alt="instagram-icon" />
          </a>
          <a href={ props.urlLinkedin }>
            <img src={ iconLinkedin } alt="linkedin-icon" />
          </a>
        </div>      
    </main>
  );
}

export default TeamCard;