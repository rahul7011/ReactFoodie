import { createContext } from "react";
//This is the default values that we have provided
const UserContext = createContext({
  user: {
    name: "Dummy Name",
    email: "dummy@fake.com",
  },
});
//This will help react-dev tools to track the name of this Context(otherwise it would be `Context.Provider`)
UserContext.displayName = "UserContext";
export default UserContext;
