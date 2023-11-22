import classNames from "classnames/bind";
import styles from "./DefaultLayout.module.scss";
import Header from "~/layouts/components/Header/Header";
import { Wrapper as HelpWrapper } from "../Popper";
import Tippy from "@tippyjs/react/headless";
import MenuAccount from "~/layouts/Popper/MenuAccount/MenuAccount";
import { JordanIcon, UserIcon } from "~/components/Icons";

const cx = classNames.bind(styles);
const ACCOUNT_ITEMS = [
  { title: "Profile", to: "/" },
  { title: "Orders", to: "/" },
  { title: "Favorites", to: "/" },
  { title: "Inbox", to: "/" },
  { title: "Experiences", to: "/" },
  { title: "Account Settings", to: "/" },
  { title: "Logout", to: "/" },
];
function DefaultLayout({ children }) {
  const boxHelp = [
    { title: "Order Status", to: "/" },
    { title: "Dispatch and Delivery", to: "/" },
    { title: "Returns", to: "/" },
    { title: "Contact Us", to: "/" },
    { title: "Privacy Policy", to: "/" },
    { title: "Terms of Sale", to: "/" },
    { title: "Terms of Use", to: "/" },
    { title: "Send Us Feedback", to: "/" },
  ];
  const currentUser = true;
  return (
    <div className={cx("wrapper")}>
      <div className={cx("userMenu-block")}>
        <div className={cx("logo-jordan")}>
          <JordanIcon className={cx("jordan-icon")} />
        </div>
        <div className={cx("userMenu")}>
          <button to="/product">Find a Store</button>
          <Tippy
            interactive
            placement="bottom"
            render={(attrs) => (
              <div className={cx("help-box")} tabIndex="-1" {...attrs}>
                <HelpWrapper className={cx("help-wrapper")}>
                  <h4 className={cx("help-title")}>Help</h4>
                  <ul>
                    {boxHelp.map((helpItem, key) => (
                      <li key={key}>{helpItem.title}</li>
                    ))}
                  </ul>
                </HelpWrapper>
              </div>
            )}
          >
            <button>Help</button>
          </Tippy>
          {currentUser ? (
            <MenuAccount items={ACCOUNT_ITEMS}>
              <div className={cx("account-block")}>
                <button>Hi, User</button>
                <UserIcon className={cx("user-icon")} />
              </div>
            </MenuAccount>
          ) : (
            <>
              <button>Join Us</button>
              <button>Sign In</button>
            </>
          )}
        </div>
      </div>
      <Header />
      <div className={cx("discount-block")}>
        <span>Students Now Get 10% Off</span>
      </div>
      <div className={cx("container")}>
        <div className={cx("content")}>{children}</div>
      </div>
    </div>
  );
}

export default DefaultLayout;
