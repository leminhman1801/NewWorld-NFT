import PropTypes from "prop-types";
import classNames from "classnames/bind";
import styles from "./Button.module.scss";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);
function Button({
  to,
  href,
  nav,
  tag,
  primary,
  account,
  actionsignin,
  inner,
  outer,
  signin,
  category,
  colour,
  subimage,
  children,
  onClick,

  ...passProps
}) {
  let Comp = "button";
  const props = {
    onClick,
    ...passProps,
  };

  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.href = href;
    Comp = "a";
  }
  const classes = cx("wrapper", {
    nav,
    tag,
    primary,
    account,
    inner,
    outer,
    actionsignin,
    signin,
    category,
    colour,
    subimage,
  });
  return (
    <Comp className={classes} {...props}>
      <span>{children}</span>
    </Comp>
  );
}
Button.propTypes = {
  to: PropTypes.string,
  href: PropTypes.string,
  account: PropTypes.bool,
  primary: PropTypes.bool,
  inner: PropTypes.bool,
  outer: PropTypes.bool,
  // children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};
export default Button;
