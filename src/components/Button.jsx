import clsx from "clsx";
import PropTypes from "prop-types";
import Marker  from "./Marker.jsx";

/**
 * Button component
 *
 * @param {string} icon - The URL of the icon to be displayed on the button
 * @param {string} children - The text to be displayed on the button
 * @param {string} [href] - The URL that the button should link to. If provided, the button will be rendered as an anchor element.
 * @param {string} [containerClassName] - Additional CSS classes to be added to the button or anchor element's container
 * @param {function} [onClick] - The function to be called when the button is clicked. If href is provided, this prop will be ignored.
 * @param {string} [markerFill] - The fill color for the Marker component
 * @returns {JSX.Element} - The rendered Button component
 */

const Button = ({
  icon,
  children,
  href,
  containerClassName,
  onClick,
  markerFill,
}) => {
  const Inner = () => (
        // ... rest of the component

    <>
      <span className="relative flex items-center min-h-[60px] px-4 g4 rounded-2xl inner-before group-hover:before:opacity-100 overflow-hidden">
        <span className="absolute -left-[1px]">
          <Marker markerFill={markerFill} />
        </span>

        {icon && (
          <img
            src={icon}
            alt="circle"
            className="z-10 object-contain mr-5 size-10"
          />
        )}

        <span className="relative uppercase z-2 font-poppins base-bold text-p1">
          {children}
        </span>
      </span>

      <span className="glow-before glow-after" />
    </>
  );
    // ... rest of the component

  return href ? (
    <a
      className={clsx(
        "relative p-0.5 g5 rounded-2xl shadow-500 group",
        containerClassName,
      )}
      href={href}
    >
      <Inner />
    </a>
  ) : (
    <button
      className={clsx(
        "relative p-0.5 g5 rounded-2xl shadow-500 group",
        containerClassName,
      )}
      onClick={onClick}
    >
      <Inner />
    </button>
  );
};

Button.propTypes = {
  icon: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  href: PropTypes.string,
  containerClassName: PropTypes.string,
  onClick: PropTypes.func,
  markerFill: PropTypes.string,
};

 

export default Button;