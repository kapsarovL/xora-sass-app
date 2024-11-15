import {Element, Link as LinkScroll } from "react-scroll";
import Button from "../components/Button.jsx";

/**
Renders the Hero section of the application.
This section includes a title, a subtitle, and a description,
along with a call-to-action button that scrolls to the features section.
@returns {JSX.Element} The JSX element for the Hero section.
 */

const Hero = () => {
    return (
      <section className="relative pb-40 pt-60 max-lg:pt-52 max-lg:pb-36 max-md:pt-36 max-md:pb-32">
        <Element name="hero">
          <div className="container">
            <div className="relative z-2 max-w-512 max-lg:max-w-388">
              <div className="uppercase caption small-2 text-p3">
                Video Editing
              </div>
              <h1 className="mb-6 uppercase h1 text-p4 max-lg:mb-7 max-lg:h2 max-md:mb-4 max-md:text-5xl max-md:leading-12">
                Amazingly simple
              </h1>
              <p className="max-w-440 mb-14 body-1 max-md:mb-10">
                We designed XORA AI Video Editor to be an easy to use, quick to
                learn, and surprisingly powerful.
              </p>
              <LinkScroll to="features" offset={-100} spy smooth>
                <Button icon="/images/zap.svg">Try it now</Button>
              </LinkScroll>
            </div>
  
            <div className="absolute -top-32 left-[calc(50%-340px)] w-[1230px] pointer-events-none hero-img_res">
              <img
                src="/images/hero.png"
                className="size-1230 max-lg:h-auto"
                alt="hero"
              />
            </div>
          </div>
        </Element>
      </section>
    );
  };
  
  export default Hero;