import config from "~/config";
import Home from "~/pages/Home/Home";
import Profile from "~/pages/Profile";
import Product from "~/pages/Product/Product";
import Help from "~/pages/Help";
import MemberShip from "~/pages/MemberShip";
import EnterAccount from "~/pages/EnterAccount";
import EnterPassword from "~/pages/EnterPassword";
import Retail from "~/pages/Retail/Retail";

const publicRoutes = [
  { path: config.routes.home, component: Home },
  { path: config.routes.profile, component: Profile },
  { path: config.routes.product, component: Product },
  { path: config.routes.retail, component: Retail },
  { path: config.routes.help, component: Help },
  { path: config.routes.membership, component: MemberShip },
  { path: config.routes.enteraccount, component: EnterAccount, layout: null },
  { path: config.routes.enterpassword, component: EnterPassword, layout: null },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
