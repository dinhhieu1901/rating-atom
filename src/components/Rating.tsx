import Lottie from "lottie-react";
import sadAnimation from "../assets/animation/sad.json";
import wowAnimation from "../assets/animation/wow.json";
import loveAnimation from "../assets/animation/love.json";

const Rating = () => {
  return (
    <>
      <div className="h-[50%] flex justify-center items-center gap-6 bg-[#FFFFFF]">
        <div className="w-20 h-20 sm:w-40 sm:h-40 flex rounded-[50%] bg-primary">
          <Lottie animationData={sadAnimation} loop={2} />
        </div>
        <div className="w-20 h-20 sm:w-40 sm:h-40 flex rounded-[50%] bg-primary">
          <Lottie animationData={wowAnimation} loop={2} />
        </div>
        <div className="w-20 h-20 sm:w-40 sm:h-40 flex rounded-[50%] bg-primary">
          <Lottie animationData={loveAnimation} loop={2} />
        </div>
      </div>
    </>
  );
};

export default Rating;
