import {Outlet} from "react-router-dom";
const About=()=>{
    return (
        <div>
            <h1>About Us Page</h1>
            <p>This is the About Page</p>

            <Outlet></Outlet>   {/*This is for the rendering of Profile Page(Nested Routing) */}
        </div>
    );
}
export default About;