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
        <div className=" -mt-20 mr-32">
          <img src={Blob} alt="" />
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
        <div className=" -mt-40 ml-24">
          <img src={Blob} alt="" />
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
        <div className=" -mt-20 mr-32">
          <img src={Blob} alt="" />
        </div>
        <img src={Player} alt="" className="absolute -top-56 left-72" />
      </div>

      {/* End of the Third Instruction */}

      {/* Beginning of the Fourth Instruction */}

      <div className="relative flex flex-row-reverse justify-between mt-96 pt-32">
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
        <div className=" -mt-16 ml-24">
          <img src={Blob} alt="" />
        </div>
        <img src={Notifications} alt="" className="absolute -top-80 right-12" />
        <img src={Cola} alt="" className="absolute -bottom-96 right-64" />
      </div>

      {/* End of the Fourth Instruction */}

      {/* Beginning of the Wind Down */}

      <div className="w-11/12 mt-96 flex mx-auto">
        <div>
          <img src={ArtBoard} alt="" />
        </div>
      </div>

      {/* End  of the Wind Down */}

      {/* Beginning of the Call to Action */}
      <div className="relative bg-wound w-11/12 mx-auto mt-24 flex ">
        <div>
          <img src={Hands} alt="Hands" className="max-h-80 w-auto" />
        </div>
        <div className="pl-24 mt-16">
          <h1 className="font-Mont font-bold text-3xl pb-8">
            Get the RewardAdz app
          </h1>
          <p className="max-w-md font-Mont text-sm tracking-wide pb-8">
            Just like everyone, we all want to make extra money to help us save
            more by using less. You are a step away from making upto $100.00 a
            day from just watching advertisements
          </p>
          <img
            src={Layer}
            alt="Google Play Button"
            className="h-8 w-auto pb-8"
          />
        </div>
      </div>
      {/* End of the Call to Action */}
    </div>
  );
};

export default Content;
