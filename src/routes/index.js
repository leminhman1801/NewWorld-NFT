import Home from "~/pages/Home";
import Profile from "~/pages/Profile";
import Product from "~/pages/Product";
import Help from "~/pages/Help";
import JoinUs from "~/pages/JoinUs";
import SignIn from "~/pages/SingIn";
const publicRoutes = [
  { path: "/", component: Home },
  { path: "/:nickname", component: Profile },
  { path: "/product", component: Product },
  { path: "/help", component: Help },
  { path: "/joinus", component: JoinUs },
  { path: "/signin", component: SignIn },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
