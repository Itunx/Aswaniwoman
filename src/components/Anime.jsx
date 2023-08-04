import React from "react";
import "../styles.css";
import pex from "../images/pex.jpg";
import pex2 from "../images/pex2.jpg";
import pex3 from "../images/pex3.jpg";
import pix from "../images/pix.jpg";
import pic1 from "../images/pic1.jpg";
import { gsap } from "gsap";
import Category from "./Category";
const { useLayoutEffect, useRef } = React;

const Anime = () => {
  const stylesContainer = {
    backgroundImage: `url(${pic1})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };
  const comp = useRef();
  useLayoutEffect(() => {
    gsap.to("#he", { x: 500, duration: 3 });
  });
  return (
    <>
      <div></div>
      <div style={stylesContainer}>
        <div className="m-20 p-8 flex  my-4">
          <span id="he" className="text-3xl md:text-7xl">
            Cool chic Season
          </span>
        </div>
        <div className="flex mx-8">
          <p className="text-3xl md:text-5xl" id="supply">
            We supply the looks, you shop them<br></br>
            <span className="text-xl">Shop Tops under #5000</span>
          </p>
        </div>
        {/* <div className='flex m-12'>
      <p className="text-2xl">Shop Tops under #5000</p>
      </div> */}
      </div>

      <div className="md:flex justify-between flex-row m-20">
        <div className="image-container">
          <img src={pex} height="200px"></img>
          <div className="image-text">Co-ords</div>
        </div>
        <div className="image-container">
          <img src={pex2}></img>
          <div className="image-text">Tribal</div>
        </div>
        <div className="image-container">
          <img src={pex3}></img>
          <div className="image-text">Accessories</div>
        </div>
      </div>
      <br />
      <br />
      <div className="m-20" id="new">
        <h1 className="next text-xl md:text-9xl">New!</h1>

        <div>
          <h2 className="under ">
            everything under
            <br />
            <span className="ko"> ₦5000</span>
          </h2>
        </div>
        <div>
          <p className="p1">Quality pieces that won’t break the bank.</p>
        </div>
      </div>
      <div className="md:flex flex-row" id="tea">
        <div>
          <img src={pix}></img>
        </div>
        <div className="m-10">
          <h2 id="sea" className="text-4xl">
            its the season
          </h2>
          <br />
          <span>to party</span>
          <br />
          <div id="underline" className="mt-5"></div>
          <p className="my-4 text-2xl" id="put">
            {" "}
            Put your best look forward this season, from casual chic , laid{" "}
            <br />
            back glam to stunning party looks . We’ve got you covered.
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center h-screen">
        <div className="m-10">
          <h2 className="snag text-4xl">don't wait to snag that piece</h2>
          <p className="new text-3xl ml-9 pr-5">New drops everyday</p>
          <div id="underline" className="mb-5"></div>
          <p>
            At AswaniStore, there’s something for everyone at the BEST price
            without <br />
            <span className="ml-24  ">
              compromising on quaity.
            </span>
          </p>
        </div>
      </div>
      <Category />
    </>
  );
};

export default Anime;
