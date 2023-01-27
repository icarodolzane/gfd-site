
import '../style/Banner.css';
function Banner(props) {
  return (
    <div className="Banner">
        <img src={ props.src } alt="banner" />
    </div>
  );
}

export default Banner;