import React from "react";

//Local Imports
import Blob from "../Images/Group 3.svg";
import Player from "../Images/player.svg";
import Museum from "../Images/museums-victoria-RCuDCstVPvw-unsplash.svg";
import Notifications from "../Images/Group 476.png";
import Cola from "../Images/Group 474.png";
import ArtBoard from "../Images/Artboard 1.png";
import Hands from "../Images/image-from-rawpixel-id-2051914-png.png";
import Layer from "../Images/Layer 2.png";
import Logo from "../Images/rewardadz-blue.svg";
import Chat from "../Images/Iconly-Two-tone-Chat.svg";
import Help from "../Images/Iconly-Two-tone-Calling.svg";
import Path1 from "../Images/Path 2539.svg";
import Path2 from "../Images/Path 2553.svg";
import Path3 from "../Images/Path 2541.svg";

const Content = () => {
  return (
    <div>
      {/* Beginning of First Instruction */}

      <div className="relative flex justify-between">
        <div className="max-w-2xl ml-40">
          <h1 className="font-poppins font-bold text-blue-secondary text-xl max-w-xs pb-8">
            Getting started with Ad-venture
          </h1>
          <p className="max-w-md font-Mont">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates
            earum tempore repellendus placeat veritatis cupiditate dolore rem
            aspernatur aliquam accusantium doloremque nobis eaque odit
            praesentium eius, ea cum autem sequi?
          </p>
        </div>
        <div className="relative -mt-24 mr-32">
          <img src={Blob} alt="Blob" />
          <img src={Path1} alt="path" className="absolute right-72" />
        </div>
        <img src={Player} alt="" className="absolute -top-56 -left-12" />
      </div>

      {/* End of First Instruction */}

      {/* Beginning of Second Instruction */}

      <div className="relative flex flex-row-reverse justify-between mt-96">
        <div className="max-w-2xl mr-40">
          <h1 className="font-poppins font-bold text-blue-secondary text-xl max-w-sm pb-8">
            Downlaod, watch or listen to ads and make money
          </h1>
          <p className="max-w-md font-Mont">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates
            earum tempore repellendus placeat veritatis cupiditate dolore rem
            aspernatur aliquam accusantium doloremque nobis eaque odit
            praesentium eius, ea cum autem sequi?
          </p>
        </div>
        <div className="relative -mt-44 ml-24">
          <img src={Blob} alt="blob" />
          <img src={Path2} alt="path" className="absolute left-72" />
        </div>
        <img src={Museum} alt="" className="absolute -top-80 right-12" />
      </div>

      {/* End of Second Instruction */}

      {/* Beginning of the Third Instruction */}

      <div className="relative flex justify-between mt-96">
        <div className="max-w-2xl ml-40">
          <h1 className="font-poppins font-bold text-blue-secondary text-xl max-w-sm pb-8">
            Downlaod, watch or listen to ads and make money
          </h1>
          <p className="max-w-md font-Mont">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates
            earum tempore repellendus placeat veritatis cupiditate dolore rem
            aspernatur aliquam accusantium doloremque nobis eaque odit
            praesentium eius, ea cum autem sequi?
          </p>
        </div>
        <div className="relative -mt-20 mr-32">
          <img src={Blob} alt="blob" className="z-10" />
          <img src={Path3} alt="path" className="absolute right-64 z-0" />
        </div>
        <img src={Player} alt="" className="absolute -top-80 left-80" />
      </div>

      {/* End of the Third Instruction */}

      {/* Beginning of the Fourth Instruction */}

      <div className="relative flex flex-row-reverse justify-between mt-60 pt-32">
        <div className="max-w-2xl mr-40">
          <h1 className="font-poppins font-bold text-blue-secondary text-xl max-w-sm pb-8">
            Downlaod, watch or listen to ads and make money
          </h1>
          <p className="max-w-md font-Mont">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates
            earum tempore repellendus placeat veritatis cupiditate dolore rem
            aspernatur aliquam accusantium doloremque nobis eaque odit
            praesentium eius, ea cum autem sequi?
          </p>
        </div>
        <div className="relative -mt-16 ml-24">
          <img src={Blob} alt="" className="z-10" />
        </div>
        <img
          src={Notifications}
          alt=""
          className="absolute -top-40 right-60 w-80"
        />
        <img
          src={Cola}
          alt="blob"
          className="absolute -bottom-96 right-64 z-10"
        />
        <img
          src={Path2}
          alt="path"
          className="absolute -bottom-3/4 right-24 z-0"
        />
      </div>

      {/* End of the Fourth Instruction */}

      {/* Beginning of the Wind Down */}

      <div className="w-11/12 mt-96 flex mx-auto z-10 pt-20">
        <div>
          <img src={ArtBoard} alt="" />
        </div>
      </div>

      {/* End  of the Wind Down */}

      {/* Beginning of the Call to Action */}
      <div className="relative bg-wound w-11/12 mx-auto mt-40 flex ">
        <div>
          <img src={Hands} alt="Hands" className="max-h-96 w-auto" />
        </div>
        <div className="pl-24 mt-28">
          <h1 className="font-Mont font-bold text-3xl pb-8">
            Get the RewardAdz app
          </h1>
          <p className="max-w-sm font-Mont text-sm tracking-normal pb-8">
            Just like everyone, we all want to make extra money to help us save
            more by using less. You are a step away from making upto $100.00 a
            day from just watching advertisements
          </p>
          <img src={Layer} alt="Google Play Button" className="h-8 w-32 pb-8" />
        </div>
        <img
          src={Player}
          alt="Player Button"
          className="absolute -top-20 right-16"
        />
      </div>
      {/* End of the Call to Action */}

      {/* Beginning of the Footer */}

      <div className="flex mt-40 ml-12">
        {/* Beginning of first column of Footer */}

        <div className="pl-12 mr-40">
          <div className="pb-12">
            <img src={Logo} alt="Logo" />
          </div>
          <div className="pb-6 max-w-4">
            <img src={Layer} alt="Logo" className="w-28" />
          </div>
          <div className="flex pb-6 items-center">
            <div className="w-8 h-8 bg-blue-main rounded-full">
              <img src={Help} alt="Logo" className="w-full h-full p-2" />
            </div>
            <div className="pl-4">
              <p className="font-Mont font-bold">Help Center</p>
            </div>
          </div>
          <div className="flex pb-12 items-center">
            <div className="w-8 h-8 bg-blue-main rounded-full">
              <img src={Chat} alt="Logo" className="w-full h-full p-2" />
            </div>
            <div className="pl-4">
              <p className="font-Mont font-bold">Language English</p>
            </div>
          </div>
        </div>

        {/* End of first column of Footer */}

        {/* Beginning of the Second Column */}

        <div className="flex flex-col mr-40">
          <div className="p-4">
            <h1 className="font-poppins font-bold">About Us</h1>
          </div>
          <div className="p-4">
            <p className="font-Monte">Community</p>
          </div>
          <div className="p-4">
            <p className="font-Monte">Countries</p>
          </div>
          <div className="p-4">
            <p className="font-Monte">Careers</p>
          </div>
          <div className="p-4">
            <p className="font-Monte">Press</p>
          </div>
          <div className="p-4">
            <p className="font-Monte">Blog</p>
          </div>
          <div className="p-4">
            <p className="font-Monte">Contacts</p>
          </div>
          <div className="p-4">
            <p className="font-Monte">Privacy Policy</p>
          </div>
          <div className="p-4">
            <p className="font-Monte">Terms of Service</p>
          </div>
        </div>

        {/* End of the Second Column */}
        {/* Beginnig of the third column of the Footer */}

        <div className="flex flex-col">
          <div>
            <h1 className="font-poppins font-bold p-4">Our Products</h1>
          </div>
          <div>
            <p className="font-Monte p-4">RewardAdz Publishers</p>
          </div>
          <div>
            <p className="font-Monte p-4">RewardAdz Market</p>
          </div>
        </div>

        {/* End of the third column of the Footer */}
      </div>
      {/* End of the Footer */}
    </div>
  );
};

export default Content;
