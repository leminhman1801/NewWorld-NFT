import PropTypes from "prop-types";
import classNames from "classnames/bind";
import styles from "./MenuAccount.module.scss";
import Tippy from "@tippyjs/react/headless";
import AccountItem from "./AccountItem";
import { Wrapper as PopperWrapper } from "~/layouts/Popper";
import Button from "~/components/Button/Button";
const cx = classNames.bind(styles);

function MenuAccount({ children, items = [] }) {
  const renderItems = () => {
    return items.map((item, index) => (
      <AccountItem key={index} data={item}></AccountItem>
    ));
  };
  return (
    <Tippy
      interactive
      placement="bottom-start"
      render={(attrs) => (
        <div className="box" tabIndex="-1" {...attrs}>
          <PopperWrapper className={cx("wrapper")} width="240px" height="299px">
            <Button to="/profile">
              <h4>Account</h4>
            </Button>
            {renderItems()}
          </PopperWrapper>
        </div>
      )}
    >
      {children}
    </Tippy>
  );
}
MenuAccount.propTypes = {
  children: PropTypes.node.isRequired,
  items: PropTypes.array,
};
export default MenuAccount;
