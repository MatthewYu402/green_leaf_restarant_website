import './StoryTeaser.css';
import { Link } from 'react-router-dom';
import Section from '../ui/Section';

interface StoryTeaserProps {
  image: string;
  imageAlt: string;
  title: string;
  text: string;
  button: { label: string; href: string };
}

/** Photo card with a short story blurb and a link to the About page. */
export default function StoryTeaser({ image, imageAlt, title, text, button }: StoryTeaserProps) {
  return (
    <Section>
      <div className="story-teaser-wrapper">
        <div className="story-teaser">
          <img src={image} className="story-teaser-image" alt={imageAlt} />
          <div className="story-teaser-content">
            <h2 className="story-teaser-title">{title}</h2>
            <p className="story-teaser-text">{text}</p>
            <Link to={button.href} className="story-teaser-button">
              {button.label}
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
}
