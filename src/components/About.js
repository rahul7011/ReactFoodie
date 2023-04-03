import ProfileFunctionComponent from "./Profile";
import ProfileClassComponent from "./ProfileClass";
import React from "react";
import { Outlet } from "react-router-dom";
import UserContext from "../utils/UserContext";
const About2 = () => {
  return (
    <div>
      <h1>About Us Page</h1>
      <p>This is the About Page</p>

      <ProfileFunctionComponent name={"Rahul"} />
      <ProfileClassComponent name={"RahulClass"} />
    </div>
  );
};

class About extends React.Component {
  constructor(props) {
    super(props); //mandatory step
    console.log("Parent-constructor");
    //best place to create state variables
  }
  componentDidMount() {
    console.log("Parent-ComponentDidMount");
  }
  render() {
    console.log("Parent-render");
    return (
      <div>
        {/* This is how we use Context in class components */}
        <UserContext.Consumer>
          {({ user }) => (
            <h1 className="p-3 m-3 font-bold text-pink-600">
              {user.name} - {user.email}
            </h1>
          )}
        </UserContext.Consumer>
        <h1>About Us Page</h1>
        <p>This is the About Page</p>

        <ProfileFunctionComponent name={"Rahul"} />
        {/* <ProfileClassComponent name={"first Child"} /> */}
        {/* <ProfileClassComponent name={"Second Child"} /> */}
      </div>
    );
  }
}

export default About;

//Class Based Component lifecycle
// 1.constructor
// 2.render
// 3.ComponentDidMount
