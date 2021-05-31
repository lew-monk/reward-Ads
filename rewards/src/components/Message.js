import React from "react";

//Local Imports
import Playstore from "../Images/Group 2.svg";

const Message = () => {
  return (
    //Main Section of the Message starts from here
    <div className="flex flex-col justify-center items-center">
      {/* Start of the Message */}

      <div className="caption font-Mont font-bold text-4xl max-w-3xl text-center">
        <p className="text-blue-secondary">
          Download, watch or listen to ads and make money
        </p>
      </div>

      {/* End of the Message */}

      {/* Beginning of the CTA */}
      <div className="image flex mt-8 bg-ctaBg text-primary rounded-3xl">
        <img src={Playstore} alt="Playstore" className="pl-4" />
        <p className="font-Mont px-4 py-2 text-xs">
          Download the app and let the ad-venture begin
        </p>
      </div>
      {/* End of the CTA */}
    </div>
  );
};

export default Message;
