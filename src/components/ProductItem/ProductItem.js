import PropTypes from "prop-types";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import Image from "~/components/Image/Image";
import styles from "./ProductItem.module.scss";

const cx = classNames.bind(styles);
function ProductItem({ data }) {
  return (
    <Link to={`/@${data.nickname}`} className={cx("wrapper")}>
      <Image
        className={cx("product-img")}
        src={data.avatar}
        fallback="https://res.cloudinary.com/dfbuzvevj/image/upload/v1696522206/abcc67fe433a80674cf4a5f7a14cb63a_kznfpt.jpg"
      />
      <div className={cx("info")}>
        <h4 className={cx("name")}>{data.full_name}</h4>
        <p className={cx("desc")}>{data.bio}</p>
        <span className={cx("price")}>{data.id} </span>
      </div>
    </Link>
  );
}
ProductItem.propTypes = { data: PropTypes.object.isRequired };
export default ProductItem;
