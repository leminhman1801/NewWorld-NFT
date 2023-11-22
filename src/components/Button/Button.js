import PropTypes from "prop-types";
import classNames from "classnames/bind";
import styles from "./Button.module.scss";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);
function Button({
  to,
  href,
  ref,
  primary,
  account,
  actionsignin,
  inner,
  outer,
  signin,
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
    primary,
    account,
    inner,
    outer,
    actionsignin,
    signin,
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
  accountItem: PropTypes.bool,
  primary: PropTypes.bool,
  innerImg: PropTypes.bool,
  outerImg: PropTypes.bool,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};
export default Button;
