import CheckIcon from "./icon/CheckIcon";
import ChronoIcon from "./icon/ChronoIcon";
import CwdBottomIcon from "./icon/cubeWithDot/CwdBottomIcon";
import CwdTopIcon from "./icon/cubeWithDot/CwdTopIcon";
import UserIcon from "./icon/UserIcon";

interface Props {
  title: string;
  price: string;
  priceSuffix: string;
  personText?: string;
  chronoText?: string;
  checkText?: string;
}

const PricingCard = ({ title, price, priceSuffix, personText, chronoText, checkText }: Props) => {
  return (
    <div className="flex flex-col bg-[#232323] w-full border-white white-shadow px-[1rem] py-[0.5rem] hover-border-yellow hover-yellow-shadow transition-all duration-300">
      <div className="flex flex-col w-full items-start gap-y-1">
        <h4 className="text-lg text-white satoshi-font-medium font-normal text-start">{title}</h4>
        <span className="text-3xl text-white satoshi-font-bold font-normal text-start">{price}{" "}<span className="text-base joyful-font">{priceSuffix}</span></span>
      </div>
      <div className="h-[1rem]" />
      {personText && <div className="mb-1 w-full flex flex-row gap-x-2 items-center">
        <UserIcon width={20} height={20} color={"#FFFFFF"} />
        <span className="text-base text-white satoshi-font text-start">{personText}</span>
      </div>}
      {checkText && <div className="mb-1 w-full flex flex-row gap-x-2 items-center">
        <CheckIcon width={20} height={20} color={"#FFFFFF"} />
        <span className="text-base text-white satoshi-font text-start">{checkText}</span>
      </div>}
      {chronoText && <div className="w-full flex flex-row gap-x-2 items-center">
        <ChronoIcon width={20} height={20} color={"#FFFFFF"} />
        <span className="text-base text-white satoshi-font text-start">Session de{" "}<span className="text-yellow">{chronoText}</span></span>
      </div>}
      <div className="h-[1rem]" />
      <div className="w-full flex flex-row justify-end">
        <div className="flex flex-row w-min">
          <button className="w-full flex flex-col gap-y-1 cursor-pointer" onClick={() => {
            window.open("https://quizmaster-nice.resasoft.fr/FR/Centre-v2.awp?P1=QM1", "_blank");
          }}>
            <div className="h-[2px] w-full bg-white" />
            <div className="flex flex-row items-center gap-x-5">
              <CwdTopIcon height={45} color={"#ffffff"} />
              <span className="text-yellow joyful-font text-xl uppercase">Réserver</span>
              <CwdBottomIcon height={45} color={"#ffffff"} />
            </div>
            <div className="h-[2px] w-full bg-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
