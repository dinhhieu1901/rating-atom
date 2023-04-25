interface ImageProps {
  icon: string;
  label: string;
}

const Icon = ({ icon, label }: ImageProps) => {
  return (
    <div className="w-24 h-24 mt-4 rounded-[50%] bg-primary hover:bg-secondary text-ternary-light hover:text-ternary-dark cursor-pointer">
      <img className="p-6 hover:scale-150 duration-500" src={icon} alt="" />
      <p className="mt-3 text-xs">{label}</p>
    </div>
  );
};

export default Icon;
