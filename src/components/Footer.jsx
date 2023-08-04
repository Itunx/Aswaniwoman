import React, { useState } from "react";
import "../styles.css";
const Footer = () => {
  const [email, setEmail] = useState("");

  const handleChange = (event) => {
    setEmail(event.target.value);
  };

  return (
    <div id="fits">
      <div className="md:flex justify-between flex-row " id="footer">
        <div id="store">
          <h2 className="foot text-2xl my-6">ASWANISTORE</h2>
          <br />
          <br />

          <p className="foots">
            Aswanistore is an independent online retailer <br />
            offering variety of products ranging from <br />
            branded products, stock from other retailers
            <br /> to its own label ‘T5S’.
          </p>
        </div>
        <div id="contactus">
          <h2 className="foot text-2xl my-6">Contact us</h2>
          <p className="foots">
            Lekki Lagos, Nigeria
            <br />
            phone: +234 902 424 6912
            <br />
            e-mail: hello@the5kshop.com
            <br />
            www.aswanistore.com
          </p>
        </div>
        <div id="help">
          <h2 className="foot text-2xl my-6">Help & Support</h2>
          <p className="foots">frequently asked questions</p>
          <p className="foots"> delivery & returns</p>
          <p className="foots"> privacy policy</p>
          <p className="foots"> privacy policy</p>
          <p className="foots"> Size guide</p>
        </div>
        <div id="sub">
          <h2 className="foot text-2xl my-6">subcribe</h2>
          <input type="text"></input>
        </div>
      </div>
    </div>
  );
};

export default Footer;
