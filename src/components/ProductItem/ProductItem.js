import PropTypes from "prop-types";
import classNames from "classnames/bind";
import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import routes from "~/config/routes";
import Image from "~/components/Image/Image";
import styles from "./ProductItem.module.scss";
import { useState } from "react";
import Button from "../Button";

const cx = classNames.bind(styles);

function ProductItem({ data, className, gender, category, tag }) {
  const [isMessaging, setIsMessaging] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const [subImgSrc, setSubImgSrc] = useState("");
  const [isContainProduct, setIsContainProduct] = useState(false);
  const [numberProducts, setNumberProducts] = useState(0);
  const handleEnterProduct = () => {
    setIsHover(true);
  };
  const handleLeaveProduct = () => {
    setIsHover(false);
  };
  const handleSubImg = (urlSubImg) => {
    setSubImgSrc(urlSubImg);
  };
  useEffect(() => {
    console.log("Effect" + gender, tag);
    if (data.gender === gender && data.tags.includes(tag)) {
      console.log("true");
      setIsContainProduct(true);
    }
  }, [data.gender, data.tags, gender, tag]);

  return (
    <>
      {isContainProduct && data.tags.includes(tag) && (
        <div
          className={cx("wrapper", className)}
          onMouseEnter={handleEnterProduct}
          onMouseLeave={handleLeaveProduct}
        >
          <div className={cx("container")}>
            <Link to={routes.profile.replace(":id", data.id)}>
              <div className={cx("img-wrapper")}>
                <Image
                  className={cx("product-img")}
                  src={subImgSrc || data.image}
                  fallback="https://res.cloudinary.com/dfbuzvevj/image/upload/v1696522206/abcc67fe433a80674cf4a5f7a14cb63a_kznfpt.jpg"
                />
              </div>
              <div className={cx("info")}>
                <div
                  className={cx(
                    "product-card-count-wrapper",
                    isHover ? "show-product-card-count" : ""
                  )}
                >
                  {data.variants &&
                    data.variants.map((variant, index) => {
                      return (
                        <div
                          className={cx("subimage-wrapper")}
                          onMouseEnter={() => handleSubImg(variant.subimage)}
                        >
                          <Button subimage>
                            <Image
                              className={cx("subimage")}
                              src={variant.subimage}
                            />
                          </Button>
                        </div>
                      );
                    })}
                </div>
                {!isMessaging && (
                  <div className={cx("messaging")}>Messaging</div>
                )}
                <div className={cx(isHover ? "is-hovering" : "")}>
                  <h4 className={cx("name")}>{data.name}</h4>
                  <p className={cx("subtitle")}>{data.des}</p>
                  <div className={cx("count")}> Colours </div>
                </div>
                <span className={cx("price")}>${data.price} </span>
              </div>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
ProductItem.propTypes = { data: PropTypes.object.isRequired };
export default ProductItem;
