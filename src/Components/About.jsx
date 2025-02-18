// import Image from 'react-bootstrap/Image';
// import Kimmy from '../Images/kim-taehyung-main-2.jpg'
// import './About.css'
// import Card from 'react-bootstrap/Card';

// function SecondImage() {
//   return (
//     <section className="about-section">
//       <h1 className="about-h1 slideInLeft">Kim Taehyung</h1>
//       <Image src={Kimmy} fluid className="second-image slideInLeft" alt="Kim Taehyung" />
//       <p className="about-p slideInLeft"><br />
//         Kim Taehyung, known as V, is a South Korean singer, songwriter, and actor, best known as a member of BTS.
//         Born on December 30, 1995, in Daegu, South Korea, he has gained worldwide fame for his deep, soulful voice 
//         and captivating stage presence. His artistic style extends beyond music, as he is also interested in photography 
//         and fashion. With his charismatic personality and talent, he continues to inspire millions of fans around the world.
//       </p>
//     </section>
//   );
// }




// export default SecondImage;
import React from "react";
import { Card } from "react-bootstrap";
import Kimmy from "../Images/kim-taehyung-2.jpg";
import "./About.css"; 

function SecondImage() {
  return (
    <Card className="custom-card">
      <div className="image-container">
        <Card.Img variant="top" src={Kimmy} className="card-image" />
        <div className="overlay-text">Kim Taehyung</div>
      </div>
      <Card.Body>
        <Card.Text>
          Kim Taehyung, known as V, is a South Korean singer, songwriter, and actor, best known as a member of BTS.
          Born on December 30, 1995, in Daegu, South Korea, he has gained worldwide fame for his deep, soulful voice 
          and captivating stage presence.
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default SecondImage;
