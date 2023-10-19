import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tippy from "@tippyjs/react/headless";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import {
  CartIcon,
  CloseIcon,
  FavoriteIcon,
  LogoIcon,
  SearchIcon,
} from "~/components/Icons";
import { useEffect, useRef, useState } from "react";
import "tippy.js/dist/tippy.css";
import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import Button from "~/components/Button";
import Menu from "~/components/Menu";
import ProductItem from "~/components/ProductItem";
import AccountItem from "~/layouts/Popper/MenuAccount";
const cx = classNames.bind(styles);
function Header() {
  const [searchValue, setSearchValue] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);
  const [searchResult, setSearchResult] = useState([]);
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  const [showCloseIcon, setShowCloseIcon] = useState(false);
  const inputRef = useRef();
  const navItems = useRef();
  const handleButtonHover = () => {
    setIsButtonHovered(true);
    console.log("hovered");
  };
  const handleButtonLeave = () => {
    setIsButtonHovered(false);
  };
  const handleMenuContainerEnter = () => {
    setIsButtonHovered(true);
  };

  const handleMenuContainerLeave = () => {
    setIsButtonHovered(false);
  };
  const handleInput = (e) => {
    const inputValue = e.target.value;
    setSearchValue(inputValue);
    setIsExpanded(inputValue.length > 0 || isExpanded);
    setShowCloseIcon(inputValue.length > 0);
  };
  const handleClearInput = () => {
    setSearchValue("");
    setShowCloseIcon(false);
    inputRef.current.focus();
  };
  const handleCancelSearch = () => {
    setSearchValue("");
    setIsExpanded(false);
  };
  useEffect(() => {
    if (!searchValue.trim()) {
      return;
    }
    fetch(
      `https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(
        searchValue
      )}&type=less`
    )
      .then((res) => res.json())
      .then((res) => setSearchResult(res.data));
  }, [searchValue]);
  useEffect(() => {
    if (navItems.current) {
      const liItems = navItems.current.querySelectorAll("li");
      liItems.forEach((li) => {
        console.log(li);
      });
    }
  });
  return (
    <header
      className={cx("wrapper")}
      aria-expanded={isExpanded ? "true" : "false"}
    >
      <div className={cx("inner")}>
        <div
          className={cx("logo")}
          aria-expanded={isExpanded ? "true" : "false"}
        >
          <LogoIcon className={cx("logo-icon")} />
        </div>
        <div className={cx("navigation")}>
          <div className={cx("nav-items")} ref={navItems}>
            <ul>
              <li
                onMouseOver={handleButtonHover}
                onMouseOut={handleButtonLeave}
              >
                New & Featured
              </li>
              <div
                className={cx("menu-block", { "show-menu": isButtonHovered })}
                onMouseOver={handleButtonHover}
                onMouseOut={handleButtonLeave}
              >
                <Menu />
              </div>
              <li
                onMouseOver={handleButtonHover}
                onMouseOut={handleButtonLeave}
              >
                Men
              </li>
              <li
                onMouseOver={handleButtonHover}
                onMouseOut={handleButtonLeave}
              >
                Women
              </li>
              <li
                onMouseOver={handleButtonHover}
                onMouseOut={handleButtonLeave}
              >
                Kids
              </li>
              <li
                onMouseOver={handleButtonHover}
                onMouseOut={handleButtonLeave}
              >
                Sales
              </li>
              <li
                onMouseOver={handleButtonHover}
                onMouseOut={handleButtonLeave}
              >
                SNKRS
              </li>
            </ul>
          </div>

          <div className={cx("search")}>
            <div className={cx("pre-search")}>
              <SearchIcon className={cx("search-btn")} />

              <input
                ref={inputRef}
                value={searchValue}
                onChange={handleInput}
                placeholder="Search"
                spellCheck={false}
              />
              {showCloseIcon && (
                <CloseIcon
                  className={cx("close-btn")}
                  onClick={handleClearInput}
                />
              )}
            </div>
          </div>
        </div>
        <div className={cx("actions")}>
          <FavoriteIcon className={cx("favorite-icon")} />
          <CartIcon className={cx("cart-icon")} />
          {isExpanded && (
            <Button className={cx("cancel-btn")} onClick={handleCancelSearch}>
              Cancle
            </Button>
          )}
        </div>
      </div>
      {isExpanded && (
        <div className={cx("search-result")}>
          <div className={cx("suggestion")}>
            <h4>Top Suggestion</h4>
          </div>
          <div className={cx("product")}>
            {searchResult.map((result) => (
              <ProductItem key={result.id} data={result} />
            ))}
          </div>
          <div className={cx("backdrop", "show-backdrop")}></div>
        </div>
      )}
      <div
        className={cx("backdrop", { "show-backdrop": isButtonHovered })}
      ></div>
    </header>
  );
}

export default Header;
