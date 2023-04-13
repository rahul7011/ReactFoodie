import { useState } from "react";
import Logo from "../../media/logo.png";
const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [loggedIn, setIsloggedIn] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    setIsloggedIn(true);
    event.target.reset();
  };
  return (
    <div className="font-mono bg-white">
      <div className="container mx-auto">
        <div className="flex justify-center px-6 my-12">
          <div className="w-full xl:w-3/4 lg:w-11/12 flex">
            <img
              className="w-full h-auto hidden lg:block lg:w-5/12 bg-cover rounded-l-lg"
              src={Logo}
              alt="MISSING JPG"
            ></img>
            {loggedIn === false ? (
              <div className="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none">
                <form
                  className="px-8 pt-6 pb-8 mb-4 bg-white rounded"
                  onSubmit={handleSubmit}
                >
                  <div className="mb-4 flex flex-wrap">
                    <div className="w-full md:w-1/2 md:pr-2 mb-4 md:mb-0">
                      <label
                        className="block mb-2 text-sm font-bold text-gray-700"
                        htmlFor="name"
                      >
                        Name
                      </label>
                      <input
                        className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        id="name"
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                      />
                    </div>
                    <div className="w-full md:w-1/2 md:pl-2">
                      <label
                        className="block mb-2 text-sm font-bold text-gray-700"
                        htmlFor="email"
                      >
                        Email
                      </label>
                      <input
                        className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        id="email"
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                      />
                    </div>
                  </div>
                  <div className="mb-4">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-700"
                      htmlFor="message"
                    >
                      Message
                    </label>
                    <input
                      type="password"
                      className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="password"
                      placeholder="Type your password"
                      value={pass}
                      onChange={(event) => setPass(event.target.value)}
                    ></input>
                  </div>
                  <div className="mb-6 text-center">
                    <button
                      disabled={!(email && name && pass)}
                      className="disabled:opacity-10 w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                      type="submit"
                    >
                      login/signUp
                    </button>
                  </div>
                </form>
              </div>
            ) : (
              <div>
                <h1>
                  Hi <span className="text-purple-500">{name}</span>, Welcome to
                  ReactFoodie!
                  <br />
                  <br />
                </h1>
                Thanks for <span className="text-green-600">
                  signing up
                </span>{" "}
                for the{" "}
                <span className="text-orange-500 font-bold">
                  ultimate food ordering app!
                </span>{" "}
                With <span className="text-blue-400 font-bold">React</span>
                <span className="text-yellow-400 font-bold">Foodie</span>, you
                can easily browse menus, add food items in your cart.We've
                designed our app to make the ordering process as smooth and
                seamless as possible, so you can focus on enjoying your
                delicious meal.
                <br /> As a new member, we'll be sending discount coupons
                straight to your email(
                <span className="text-purple-500">{email}</span>), so keep an
                eye out for those! We're always looking for ways to help our
                loyal customers save money while enjoying their favorite meals.
                <p>
                  Thanks again for joining{" "}
                  <span className="text-blue-400 font-bold">React</span>
                  <span className="text-yellow-400 font-bold">Foodie</span>.
                  We're excited to serve you and help you satisfy all your food
                  cravings!
                </p>
                <br /> Best,
                <br />
                Rahul Maurya and the{" "}
                <span className="text-blue-400 font-bold">React</span>
                <span className="text-yellow-400 font-bold">Foodie</span> Team
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
