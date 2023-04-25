import { Sad, Smile, Cry, Happy } from "../assets/image";
import Icon from "./Icon";
import Lottie from "lottie-react";
import sadAnimation from "../assets/animation/sad.json";

const Rating = () => {
  return (
    <>
      <div className="h-[50%] flex justify-center gap-6 bg-[#FFFFFF]">
        <Icon icon={Sad} label="Buồn" />
        <Icon icon={Smile} label="Haha" />
        <Icon icon={Cry} label="Khóc" />
        <Icon icon={Happy} label="Thương thương" />
        <Lottie animationData={sadAnimation} label="Buồn" />
      </div>
    </>
  );
};

export default Rating;
