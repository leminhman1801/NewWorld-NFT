import { useEffect, useRef, useState } from "react";
import Tippy from "@tippyjs/react/headless";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import classNames from "classnames/bind";
import {
  CartIcon,
  CloseIcon,
  FavoriteIcon,
  LogoIcon,
  SearchIcon,
} from "~/components/Icons";

import * as searchServices from "~/services/searchServices";
import { useDebounce } from "~/hooks";
import "tippy.js/dist/tippy.css";
import styles from "./Header.module.scss";
import Button from "~/components/Button/Button";
import Menu from "~/components/Menu/Menu";
import ProductItem from "~/components/ProductItem/ProductItem";
import AccountItem from "~/layouts/Popper/MenuAccount/MenuAccount";
import config from "~/config";
import { ProductContext } from "~/context/ProductContext";
import { useContext } from "react";
const cx = classNames.bind(styles);
function Header() {
  const [searchValue, setSearchValue] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);
  const [searchResult, setSearchResult] = useState([]);
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  const [isMenuHovered, setIsMenuHovered] = useState(false);
  const [showCloseIcon, setShowCloseIcon] = useState(false);
  const [hoveredElement, setHoveredElement] = useState(null);
  const [textLiHover, setTextLiHover] = useState("");
  const [isHoveredItems, setIsHoveredItems] = useState(false);

  const inputRef = useRef();
  const navItems = useRef();

  const { currentItemsFound, updateFindProductData } =
    useContext(ProductContext);

  const handleButtonHover = (event) => {
    const hoveredElementText = event.target.textContent.toLowerCase();

    updateFindProductData({ gender: hoveredElementText });
    setIsButtonHovered(true);
  };
  const handleButtonLeave = () => {
    setIsButtonHovered(false);
    // if (!isHoveredItems) {
    //   updateFindProductData({ gender: "" });
    // }
  };
  const handleMenuEnter = () => {
    setIsMenuHovered(true);
    setIsButtonHovered(true);
  };

  const handleMenuLeave = () => {
    setIsMenuHovered(false);
  };
  const handleInput = (e) => {
    const inputValue = e.target.value;
    if (!inputValue.startsWith(" ")) {
      setSearchValue(inputValue);
    }
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
    if (!isButtonHovered && !isMenuHovered) {
      updateFindProductData({ gender: "" });
    }
  }, [isButtonHovered, isMenuHovered]);
  const debounced = useDebounce(searchValue, 500);
  useEffect(() => {
    if (!debounced.trim()) {
      return;
    }
    const fetchApi = async () => {
      const result = await searchServices.search(debounced);
      setSearchResult(result);
    };
    fetchApi();
  }, [debounced]);

  const getClassNames = (isHovered) => {
    return cx({
      "active-class": isHovered,
      "inactive-class": !isHovered,
    });
  };

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
          <Link to={config.routes.home} className={cx("logo-link")}>
            <LogoIcon className={cx("logo-icon")} />
          </Link>
        </div>
        <div className={cx("navigation")}>
          <div className={cx("nav-items")} ref={navItems}>
            <ul>
              <li
                onMouseOver={handleButtonHover}
                onMouseOut={handleButtonLeave}
                className={cx(
                  currentItemsFound.gender === "new & featured"
                    ? "menu-hovered"
                    : ""
                )}
              >
                New & Featured
              </li>

              <li
                onMouseOver={handleButtonHover}
                onMouseOut={handleButtonLeave}
                className={cx(
                  currentItemsFound.gender === "men" ? "menu-hovered" : ""
                )}

                // className={cx({ "menu-hovered": isMenuHovered })}
              >
                Men
              </li>
              <li
                onMouseOver={handleButtonHover}
                onMouseOut={handleButtonLeave}
                className={cx(
                  currentItemsFound.gender === "women" ? "menu-hovered" : ""
                )}
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
            {isButtonHovered && (
              <div
                onMouseEnter={handleMenuEnter}
                onMouseLeave={handleMenuLeave}
                className={cx("menu-block", { "show-menu": isButtonHovered })}
              >
                <Menu />
              </div>
            )}
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
            {/* {searchResult.map((result) => (
              <ProductItem key={result.id} data={result} />
            ))} */}
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
