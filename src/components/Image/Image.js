import PropTypes from "prop-types";
import classNames from "classnames";
import { useState, forwardRef } from "react";
import images from "~/assets/images";
import styles from "./Image.module.scss";
function Image({
  src,
  alt,
  ref,
  fallback: customFallback = images.noImage,
  className,
  ...props
}) {
  const [fallback, setFallback] = useState("");
  const handleError = () => {
    setFallback(customFallback);
  };
  return (
    <img
      className={classNames(styles.wrapper, className)}
      src={fallback || src}
      alt={alt}
      ref={ref}
      {...props}
      onError={handleError}
    />
  );
}
Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  ref: PropTypes.string,
  fallback: PropTypes.string,
};
export default forwardRef(Image);
