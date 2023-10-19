import Button from "~/components/Button";

function AccountItem({ data }) {
  return (
    <Button accountItem to={data.to}>
      <p>{data.title}</p>
    </Button>
  );
}

export default AccountItem;
