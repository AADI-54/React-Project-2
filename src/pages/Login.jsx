import { useState } from "react";

const Login = () => {
  const [current, setCurrent] = useState("Signup");
  const onsubmitHandler = async (e) => {
    e.preventDefault();
  };

  return (
    <div className="w-full mx-auto mt-14">
      <form
        onSubmit={onsubmitHandler}
        className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto gap-4 text-gray-800"
      >
        <div className="inline-flex items-center gap-2 mb-2 mt-10">
          <p className="prata-regular text-3xl">{current}</p>
          <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
        </div>
        {current === "Login" ? (
          ""
        ) : (
          <input
            type="text"
            className="w-full px-3 py-2 border border-gray-800"
            placeholder="Name"
            required
          />
        )}
        <input
          type="email"
          className="w-full px-3 py-2 border border-gray-800"
          placeholder="E-mail"
          required
        />
        <input
          type="password"
          className="w-full px-3 py-2 border border-gray-800"
          placeholder="Password"
          required
        />
        <div className="w-full flex justify-between text-sm mt-[-8px]">
          <p className="cursor-pointer">Forgot Password?</p>
          {current === "Login" ? (
            <p onClick={() => setCurrent("Signup")} className="cursor-pointer">
              Create account
            </p>
          ) : (
            <p onClick={() => setCurrent("Login")} className="cursor-pointer">
              Login Here
            </p>
          )}
        </div>
        <button className="bg-black text-white font-light px-8 py-2 mt-4">
          {current === "Login" ? "Sign-in" : "Sign-up"}
        </button>
      </form>
    </div>
  );
};

export default Login;
