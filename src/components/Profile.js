import { useState,useEffect } from "react";
const Profile=(props)=>{
    const [count,setCount]=useState(0);
    // const [count2,setCount2]=useState(0);
    useEffect(()=>{
        //API call
        // let timer=setInterval(() => {
        //     console.log("setInterval");
        // }, 1000);
        // console.log("useEffect");

        //This will work like componentWillUnmount
        // return ()=>{
            //This is the place where we clear do cleanups
        //     clearInterval(timer);
        // }
    },[]);
    // console.log("render");
    return (
        <div>
            <h2>This is a Profile Page</h2>
            <h4>Name:{props.name}</h4>
            <h4>Count:{count}</h4>
            <button onClick={()=>setCount(1)} >setCount</button>
            {/* {console.log(props)} */}
        </div>
    );
}
export default Profile;