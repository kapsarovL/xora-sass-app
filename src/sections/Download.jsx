import {Element} from "react-scroll";
import {links, logos} from "../constants/index";
import Marker from "../components/Marker";


const Download = () => {
  return (
    <section>
        <Element name="download"
        className="relative pt-24 pb-32 g7 max-lg:pb-24 max-md:py-16"
        >
            <div className="container">
                <div className="flex items-center">
                    <div className="relative mr-6 flex-540 max-xl:flex-280 max-lg:flex256 max-md:flex-100">
                        <div className="mb-10">
                            <img 
                            src="/images/xora.svg"
                            width={150}
                            height={50}
                            alt="xora"
                            />
                        </div>

                        <p className="max-w-md mb-10 body-1">
                            Try it now for free on iOS, Android, PC, Web - whatever your
                            flavor, we`ve got you covered.
                        </p>

                        <ul className="flex flex-wrap items-center gap-6">
                            {links.map(({id, url, icon}) => (
                                <li
                                key={id}
                                className="download_tech-link download_tech-link_last-before download_tech-link_last-after"
                                >
                                    <a 
                                    href={url}
                                    className="relative flex items-center justify-center duration-500 border-2 size-22 download_tech-icon_before rounded-half border-s1 transition-borderColor"
                                    > 
                                    <span className="absolute rotate-90 -top-2">
                                        <Marker />
                                    </span>
                                    <img 
                                    src={"/images/lines.svg"}
                                    alt="lines"
                                    className="absolute object-contain size-13/20"
                                    />
                                    <span className="download_tech-icon">{icon}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="mb-10 max-md:hidden">
                        <div className="download_preview-before download_preview-after rounded-40 relative w-[955px] border-2 border-s5 p-6">
                            <div className="relative px-6 pb-6 rounded-3xl bg-s1 pt-14">
                                <span className="download_preview-dot left-6 bg-p2"/>
                                <span className="download_preview-dot left-11 bg-p2" />
                                <span className="download_preview-dot left-16 bg-p1/15" />

                                <img 
                                src="/images/screen.jpg"
                                width={855}
                                height={659}
                                alt="screen"
                                className="rounded-xl"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <ul className="flex justify-center mb-24 max-lg:hidden">
                    {logos.map(({id, url, width,height, title}) => (
                        <li key={id} className="mx-10">
                            <img src={url} width={width} height={height} alt={title} />
                        </li>
                    ))}
                </ul>
            </div>
        </Element>
      
    </section>
  )
}

export default Download
