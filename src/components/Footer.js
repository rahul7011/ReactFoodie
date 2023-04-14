import Logo from "../../media/logo.png";

const Footer = () => {
  return (
    <div
      data-testid="footer-detail"
      className="flex flex-col justify-center items-center p-0 text-sm fixed bottom-0 border border-t-1 left-0 right-0 bg-gray-50 h-16"
    >
      <img src={Logo} className="w-16"></img>
      <div>
        <span className="mt-2 text-sm font-thin text-gray-500">
          ©{new Date().getFullYear()}{" "}
        </span>

        <span className="text-blue-400 text-sm font-bold">React</span>
        <span className="text-yellow-400 text-sm font-bold">Foodie</span>
      </div>
      <div className="mt-4"></div>
    </div>
  );
};

export default Footer;
