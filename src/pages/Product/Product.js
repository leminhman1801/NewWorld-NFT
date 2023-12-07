import classNames from "classnames/bind";
import styles from "./Product.module.scss";
import Button from "~/components/Button";
import { Link } from "react-router-dom";
import { ProductContext } from "~/context/ProductContext";
import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faCheck } from "@fortawesome/free-solid-svg-icons";
import menShoes from "~/config/product/menShoes";
import productObject from "~/config/productsObject";
import { useEffect, useState } from "react";
import ProductItem from "~/components/ProductItem";
import { FiltersIcon } from "~/components/Icons";

const cx = classNames.bind(styles);

function Product() {
  const [isClick, setIsClick] = useState(true);
  const [isColour, setIsColour] = useState(false);
  const [hideFilters, setHideFilters] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [labelHideFilters, setLabelHideFilters] = useState("Hide Filters");
  const [scrollPosition, setScrollPosition] = useState(0);
  const { currentItemsFound, updateFindProductData } =
    useContext(ProductContext);
  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.pageYOffset;
      setScrollPosition(currentPosition);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const gender = menShoes.filters.find(
    (filter) => filter.title.toLowerCase() === "gender"
  );
  const price = menShoes.filters.find(
    (filter) => filter.title.toLowerCase() === "shop by price"
  );
  const colour = menShoes.filters.find(
    (filter) => filter.title.toLowerCase() === "colour"
  );
  const handleHideFilter = () => {
    if (!hideFilters) {
      setHideFilters(true);
      setLabelHideFilters("Show Filters");
      setIsExpanded(true);
    } else {
      setHideFilters(false);
      setLabelHideFilters("Hide Filters");
      setIsExpanded(false);
    }
  };

  return (
    <div className={cx("wrapper")}>
      <div className={cx("container")}>
        <div
          className={cx("product-header", {
            "product-header-scrolled": scrollPosition > 1,
          })}
        >
          <div className={cx("header-title")}>
            <h1>{menShoes.title}</h1> <span></span>
          </div>
          <div className={cx("header-nav")}>
            <div className={cx("filter-content")} onClick={handleHideFilter}>
              <Button>{labelHideFilters}</Button>

              <FiltersIcon className={cx("filter-icon")} />
            </div>
            <div className={cx("sort")}>
              <span>Sort By</span>
              <FontAwesomeIcon className={cx("arrow-up")} icon={faChevronUp} />
            </div>
          </div>
        </div>
        <div
          className={cx("product-result")}
          aria-expanded={isExpanded ? "true" : "false"}
        >
          <div className={cx("product-categories")}>
            <div className={cx("left-nav-categories")}>
              <div className={cx("categories-contents")}>
                {menShoes.categories.map((category, index) => {
                  return (
                    <Button key={index} category to={"/product"}>
                      {category}
                    </Button>
                  );
                })}
              </div>
            </div>
            <div className={cx("left-nav-filters")}>
              <div className={cx("filters-contents")}>
                {gender && (
                  <div className={cx("filters-group")}>
                    <div className={cx("filter-group-headline")}>
                      <div className={cx("trigger-content-label")}>
                        <h3>{gender.title}</h3>
                      </div>
                      <FontAwesomeIcon
                        className={cx("arrow-up")}
                        icon={faChevronUp}
                      />
                    </div>
                    <div className={cx("filter-group-content")}>
                      {gender.items.map((item, itemIndex) => (
                        <div className={cx("filter-group-outer")}>
                          <button role="checkbox">
                            <div className={cx("pseudo-checkbox")}>
                              <FontAwesomeIcon
                                className={cx("check")}
                                icon={faCheck}
                              />
                            </div>
                          </button>
                          <label className={cx("filter-item-label")}>
                            {item}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                {price && (
                  <div className={cx("filters-group")}>
                    <div className={cx("filter-group-headline")}>
                      <div className={cx("trigger-content-label")}>
                        <h3>{price.title}</h3>
                      </div>
                      <FontAwesomeIcon
                        className={cx("arrow-up")}
                        icon={faChevronUp}
                      />
                    </div>
                    <div className={cx("filter-group-content")}>
                      {price.items.map((item, itemIndex) => (
                        <div className={cx("filter-group-outer")}>
                          <button role="checkbox">
                            <div className={cx("pseudo-checkbox")}>
                              <FontAwesomeIcon
                                className={cx("check")}
                                icon={faCheck}
                              />
                            </div>
                          </button>
                          <label className={cx("filter-item-label")}>
                            {item}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                {colour && (
                  <div className={cx("filters-group")}>
                    <div className={cx("filter-group-headline")}>
                      <div className={cx("trigger-content-label")}>
                        <h3>{colour.title}</h3>
                      </div>
                      <FontAwesomeIcon
                        className={cx("arrow-up")}
                        icon={faChevronUp}
                      />
                    </div>
                    <div className={cx("filter-group-content")}>
                      {colour.items.map((item, index) => (
                        <div key={index} className={cx("filter-group-colour")}>
                          <Button colour role="checkbox"></Button>
                          <label className={cx("filter-colour-label")}>
                            {item}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className={cx("product-grid")}>
            <div className={cx("product-wrapper")}>
              {productObject.map((product, index) => {
                console.log(currentItemsFound.tag);
                return (
                  <ProductItem
                    className={cx("product")}
                    key={index}
                    data={product}
                    gender={currentItemsFound.gender}
                    tag={currentItemsFound.tag}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
