import classNames from "classnames/bind";
import styles from "./Menu.module.scss";

const cx = classNames.bind(styles);
function Menu() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("list-block")}>
        <p>Featured</p>
        <ul>
          <a>New Releases</a>
          <a>Bestsellers</a>
          <a>Member Exclusive</a>
          <a>Jordan</a>
          <a>Retro Running</a>
          <a>National Team Kits</a>
          <a>Customise with Nike By You</a>
          <a>Last Sizes Available</a>
          <a>Sale</a>
          <a>Running Shoe Finder</a>
          <a>Sustainable Materials</a>
        </ul>
      </div>
      <div className={cx("list-block")}>
        <p> Shoes</p>
        <ul>
          <a>All Shoes</a>
          <a>Newest Sneakers</a>
          <a>Lifestyle</a>
          <a>Jordan</a>
          <a>Running</a>
          <a>Basketball</a>
          <a>Football</a>
          <a>Gym and Training</a>
          <a>Sandals and Slides</a>
          <a>Last Sizes Available</a>
          <a>Customise with Nike By You</a>
          <a>Top Kicks Under $120</a>
        </ul>
      </div>
      <div className={cx("list-block")}>
        <p>Clothing</p>
        <ul>
          <a>All Clothing</a>
          <a>Top and T-Shirts</a>
          <a>Shorts</a>
          <a>Pants and Leggings</a>
          <a>Hoodies and Sweatshirts</a>
          <a>Jackets and Gilets</a>
          <a>Jerseys and Kits</a>
          <a>Jordan</a>
        </ul>
      </div>
      <div className={cx("list-block")}>
        <p>Accessories and Equipment</p>
        <ul>
          <a>All Accessories and Equipment</a>
          <a>Bags and Backpacks</a>
          <a>Socks</a>
          <a>Hats and Headwear</a>
        </ul>
      </div>
      <div className={cx("list-block")}>
        Shop By Sport
        <ul>
          <a>Running</a>
          <a>Football</a>
          <a>Basketball</a>
          <a>Gym and Training</a>
          <a>Yoga</a>
          <a>Skateboarding</a>
          <a> Tennis</a>
          <a>Golf</a>
        </ul>
      </div>
      <div className={cx("list-block")}>
        <p>Shop By Brand</p>
        <ul>
          <a>Nike Sportwear</a>
          <a>NikeLab</a>
          <a>Nike By You</a>
          <a>Jordan</a>
          <a>ACG</a>
          <a>NBA</a>
          <a>Nike SB</a>
        </ul>
      </div>
    </div>
  );
}

export default Menu;
