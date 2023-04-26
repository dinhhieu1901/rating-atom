import Lottie from "lottie-react";
import sadAnimation from "../assets/animation/sad.json";
import wowAnimation from "../assets/animation/wow.json";
import loveAnimation from "../assets/animation/love.json";

const Rating = () => {
  return (
    <>
      <div className="h-[50%] flex justify-center items-center gap-6 bg-[#FFFFFF]">
        <div className="w-40 h-40 flex rounded-[50%] bg-primary">
          <Lottie animationData={sadAnimation} />
        </div>
        <div className="w-40 h-40 flex rounded-[50%] bg-primary">
          <Lottie animationData={wowAnimation} />
        </div>
        <div className="w-40 h-40 flex rounded-[50%] bg-primary">
          <Lottie animationData={loveAnimation} loop={2} />
        </div>
      </div>
    </>
  );
};

export default Rating;
