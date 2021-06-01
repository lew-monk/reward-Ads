import React from "react";

//Local Imports
import Playstore from "../Images/Group 2.svg";
import path from "../Images/Path 2553.svg";

const Message = () => {
  return (
    //Main Section of the Message starts from here
    <div className="flex flex-col justify-center items-center">
      {/* Start of the Message */}

      <div className="caption font-Mont font-bold text-xl max-w-3xl text-center">
        <p className="text-blue-secondary">
          Download, watch or listen to ads and make money
        </p>
      </div>

      {/* End of the Message */}

      {/* Beginning of the CTA */}
      <div className="image relative flex mt-8 bg-ctaBg text-primary rounded-3xl">
        <img src={Playstore} alt="Playstore" className="pl-4" />
        <p className="font-Mont px-2 py-2 text-xs">
          Download the app and let the ad-venture begin
        </p>
        <img
          src={path}
          alt=""
          className="absolute left-1/3 top-8 transform scale-200"
        />
      </div>
      {/* End of the CTA */}
    </div>
  );
};

export default Message;
