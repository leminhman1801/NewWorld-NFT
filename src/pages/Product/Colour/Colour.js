import classNames from "classnames/bind";
import styles from "./Colour.module.scss";

const cx = classNames.bind(styles);

function Colour() {
  return <div className={cx("wrapper")}></div>;
}

export default Colour;
