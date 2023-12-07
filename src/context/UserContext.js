import { useState, createContext } from "react";

const UserContext = createContext();
function UserProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(false);
  const [userData, setUserData] = useState({ email: "", password: "" });
  const updateUserData = (newData) => {
    setUserData({ ...userData, ...newData });
  };
  const value = {
    currentUser,
    setCurrentUser,
    userData,
    updateUserData,
  };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export { UserContext, UserProvider };
