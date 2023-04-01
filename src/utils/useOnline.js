import { useState } from "react";

//This will determine whether the user is online or not?
const useOnline = () => {
  const [isOnline, setIsOnline] = useState(true);
  useState(() => {
    //Note: Whenever we add a eventListener then we always have to clean it
    const handleOnline = () => {
      setIsOnline(true);
    };
    window.addEventListener("online", handleOnline);
    const handleOffline = () => {
      setIsOnline(false);
    };
    window.addEventListener("offline", handleOffline);

    //cleanUp
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return isOnline;
};
export default useOnline;
