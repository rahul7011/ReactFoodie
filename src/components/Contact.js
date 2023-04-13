import { useState } from "react";
import Logo from "../../media/logo.png";
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [sent, setSent] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    if(name.length!==0 && email.length!==0 && msg.length!==0)
    {
      setName("");
      setEmail("");
      setMsg("");
      setSent(true);
      event.target.reset();
    }
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
            <div className="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none">
              <h3 className="pt-4 text-2xl text-center">
                {sent ? "Thank you for your message!" : "Contact Us!"}
              </h3>
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
                  <textarea
                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="message"
                    placeholder="Type your message"
                    value={msg}
                    onChange={(event) => setMsg(event.target.value)}
                  ></textarea>
                </div>
                <div className="mb-6 text-center">
                  <button
                  disabled={!(email && name && msg)}
                    className="disabled:opacity-10 w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                    type="submit"
                  >
                    Send Message
                  </button>
                </div>
              </form>
              {sent && (
                <h3 className="pt-4 text-2xl text-center">
                  {" "}
                  We have received your message and will get back to you as soon
                  as possible.
                </h3>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
