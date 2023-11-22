import classNames from "classnames/bind";
import styles from "./Home.module.scss";
import Button from "~/components/Button/Button";
import Image from "~/components/Image/Image";
import CardOverlay from "~/components/CardOverlay";
import config from "~/config";
import SimpleSlider from "~/layouts/components/Slider";
const cx = classNames.bind(styles);

function Home() {
  return (
    <div className={cx("wrapper")}>
      {config.datasHome.map((data, index) => {
        return (
          <div className={cx("tag-product-home")} key={index}>
            <h2 className={cx("tag-name")}>{data.tag}</h2>
            <div className={cx("tag-container")}>
              {!!data.image && (
                <div className={cx("tag-body")}>
                  <Image
                    src={data.image}
                    fallback="https://res.cloudinary.com/dfbuzvevj/image/upload/v1696522206/abcc67fe433a80674cf4a5f7a14cb63a_kznfpt.jpg"
                    className={cx("tag-image")}
                  />
                  <CardOverlay>
                    <p className={cx("subtitle")}>{data.subtitle}</p>
                    <h3 className={cx("title")}>{data.title}</h3>
                    <p className={cx("body")}>{data.body}</p>
                    <div className={cx("btn-primary-container")}>
                      <Button primary outerImg>
                        Shop Now
                      </Button>
                    </div>
                  </CardOverlay>
                </div>
              )}

              {!!data.coupleImg && (
                <div className={cx("container-coupleImg")}>
                  {data.coupleImg.map((singleImg, index) => {
                    console.log(singleImg);
                    return (
                      <div className={cx("content-coupleImg")} key={index}>
                        <Image
                          key={index}
                          src={singleImg}
                          fallback="https://res.cloudinary.com/dfbuzvevj/image/upload/v1696522206/abcc67fe433a80674cf4a5f7a14cb63a_kznfpt.jpg"
                          className={cx("singleImg")}
                        />
                      </div>
                    );
                  })}
                </div>
              )}
              {!!data.slide && <div className={cx("container-slider")}></div>}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Home;
