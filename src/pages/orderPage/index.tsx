import { Breadcrumbs, Link, Typography } from "@mui/material";
import CreateOrder from "../order/CreateOrder";
import GetAllOrder from "../order/GetAllOrder";
import GetOneOrder from "../order/GetOneOrder";
import UpdateOrder from "../order/UpdateOrder";

function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

function Orders() {
  
  return (
    <>
      <Typography
        sx={{
          fontSize: 42,
          color: "#49454E",
          paddingBottom: 1,
          fontWeight: 600,
          fontFamily: "Quicksand",
        }}
      >
        Pedidos
      </Typography>
      <div role="presentation" onClick={handleClick}>
        <Breadcrumbs
          aria-label="breadcrumb"
          sx={{
            fontSize: 16,
            paddingBottom: 3,
            fontFamily: "Quicksand",
            fontWeight: 800,
          }}
        >
          <Link underline="hover" color="inherit" href="../orders">
            Dashboard
          </Link>
          <Link
            underline="hover"
            color="#7E57C2"
            href="/material-ui/react-breadcrumbs/"
            aria-current="page"
          >
            Pedidos
          </Link>
        </Breadcrumbs>
      </div>
      {/* <CreateOrder /> */}
      <GetAllOrder />
      {/* <UpdateOrder />  */}
    </>
  );
}
export default Orders;