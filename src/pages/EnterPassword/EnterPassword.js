import classNames from "classnames/bind";
import styles from "./EnterPassword.module.scss";
import {
  LogoIcon,
  JordanIcon,
  ShowPassword,
  WarningIcon,
} from "~/components/Icons";
import Button from "~/components/Button";
import { UserContext } from "~/context/UserContext";
import { useEffect, useRef, useState } from "react";
import { useContext } from "react";
import { useDebounce } from "~/hooks";

const cx = classNames.bind(styles);
function EnterPassword() {
  const [isShowed, setIsShowed] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isBlurred, setIsBlurred] = useState(false);
  const [isRequired, setIsRequired] = useState(false);
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const [storedData, setStoredData] = useState("");
  const [password, setPassword] = useState("");

  const debounced = useDebounce(password, 200);
  const inputRef = useRef();
  const { currentUser, setCurrentUser, userData, updateUserData } =
    useContext(UserContext);
  const account = "123456";

  const handleFocusInput = () => {
    setIsFocused(true);
    setIsBlurred(false);
  };

  const handleBlur = () => {
    setIsBlurred(true);
    if (debounced == "") {
      setIsFocused(false);
    }
  };

  const handleInputChange = (e) => {
    const password = e.target.value;
    setPassword(password);
    updateUserData({ password: password });
  };

  const handleButton = (e) => {
    if (debounced !== account) {
      e.preventDefault();
      setIsValid(true);
    } else {
      setCurrentUser(true);
    }
    console.log(userData);
  };

  const handleToggleShow = () => {
    setIsShowed(true);
    if (isShowed) {
      setIsShowed(false);
    }
  };
  useEffect(() => {
    if (!isInitialLoad) {
      inputRef.current.focus();
    } else {
      setIsInitialLoad(false);
      setIsFocused(false);
      return;
    }

    if (password == "") {
      setIsRequired(true);
    } else {
      setIsRequired(false);
    }
  }, [password]);

  // useEffect(() => {
  //   const dataFromStoredData = localStorage.getItem("email");
  //   if (dataFromStoredData) {
  //     setStoredData(dataFromStoredData);
  //   }
  // }, []);

  return (
    <div className={cx("wrapper")}>
      <div className={cx("containter")}>
        <div className={cx("logos")}>
          <LogoIcon className={cx("logo-nike")} />
          <JordanIcon className={cx("logo-jordan")} />
        </div>
        <h1>What's your password?</h1>

        <div className={cx("stored-email")}>
          <span>{userData.email}</span>
          <div className={cx("change")}>
            <label>
              <Button actionsignin to={"/enteraccount"}>
                Edit
              </Button>
            </label>
          </div>
        </div>

        <form>
          {isValid && (
            <div className={cx("warning")}>
              <WarningIcon />

              <p>Your credentials are invalid</p>
            </div>
          )}
          <div className={cx("password")}>
            <div
              className={cx(
                "container-password",
                isFocused ? "input-focused" : "",
                isBlurred ? "input-blurred" : "",
                isRequired ? "input-required" : ""
              )}
            >
              <input
                type={isShowed ? "text" : "password"}
                ref={inputRef}
                onClick={handleFocusInput}
                value={password}
                onBlur={handleBlur}
                onChange={handleInputChange}
              />
              <label className={cx("label-password")}>Password</label>

              <div className={cx("show-password")} onClick={handleToggleShow}>
                <ShowPassword className={cx("show-icon")} />
              </div>
            </div>
            {isRequired && (
              <div className={cx("support-container")}>
                <label className={cx("label-support")}>Required</label>
              </div>
            )}
          </div>
          <div className={cx("recover-password")}>
            <Button actionsignin to={"/enteraccount"}>
              Forgot password?
            </Button>
          </div>
          <div className={cx("container-button")}>
            <Button signin to={"/home"} onClick={handleButton}>
              Sign In
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EnterPassword;
