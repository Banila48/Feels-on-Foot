import logo from '../assets/animat-road-trip-color.gif';

const Loader = props => (
    <div className="loader--container" {...props}>
      <img src={logo} alt="loading..." />
    </div>
)

export default Loader;
