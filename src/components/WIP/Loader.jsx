// drag this to the Loader folder
import logo from './animat-road-trip-color.gif';


const Loader = props => (
    <div className="loader--container" {...props}>
      <img src={logo} alt="loading..." />
    </div>
)

export default Loader;
