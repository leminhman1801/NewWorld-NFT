import PropTypes from "prop-types";
import classNames from "classnames/bind";
import styles from "./Popper.module.scss";

const cx = classNames.bind(styles);
function Wrapper({ children, className, width, height }) {
  const style = {
    width: width,
    height: height,
  };
  return (
    <div className={cx("wrapper", className)} style={style}>
      {children}
    </div>
  );
}
Wrapper.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
};
export default Wrapper;
