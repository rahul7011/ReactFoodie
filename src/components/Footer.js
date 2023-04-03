import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Footer = () => {
  const { user } = useContext(UserContext);
  return (
    <span className="p-2 m-2 text-sm font-bold">
      This site is developed by {user.name} - {user.email}
    </span>
  );
};
export default Footer;
