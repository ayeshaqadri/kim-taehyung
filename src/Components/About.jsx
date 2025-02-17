import Image from 'react-bootstrap/Image';
import Kimmy from '../Images/kim-taehyung-2.jpg'
import './About.css'

function SecondImage() {
  return <Image src={Kimmy} fluid className="second-image" />;
}

export default SecondImage;