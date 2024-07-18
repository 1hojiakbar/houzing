import useUniqeId from "../hooks/useId";
import HomePage from "../pages/Home/Home";
import PropertiesPage from "../pages/Properties/Properties";

interface NavbarItem {
  id: number;
  title: string;
  path: string;
  private: boolean;
  hidden: boolean;
  element: React.FC | string;
}

const navbar: NavbarItem[] = [
  {
    id: Number(useUniqeId),
    title: "Home",
    path: "/",
    element: HomePage,
    private: false,
    hidden: false,
  },
  {
    id: Number(useUniqeId),
    title: "Properties",
    element: PropertiesPage,
    path: "/properties",
    private: false,
    hidden: false,
  },
  {
    id: Number(useUniqeId),
    title: "Properties",
    element: "Generic Login",
    path: "/login",
    private: false,
    hidden: true,
  },
];

export default navbar;
