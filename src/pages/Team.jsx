import React from 'react';
import Banner from '../components/Banner';
import Header from '../components/Header';
import TeamCard from '../components/TeamCard';
import banner from "../images/banner-team.png";
import profilePic from "../images/profile2.png";
import '../style/Team.css';

const description ="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

class Team extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Banner src={ banner }/>
        <TeamCard 
          src={ profilePic }
          name="Gabriel Feitosa Dolzane"
          job="Engenheiro Projetista"
          description={ description }  
        />

      </>
    );
  }
}

export default Team;