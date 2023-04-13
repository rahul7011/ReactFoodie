import { useContext } from "react";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Footer = () => {
  const { name,email } = useSelector((store) => store.user.detail);
  return (
    <span data-testid="footer-detail" className="p-2 m-2 text-sm font-bold fixed bottom-0 left-0 right-0">
      This site is developed by {name} - {email}
    </span>
  );
};

export default Footer;
