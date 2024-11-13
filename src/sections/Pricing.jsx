import {Element} from "react-scroll";
import {useState} from "react";
import clsx from "clsx"; 
import CountUp from "react-countup";
import {plans} from "../constants/index";
import Button from "../components/Button";

const Pricing = () => {
    const [monthly, setMonthly] = useState(false);

  return (
    <section>
        <Element name="pricing">
            <div className="container">
                <div className="relative pb-40 mx-auto border-l border-r max-w-960 pricing-head_before border-s2 bg-s1/50 pt-28 max-xl:max-w-4xl max-lg:border-none max-md:pb-32 max-md:pt-16">
                <h3 className="relative max-w-lg mx-auto text-center h3 max-lg:h4 max-md:h5 z-3 mb-14 text-p4 max-md-:mb-11 max-sm:max-w-sm">
                    Flexible pricing for teams of all sizes
                </h3>

                <div className="relative z-4 mx-auto flex w-[375px] rounded-3xl border-[3px] border-s4/25 bg-s1/50 p-2 backdrop-blur-[6px] max-md:w-[310px]">
                <button 
                className={clsx(
                    "pricing-head_btn", monthly && "text-p4"
                )}
                onClick={() => setMonthly(true)}
                >
                    Monthly
                </button>
                <button 
                className={clsx(
                    "pricing-head_btn", !monthly && "text-p4"
                )}
                onClick={() => setMonthly(false)}
                >
                    Annual
                </button>

                <div className={clsx(
                    "g4 rounded-14 before:h-100 pricing-head_btn_before absolute left-2 top-2 h-[calc(100%-16px)] w-[calc(50%-8px)] overflow-hidden shadow-400 transition-transform duration-500",
                    !monthly && "translate-x-full",
                )}
                />
                </div>

                <div className="pricing-bg">
                    <img
                    src="/images/bg-outlines.scg"
                    width={960}
                    height={380}
                    alt="outline"
                    className="absolute inset-0 opacity-5 mix-blend-soft-light"
                    />
                </div>
                </div>

                {/* pricing section */}
                <div className="relative flex items-start -mt-12 scroll-hide z-2 max-xl:gap-5 max-xl:overflow-auto max-xl:pt-6">
                    {plans.map((plan, index) => (
                        <div 
                        key={plan.id}
                        className="pricing-plan_first pricing-plan_last pricing-plan_odd pricing-plan_even relative border-2 max-xl:min-w-80 max-lg:rounded-3xl p-7 xl:w-[calc(33.33%+2px)]"
                        >
                            {index === 1 && (
                                <div className="absolute top-0 left-0 g4 h-30 z-1 rounded-tl-3xl rounded-tr-3xl" />
                            )}

                            <div 
                            className={clsx(
                                "absolute left-0 right-0 z-2 flex items-center justify-center",
                                index ==- 1 ? "-top-6" : "-top-6 xl:-top-11",
                            )}
                            >
                                <img 
                                src={plan.logo}
                                alt={plan.title}
                                className={clsx(
                                    "object-contain drop-shadow-2xl",
                                    index === 1 ? "size-[120px]" : "size-[88px]",
                                )}
                                />
                                </div>

                                <div 
                                className={clsx(
                                    "relative flex flex-col items-center",
                                    index === 1 ? "pt-24" : "pt-12",
                                )}
                                >
                                    <div className={clsx(
                                        "small-2 rounded-20 relative z-2 mx-auto mb-6 border-2 px-4 py-1.5 uppercase",
                                        index === 1 ? "border-p3 text-p3" : "border-p1 text-p1",
                                    )}
                                    >
                                        {plan.title}
                                    </div>

                                    <div className="relative flex items-center justify-center z-2">
                                        <div
                                        className={clsx(
                                            "h-num flex items-start",
                                            index === 1 ? "text-p3" : "text-p4",
                                        )}
                                        >
                                            ${" "}
                                            <CountUp
                                            start={plan.placeMonthly}
                                            end={monthly ? plan.priceMonthly : plan.priceYearly}
                                            duration={0.4}
                                            useEasing={false}
                                            preserveValue
                                            /> 
                                        </div>
                                        <div className="relative ml-1 uppercase small-1 top-3">
                                            / mo
                                        </div>
                                    </div>
                                   </div>

                                   <div 
                                   className={clsx(
                                    "body-1 relative z-2 mb-10 border-b-s2 pb-9 text-center text-p4",
                                    index === 1 && "border-b",
                                   )}
                                   >
                                   {plan.caption}
                                   </div>
                                   <ul className="mx-auto space-y-4 xl:px-7">
                                    {plan.features.map((feature) => (
                                        <li 
                                        key={feature}
                                        className="relative flex items-center gap-5"
                                        >
                                            <img
                                            src={"/images/check.png"}
                                            alt="check"
                                            className="object-contain size-10"
                                            />
                                            <p className="flex-1">{feature}</p>
                                        </li>
                                    ))}
                                   </ul>

                                   <div className="flex justify-center w-full mt-10">
                                    <Button icon={plan.icon}>Get Started</Button>
                                   </div>

                                   {index === 1 && (
                                    <p className="small-compact mt-9 text-center text-p3 before:mx-2.5 before:content-['-'] after:mx-2.5 after:content-['-']">
                                        Limited time offer
                                    </p>
                                   )}
                     </div>
                    ))}
                </div>
            </div>
        </Element>
      
    </section>
  )
}

export default Pricing
