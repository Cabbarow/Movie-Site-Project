import { FaRegStar } from "react-icons/fa";

const RatingTag = ({ rating }: { rating: number }) => {
  return (
    <div className="w-[60px] h-[32px] flex gap-1 font-bold text-[#FFBD6D] m-3 py-[0.25rem] px-[0.5rem] bg-[rgba(0,0,0,0.75)] rounded-lg">
      <span className="flex items-center justify-center">
        <FaRegStar className="w-[16px] h-[16px]" />
      </span>
      <p className="w-[11px] h-[24px]">{rating.toFixed(1)}</p>
    </div>
  );
};

export default RatingTag;
