import { useState } from "react";
const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(0);
  return [isLoggedIn, setIsLoggedIn];
};
export default useAuth;
