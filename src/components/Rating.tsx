import { Sad, Smile, Cry, Happy } from "../assets/image";
import Icon from "./Icon";

const Rating = () => {
  return (
    <>
      <div className="h-[50%] flex justify-center gap-6 cursor-pointer bg-[#FFFFFF]">
        <Icon icon={Sad} label="Buồn" />
        <Icon icon={Smile} label="Haha" />
        <Icon icon={Cry} label="Khóc" />
        <Icon icon={Happy} label="Thương thương" />
      </div>
    </>
  );
};

export default Rating;
