import classNames from "classnames/bind";
import styles from "./CardOverlay.module.scss";

const cx = classNames.bind(styles);

function CardOverlay({ children }) {
  return <div className={cx("wrapper")}>{children}</div>;
}

export default CardOverlay;
