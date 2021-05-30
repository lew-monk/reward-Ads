import React from "react";

//Local Imports
import RewardLogo from "../Images/rewardad-logo.svg";
import GooglePlayWhite from "../Images/google-play-white.svg";
import Microphone from "../Images/top-player.svg";
import Clothe from "../Images/Group 465@2x.png";
import Club from "../Images/background-blur.svg";
import Coffee from "../Images/Group 479@2x.png";
import Toast from "../Images/Group 477@2x.png";
import Player from "../Images/player.svg";

const Banner = () => {
  return (
    <div className="h-full">
      {/* Holder for the logo */}

      <div className="ml-48 pt-6 ">
        <img src={RewardLogo} alt="Logo" c />
      </div>

      {/* Images that will be absolutly places on the banner */}

      <div className="absolute top-6 -right-10 p-0 m-0 w-80 h-24">
        <img src={Microphone} alt="mic" className="h-full w-full" />
      </div>
      <div className="absolute top-80 right-32 p-0 m-0 w-80 h-24">
        <img src={Toast} alt="mic" className="h-full w-full" />
      </div>
      <img
        src={Clothe}
        alt="Clothes"
        className="absolute top-6 right-101 p-0 m-0 w-103"
      />
      <img
        src={Club}
        alt="Clothes"
        className="absolute top-8 right-102 p-0 m-0 filter blur-xs"
      />

      <img
        src={Coffee}
        alt="Clothes"
        className="absolute top-104 right-105 p-0 m-0 h-60 w-64"
      />
      <img
        src={Player}
        alt="Clothes"
        className="absolute top-104 right-105 p-0 m-0 h-80 w-64"
      />

      {/* End of absolutly placed Images */}

      {/* End of Holder for the Logo */}

      {/* Beginning of the Call to Action Section */}
      <div className="cta ml-48 pt-64">
        <div className="text-gray-200 pb-9">
          <h1 className="text-primary  text-4xl font-poppins font-bold">
            Let the Ad-venture Begin
          </h1>
        </div>
        <div>
          <p className="text-primary max-w-lg pb-12 font-poppins text-lg">
            Download, watch or listen to ads and make extra money for every
            adventure you complete
          </p>
        </div>
        <div>
          <img src={GooglePlayWhite} alt="Google Button" />
        </div>
      </div>
      {/* End of the Call to Action Section */}
    </div>
  );
};

export default Banner;
