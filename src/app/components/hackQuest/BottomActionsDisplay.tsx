"use client";

type BottomActionsDisplayProps = {
  isCompleted?: boolean;
};

const BottomActionsDisplay: React.FC<BottomActionsDisplayProps> = ({ isCompleted = true }) => {
  return (
    <div className="flex pl-[1px]">
      <div className="flex items-center">
        <img
          src="/images/clock.svg"
          alt="clock"
        />
        <span className="h-[14px] w-[65px] text-xs ml-[8px] mr-[12px] text-[#F2F2F2] font-neuemachina">
          36 Hour
        </span>
      </div>
      <div className="flex items-center">
        <img
          src="/images/book.svg"
          alt="book"
          style={{ width: 14, height: 14 }}
        />
        <span className="h-[14px] w-[87px] text-xs mx-[8px] text-[#F2F2F2] font-neuemachina">
          5 Course
        </span>
      </div>
      {isCompleted && (
        <div className="flex items-center py-[8px] px-[16px] rounded-[40px] bg-[#2A2A2A]">
          <img
            src="/images/status_completed.svg"
            alt="status_completed"
          />
          <span className="text-[10px] ml-2 text-[#9EFA13] leading-[110%] font-NextBookThin">
            45% COMPLETED
          </span>
        </div>
      )}
    </div>
  );
};

export default BottomActionsDisplay;
