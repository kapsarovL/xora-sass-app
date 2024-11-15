import PropTypes from "prop-types";

/**
 * The Marker component returns an SVG element that represents a marker with a specified fill color.
 * @param {Object} props - The props object containing the fill color for the marker.
 * @param {string} props.fill - The fill color for the marker. If not provided, defaults to '#2EF2FF'.
 * @returns {JSX.Element} - The SVG element representing the marker.
 */

const Marker = ({ fill }) => {
  return (
    <svg
      width="8"
      height="22"
      viewBox="0 0 8 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.5 0H0.5V4V18V22H2.5V16.25L7.63991 11.7526C8.09524 11.3542 8.09524 10.6458 7.63991 10.2474L2.5 5.75V0Z"
        fill={fill || '#2EF2FF'}
      />
    </svg>
  );
};

Marker.propTypes = {
  fill: PropTypes.string.isRequired
}

export default Marker;
