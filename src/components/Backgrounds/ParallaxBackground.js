import { Parallax } from "react-parallax";

const ParallaxBackground = ({ children, imageSrc}) => (
  <Parallax
    className="parallax"
    bgImage={imageSrc}
    strength={300}
  >
    {children}
  </Parallax>
);

export default ParallaxBackground;
