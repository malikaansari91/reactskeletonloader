import PropTypes from "prop-types";
import "../../styles/skeleton.css";

export const SkeletonLoader = ({ type, width, height }) => {
  return (
    <div
      style={{ width: width, height: height }}
      className={`skeleton-loader shine skeleton-loader__${type}`}
    ></div>
  );
};

SkeletonLoader.propTypes = {
  type: PropTypes.string.isRequired,
};

SkeletonLoader.defaultProps = {
  type: "title",
};
