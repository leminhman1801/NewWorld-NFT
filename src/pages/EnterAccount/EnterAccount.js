import classNames from "classnames/bind";
import styles from "./EnterAccount.module.scss";
import { useState, useEffect, useRef } from "react";
import { useDebounce } from "~/hooks";
import { JordanIcon, LogoIcon } from "~/components/Icons";
import Button from "~/components/Button";

const cx = classNames.bind(styles);

function EnterAccount() {
  const [isFocused, setIsFocused] = useState(false);
  const [isBlurred, setIsBlurred] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [email, setEmail] = useState("");

  const inputEmailRef = useRef();
  const labelEmailRef = useRef();

  const debounced = useDebounce(email, 500);
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isValid = regex.test(debounced);

  const handleFocusInput = () => {
    setIsFocused(true);
  };

  const handleInputValue = (e) => {
    const inputEmailValue = e.target.value;
    setEmail(inputEmailValue);
  };

  const handleBlur = () => {
    setIsBlurred(true);
    if (email == "") {
      setIsFocused(false);
    }
  };

  const handleButton = (e) => {
    if (isValid == false) {
      e.preventDefault();
    }
  };

  useEffect(() => {
    if (isBlurred) {
      setIsValidEmail(isValid);
      console.log(isValid);
    }
    if (isValid) {
      setIsBlurred(false);
      localStorage.setItem("email", debounced);
    }
  }, [debounced, isBlurred]);

  return (
    <div className={cx("wrapper")}>
      <div className={cx("containter")}>
        <div className={cx("logos")}>
          <LogoIcon className={cx("logo-nike")} />
          <JordanIcon className={cx("logo-jordan")} />
        </div>
        <h1>Enter your email to join us or sign in.</h1>
        <form>
          <div className={cx("languages")}>
            <span>Vietnam</span>
            <div className={cx("change")}>
              <label>Change</label>
              <div className={cx("country")}></div>
            </div>
          </div>
          <div className={cx("email")}>
            <div
              className={cx(
                "container-email",
                isFocused ? "input-focused" : "",
                isBlurred ? "input-blurred" : ""
              )}
            >
              <input
                ref={inputEmailRef}
                onClick={handleFocusInput}
                value={email}
                onBlur={handleBlur}
                onChange={handleInputValue}
              />
              <label className={cx("label-email")} ref={labelEmailRef}>
                Email
              </label>

              {!isValidEmail && (
                <div className={cx("support-container")}>
                  <label className={cx("label-support")}>
                    Invalid email address
                  </label>
                </div>
              )}
            </div>
          </div>
          <div className={cx("policy-terms")}>
            <div className={cx("container-policy-terms")}>
              <p>
                By continuing, I agree to Nike’s <a>Privacy Policy</a> and{" "}
                <a>Terms of Use</a>.
              </p>
            </div>
          </div>
          <div className={cx("container-button")}>
            <Button signin to={"/enterpassword"} onClick={handleButton}>
              Continue
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EnterAccount;
