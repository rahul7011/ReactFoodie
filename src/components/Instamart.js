import { useState } from "react";

const Section = ({ title, description, isVisible, setIsVisible }) => {
  return (
    <div className="border border-black p-2 m-2">
      <h2 className="font-bold text-lg">{title}</h2>
      {isVisible ? (
        <button
          className="text-pink-600 font-bold text-sm underline"
          onClick={() => {
            setIsVisible();
          }}
        >
          Hide
        </button>
      ) : (
        <button
          className="text-pink-600 font-bold text-sm underline"
          onClick={() => {
            setIsVisible();
          }}
        >
          Show
        </button>
      )}
      {isVisible && <p>{description}</p>}
    </div>
  );
};
const Instamart = () => {
  const [visibleSection, setvisibleSection] = useState("");
  return (
    <div>
      <h1 className="font-bold text-3xl p-2 m-2">Instamart</h1>
      <Section
        title={"About Instamart"}
        description={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vel orci porta non pulvinar neque. Lacus vel facilisis volutpat est velit egestas dui. Pellentesque sit amet porttitor eget. Ultricies tristique nulla aliquet enim. Hendrerit gravida rutrum quisque non tellus. Duis at consectetur lorem donec massa. Turpis cursus in hac habitasse platea dictumst. Tempor commodo ullamcorper a lacus vestibulum sed. Odio facilisis mauris sit amet massa vitae tortor condimentum lacinia. Ornare aenean euismod elementum nisi quis eleifend. Aliquet enim tortor at auctor urna nunc id. Sit amet facilisis magna etiam tempor orci eu lobortis elementum. Diam in arcu cursus euismod quis viverra nibh. A lacus vestibulum sed arcu non odio euismod lacinia at. Volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque in. Aliquam sem et tortor consequat id porta."
        }
        isVisible={visibleSection === "about"}
        setIsVisible={() =>
          setvisibleSection(visibleSection.length === 0 ? "about" : "")
        }
      ></Section>
      <Section
        title={"Team at Instamart"}
        description={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vel orci porta non pulvinar neque. Lacus vel facilisis volutpat est velit egestas dui. Pellentesque sit amet porttitor eget. Ultricies tristique nulla aliquet enim. Hendrerit gravida rutrum quisque non tellus. Duis at consectetur lorem donec massa. Turpis cursus in hac habitasse platea dictumst. Tempor commodo ullamcorper a lacus vestibulum sed. Odio facilisis mauris sit amet massa vitae tortor condimentum lacinia. Ornare aenean euismod elementum nisi quis eleifend. Aliquet enim tortor at auctor urna nunc id. Sit amet facilisis magna etiam tempor orci eu lobortis elementum. Diam in arcu cursus euismod quis viverra nibh. A lacus vestibulum sed arcu non odio euismod lacinia at. Volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque in. Aliquam sem et tortor consequat id porta."
        }
        isVisible={visibleSection === "team"}
        setIsVisible={() =>
          setvisibleSection(visibleSection.length === 0 ? "team" : "")
        }
      ></Section>
      <Section
        title={"Careers at Instamart"}
        description={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vel orci porta non pulvinar neque. Lacus vel facilisis volutpat est velit egestas dui. Pellentesque sit amet porttitor eget. Ultricies tristique nulla aliquet enim. Hendrerit gravida rutrum quisque non tellus. Duis at consectetur lorem donec massa. Turpis cursus in hac habitasse platea dictumst. Tempor commodo ullamcorper a lacus vestibulum sed. Odio facilisis mauris sit amet massa vitae tortor condimentum lacinia. Ornare aenean euismod elementum nisi quis eleifend. Aliquet enim tortor at auctor urna nunc id. Sit amet facilisis magna etiam tempor orci eu lobortis elementum. Diam in arcu cursus euismod quis viverra nibh. A lacus vestibulum sed arcu non odio euismod lacinia at. Volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque in. Aliquam sem et tortor consequat id porta."
        }
        isVisible={visibleSection === "careers"}
        setIsVisible={() =>
          setvisibleSection(visibleSection.length === 0 ? "careers" : "")
        }
      ></Section>
    </div>
  );
};
export default Instamart;
