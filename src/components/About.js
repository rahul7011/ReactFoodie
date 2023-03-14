import ProfileFunctionComponent from "./Profile";
import ProfileClassComponent from "./ProfileClass";
import React from "react";
import { Outlet } from "react-router-dom";
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
