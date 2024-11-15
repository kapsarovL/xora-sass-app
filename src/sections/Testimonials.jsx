import {testimonials} from "../constants/index.jsx";
import TestimonialItem from "../components/TestimonialItem";

/**
 * Testimonials component
 *
 * This component renders a section containing testimonials. The testimonials are imported from
 * a constants file and are split into two columns. The first half of the testimonials are rendered
 * in the left column, and the second half are rendered in the right column.
 *
 * @returns {JSX.Element} A section containing the testimonials.
 */

const Testimonials = () => {
    const halfLength = Math.floor(testimonials.length / 2);

  return (
    <section className="relative py-24 z-2 md:py-28 lg:py-48">
        <div className="container block lg:flex">
            <div className="relative testimonials_head-res z-2 mr-28 flex-300">
                <p className="caption mb-5 max-md:mb-2.5">Wall of Love</p>
                <h3 className="h3 max-md:h5 text-p4">Words from our fans</h3>
            </div>

            <div className="relative flex items-start -my-3 testimonials_inner-after testimonials_inner-before max-lg:static max-md:block">
                <div className="testimonials_group-after flex-50">
                    {testimonials.slice(0, halfLength).map((testimonial) => (
                        <TestimonialItem
                        key={testimonial.id}
                        item={testimonial}
                        containerClassName="last:after:hidden last:after:max-md:block"
                        />
                    ))}
                </div>

                <div className="flex-50">
                    {testimonials.slice(halfLength).map((testimonial) => (
                        <TestimonialItem
                        key={testimonial.id}
                        item={testimonial}
                        containerClassName="last:after:hidden after:right-auto after:left-0 after:max-md:-left-4 md:px-12"
                        />
                    ))}
                </div>
            </div>
        </div>
    </section>
  )
}

export default Testimonials
