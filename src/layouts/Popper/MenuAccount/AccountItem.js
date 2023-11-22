import Button from "~/components/Button/Button";

function AccountItem({ data }) {
  return (
    <Button account to={data.to}>
      <p>{data.title}</p>
    </Button>
  );
}

export default AccountItem;
