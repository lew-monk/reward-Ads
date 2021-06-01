import React from "react";

//Local imports
import Facebook from "../Images/facebook.svg";
import LinkedIn from "../Images/linkedin.svg";
import Instagram from "../Images/instagram.svg";
import Twitter from "../Images/twitter.svg";

const Footer = () => {
  return (
    <div className="flex">
      {/* Beginning of Legal Declaration */}

      <div className="flex justify-between w-96 items-center ml-48">
        <div>
          <p className="font-poppins text-xs font-medium">
            &#169; RewardAdz Technology Kenya
          </p>
        </div>
        <div className="w-2 max-h-2 rounded-full bg-blue-secondary">
          <p>.</p>
        </div>
        <div>
          <p className="font-poppins text-xs font-medium">
            Legal Cookie Declaration
          </p>
        </div>
      </div>

      {/* End of Legal Declaration */}

      {/* Beginning of Social links */}

      <div className="flex w-56 justify-between ml-96">
        <div className="">
          <img src={Facebook} alt="facebook" />
        </div>
        <div>
          <img src={LinkedIn} alt="LinkedIn" />
        </div>
        <div>
          <img src={Instagram} alt="Instagram" />
        </div>
        <div>
          <img src={Twitter} alt="Twitter" />
        </div>
      </div>

      {/* End of Social links */}
    </div>
  );
};

export default Footer;
