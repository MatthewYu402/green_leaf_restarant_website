import './StoryTeaser.css'
import { Link } from 'react-router-dom'

// Components
import Section from '../shared/Section'

// Images
// TODO: replace with real photo
import FamilyImage from '@/assets/images/green-leaf-front.webp'

export default function StoryTeaser() {
  return (
    <Section>
      <div className="story-teaser-wrapper">
        <div className="story-teaser">
          <img src={FamilyImage} className="story-teaser-image" alt="The Green Leaf Sushi family" />
          <div className="story-teaser-content">
            <h2 className="story-teaser-title">A Family Legacy</h2>
            <p className="story-teaser-text">
              For over twenty years, Green Leaf has been more than a restaurant, it has
              extended to your family. We source the finest ingredients with the same care we'd
              use for our own table, creating a community sanctuary rooted in tradition and
              meticulous craft.
            </p>
            <Link to="/about" className="story-teaser-button">Learn Our Story</Link>
          </div>
        </div>
      </div>
    </Section>
  );
}