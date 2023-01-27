import Banner from "../components/Banner";
import Header from "../components/Header";
import HomeCard from "../components/HomeCard";
import bannerhome from "../images/banner-home.png";
import "../style/Home.css";


function Home() {
  return (
    <main className="Home">
      <Header />
      <Banner src={ bannerhome } />
      <div className="home-heading">
        <h1> A GFD está pronta para atender às suas necessidades.</h1>
        <div className="spreader"></div>
        <a href="/services"> Saiba mais </a>
        <div className="spreader"></div>
      </div>
      <HomeCard />
    </main>
  );
}

export default Home;