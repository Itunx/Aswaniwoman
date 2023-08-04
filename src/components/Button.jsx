import React from "react";
import { useNavigate } from "react-router-dom";

const Button = (props) => {
  const navigate = useNavigate();
  const redirectToPage = () => {
    alert("ok");
    navigate("./Contact");
  };

  return (
    <button
      className="bg-black text-white font-[poppins] py-2 px-6 rounded md:ml-8 hover:bg-black-400 duration-500"
      onClick={redirectToPage}
    >
      {props.children}
    </button>
  );
};

export default Button;
