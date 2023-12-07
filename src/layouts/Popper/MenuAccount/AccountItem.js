import Button from "~/components/Button/Button";
import { UserContext } from "~/context/UserContext";
import { useContext } from "react";
function AccountItem({ data }) {
  const { currentUser, setCurrentUser } = useContext(UserContext);

  const handleLogOut = () => {
    if (currentUser) {
      setCurrentUser(false);
    }
  };

  return (
    <Button
      account
      to={data.to}
      onClick={data.title == "Log Out" ? handleLogOut : undefined}
    >
      <p>{data.title}</p>
    </Button>
  );
}

export default AccountItem;
