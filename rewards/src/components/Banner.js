import React from "react";

//Local Imports
import RewardLogo from "../Images/rewardad-logo.svg";
import GooglePlayWhite from "../Images/google-play-white.svg";
import Group from "../Images/Group 1.png";
// import Microphone from "../Images/top-player.svg";
// import Clothe from "../Images/Group 465@2x.png";
// import Club from "../Images/background-blur.svg";
// import Coffee from "../Images/Group 479@2x.png";
// import Toast from "../Images/Group 477.png";
// import Player from "../Images/player.svg";
// // import svgDivider from "../Images/Mwaura-LewisAsset 1.svg";
// import CoffeeBag from "../Images/Group 481@2x.png";
// import Poster from "../Images/Group 480@2x.png";

const Banner = () => {
  return (
    <div className="h-full">
      {/* Holder for the logo */}

      <div className="ml-36 pt-6 ">
        <img src={RewardLogo} alt="Logo" />
      </div>

      {/* End of Holder for the Logo */}

      {/* Images that will be absolutly places on the banner */}
      {/* <div className="absolute top-6 -right-10 p-0 m-0">
        <img src={Microphone} alt="mic" className="h-auto w-auto" />
      </div>
      <div className="absolute top-52 right-12 p-0 m-0 ">
        <img src={Toast} alt="mic" className="h-auto w-auto" />
      </div>
      <img
        src={Clothe}
        alt="Clothes"
        className="absolute top-7 right-64 p-0 m-0 w-auto h-auto"
      />
      <img
        src={Club}
        alt="Clothes"
        className="absolute top-9 right-73 p-0 m-0 filter blur-xs w-auto h-auto"
      />
      <img
        src={Coffee}
        alt="Clothes"
        className="absolute top-1/3 left-1/2 p-0 m-0 h-auto w-auto"
      />
      <img
        src={Player}
        alt="Clothes"
        className="absolute bottom-40 left-1/3 p-0 m-0 w-auto h-auto"
      />

      <img src={CoffeeBag} alt="" className="absolute -bottom-72 left-24" />
      <img src={Poster} alt="" className="absolute bottom-4 -right-8" /> */}

      <img src={Group} alt="banners" className="absolute top-5 -right-10" />
      {/* End of absolutly placed Images */}

      {/* Beginning of the Call to Action Section */}
      <div className="cta ml-36 pt-52">
        <div className="text-gray-200 pb-4">
          <h1 className="text-primary  text-3xl font-poppins font-bold">
            Let the Ad-venture Begin
          </h1>
        </div>
        <div>
          <p className="text-primary max-w-lg pb-6 font-poppins text-base">
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
