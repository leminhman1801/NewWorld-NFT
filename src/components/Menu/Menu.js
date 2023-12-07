import classNames from "classnames/bind";
import styles from "./Menu.module.scss";
import Button from "../Button";
import { menus } from "~/config/menus";
import { useContext } from "react";
import { ProductContext } from "~/context/ProductContext";
import { Link } from "react-router-dom";
const cx = classNames.bind(styles);
function Menu() {
  const { currentItemsFound, updateFindProductData } =
    useContext(ProductContext);
  const handleHoverTag = (event) => {
    const hoveredElementText = event.target.textContent.toLowerCase();
    updateFindProductData({ tag: hoveredElementText });
  };
  console.log(currentItemsFound);
  return (
    <div className={cx("wrapper")}>
      {menus.map((menu, index) => {
        if (menu.gender === currentItemsFound.gender) {
          return (
            <div className={cx("list-block")}>
              <p>{menu.category}</p>

              {menu.tags.map((tag, index) => {
                return (
                  <div onMouseEnter={handleHoverTag}>
                    <Button to={`/@${tag}`} tag key={index}>
                      {tag}
                    </Button>
                  </div>
                );
              })}
            </div>
          );
        } else {
          return null;
        }
      })}
    </div>
  );
}

export default Menu;
