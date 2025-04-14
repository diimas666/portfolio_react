import reactLogo from '../../img/react.png';
import cssLogo from '../../img/css.png';
import htmlLogo from '../../img/html.png';
import jsLogo from '../../img/js.png';
import sassLogo from '../../img/sass.png';
import nodeLogo from '../../img/node.png';
import wordpressLogo from '../../img/wordpress.png';
import reactNative from '../../img/react-native.svg';
// Массив с данными о технологиях
const techs = [
  { id: 1, src: jsLogo, alt: 'JavaScript' },
  { id: 2, src: htmlLogo, alt: 'HTML' },
  { id: 3, src: reactLogo, alt: 'ReactJS' },
  { id: 4, src: cssLogo, alt: 'CSS' },
  { id: 5, src: nodeLogo, alt: 'Node.js' },
  { id: 6, src: sassLogo, alt: 'Sass' },
  { id: 7, src: wordpressLogo, alt: 'WordPress' },
  { id: 8, src: reactNative, alt: 'React Native' },
];
const TechGrid = () => {
  return (
    <div className="tech-grid">
      {techs.map((tech) => (
        <div key={tech.id} className="tech-item">
          <img src={tech.src} alt={tech.alt} />
        </div>
      ))}
    </div>
  );
};

export default TechGrid;
