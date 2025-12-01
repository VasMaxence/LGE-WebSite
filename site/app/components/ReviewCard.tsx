import StarIcon from "./icon/StarIcon";

interface Props {
  userName: string;
  review: string;
}

const ReviewCard = ({ userName, review }: Props) => {
  return (
    <div className="flex flex-col items-start justify-start gap-y-1 bg-[#232323] w-full border-white white-shadow px-[1rem] py-[0.5rem] hover-border-yellow hover-yellow-shadow transition-all duration-300">
      <div className="flex flex-row items-center gap-x-1">
        <StarIcon width={32} height={32} color={"#fff102"} />
        <StarIcon width={32} height={32} color={"#fff102"} />
        <StarIcon width={32} height={32} color={"#fff102"} />
        <StarIcon width={32} height={32} color={"#fff102"} />
        <StarIcon width={32} height={32} color={"#fff102"} />
      </div>
      <h2 className="text-3xl text-white joyful-font font-normal text-start uppercase">{userName}</h2>
      <p className="text-white text-sm satoshi-font" dangerouslySetInnerHTML={{ __html: review }}></p>
    </div>
  );
};

export default ReviewCard;
