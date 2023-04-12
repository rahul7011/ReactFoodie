import React from "react";

//Class Based Components
class Profile extends React.Component {
  //UseState works like this in class based component
  constructor(props) {
    super(props); //mandatory step
    //Best place to create state variables
    //To create state
    this.state = {
      userInfo: {
        name: "Dummy Name",
        location: "Dummy Location",
      },
    };
    console.log(this.props.name + "-constructor");
  }
  //UseEffect
  async componentDidMount() {
    //API Call
    const data = await fetch("https://api.github.com/users/rahul7011");
    const json = await data.json();
    //pushing the data
    this.setState({
      userInfo: json,
    });
    console.log(this.props.name + "-componentDidMount");
  }

  //same as dependency array in functional component
  componentDidUpdate(prevProps, prevState) {
    // if(this.state.count!== prevState.count)
    // {
    //this would work like dependency array : [count]
    // }
    //called after the render
    console.log("component did update");
  }
  componentWillUnmount() {
    //This is the place where we clear do cleanups
    console.log("componentWillUnmount");
  }

  //you cannot create a class based component without a render() method
  render() {
    console.log(this.props.name + "-render");
    return <div></div>;
  }
}
export default Profile;

/*
Class Based Component lifeCycle
1.Constructor
2.render
3.component did mount

*/
// https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
/**
 * Parent Constructor
 * Parent Render
 *	  First Child Constructor
 *	  First Child Render
 *	  Second Child Constructor
 *	  Second Child Render
 *	  First Child ComponentDidMount
 *	  Second Child ComponentDidMount
 * Parent ComponentDidMount
 */
