import './SignatureSection.css';
import Section from '../ui/Section';
import RichText from '../ui/RichText';

interface SignatureSectionProps {
  eyebrow: string;
  title: string;
  paragraphs: string[];
  image: string;
  imageAlt: string;
}

/** Text on the left, square photo on the right — showcases one signature dish. */
export default function SignatureSection({ eyebrow, title, paragraphs, image, imageAlt }: SignatureSectionProps) {
  return (
    <Section>
      <div className="signature-section">
        <div className="signature-left">
          <h2>{eyebrow}</h2>
          <h1>{title}</h1>
          {paragraphs.map((paragraph) => (
            <p key={paragraph}>
              <RichText text={paragraph} />
            </p>
          ))}
        </div>
        <div className="signature-right">
          <img src={image} alt={imageAlt} className="square-sushi-img" />
        </div>
      </div>
    </Section>
  );
}
