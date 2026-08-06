import Section from './Section'
import './SignatureSection.css'

import signatureImage from '../assets/square-sushi.png'

export default function SignatureSection() {
  return(
    <Section className="signature-section">
      <div className='signature-left'>
        <h2>Our Signature Creations</h2>
        <h1>The 20th Year Roll</h1>
        <p>Every year, we craft a brand-new sushi roll to commemorate another year <br />since we first opened our doors. We call them our <b>Anniversary Rolls</b> - a living archive of our journey, one roll at a time. </p>
        <br />
        <p>Crafted to commemorate our two decades of culinary experience, the 20th Year Roll comes with spicy salmon and avocado at the center, topped with smokey seared salmon, and finished with yum yum sauce, crunchy tempura batter flakes, and sliced jalepeños.</p>
      </div>
      <div className='signature-right'>
        <img src={signatureImage} alt="21st Year Roll" className="square-sushi-img"></img>
      </div>
    </Section>
  );
}