interface Props {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const GameModeCard = ({ title, description, icon }: Props) => {
  return (
    <div className="flex flex-row items-start justify-start gap-y-2 bg-[#232323] w-full border-white white-shadow px-[1rem] py-[0.5rem] hover-border-yellow hover-yellow-shadow transition-all duration-300">
      <div className="flex-1 flex flex-col w-full items-start gap-y-2">
        <h2 className="text-3xl text-white joyful-font font-normal text-start uppercase">{title}</h2>
        <p className="text-white text-sm satoshi-font" dangerouslySetInnerHTML={{ __html: description }}></p>
      </div>
      {icon}
    </div>
  );
};

export default GameModeCard;
