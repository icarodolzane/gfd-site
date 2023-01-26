
import '../style/Banner.css';
function Banner(props) {
  return (
    <div className="Banner">
      <div>
        <h1> { props.heading } </h1>
      </div>
    </div>
  );
}

export default Banner;