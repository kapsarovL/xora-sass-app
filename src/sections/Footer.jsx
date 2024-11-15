import {socials} from "../constants/index";

/**
 * A functional component representing the website's footer.
 * It includes a copyright notice, privacy policy and terms of use links, and social media icons.
 *
 * @returns {React.ReactElement} The rendered footer.
 */

const Footer = () => {
  return (
    <footer>
      <div className="container py-10">
                    {/* Flex container for the footer's contents */}
            <div className="flex w-full max-md:flex-col">
                                {/* Left section: Copyright notice */}
                <div className="flex flex-wrap items-center justify-center flex-1 gap-5 small-compact">
                    <p className="opacity-70">Copyright, Kapsarov.Lazar 2024</p>
                </div>
                                {/* Middle section: Policy links */}
                <div className="flex items-center justify-center sm:ml-auto">
                    <p className="relative transition-all duration-500 legal-after mr-9 text-p5 hover:text-p1">
                        Privacy Policy
                    </p>
                    <p className="transition-all duration-500 text-p5 hover:text-p1">
                        Terms of Use
                    </p>
                </div>
                {/* Right section: Social media icons */}
                <ul className="flex justify-center flex-1 gap-3 max-md:mt-10 md:justify-end">
                    {socials.map(({id, icon, url, title }) => (
                        <li key={id}>
                        <a href={url} className="social-icon">
                            <img 
                            src={icon}
                            alt={title}
                            className="object-contain size-1/3"
                            />
                        </a>
                        </li>
                    ))}
                </ul>
            </div>
      </div>
    </footer>
  )
}

export default Footer
