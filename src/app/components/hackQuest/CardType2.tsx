"use client";

import BottomActionsDisplay from "./BottomActionsDisplay";

const CardType2 = () => {
  return (
    <div className="relative">
      <div className="absolute top-0 left-0 pt-[36px] px-[40px] h-[278px] w-[416px] smoothing-none bg-[url('/images/card_type_2.png')] bg-contain z-40 transform transition duration-300 hover:translate-y-[-4px] hover:translate-x-[4px] cursor-pointer">
        <div>
          <p className="text-[16px] text-[#EDEDED] leading-4 font-NextBook font-bold">
            Moonshot 2023 Summer Hackathon
          </p>
          <div className="flex items-center">
            <p className="my-4 mr-4 py-1 px-2 text-[9px] leading-[110%] text-white font-NextBook rounded-[20px] border-[1px] border-[#676767]">
              All Tracks
            </p>
            <p className="my-4 mr-4 py-1 px-2 text-[9px] leading-[110%] text-white font-NextBook rounded-[20px] border-[1px] border-[#676767]">
              Solidity
            </p>
            <p className="my-4 mr-4 py-1 px-2 text-[9px] leading-[110%] text-white font-NextBook rounded-[20px] border-[1px] border-[#676767]">
              ZK
            </p>
          </div>
        </div>
        <div className="mt-[48px]">
          <div className="flex items-center justify-between mb-3 leading-[110%] border-b-[1px] border-[#282828]">
            <span className="text-[#676767] font-NextBookThin text-xs">Signup</span>
            <span className=" font-neuemachina text-sm text-[#EDEDED]">4/15 - 6/15</span>
          </div>

          <div className="flex items-center justify-between mb-3 leading-[110%] border-b-[1px] border-[#282828]">
            <span className="text-[#676767] font-NextBookThin text-xs">Event</span>
            <span className=" font-neuemachina text-sm text-[#EDEDED]">6/15 - 7/15</span>
          </div>

          <div className="flex items-center justify-between mb-3 leading-[110%] border-b-[1px] border-[#282828]">
            <span className="text-[#676767] font-NextBookThin text-xs">Grant size</span>
            <span className=" font-neuemachina text-sm text-[#EDEDED]">200K</span>
          </div>
        </div>
      </div>
      <div className="absolute top-0 left-0 h-[278px] w-[416px] bg-[url('/images/card_type_2_bgi.png')] bg-cover bg-center bg-no-repeat transform scale-[0.995] z-[-1]" />
    </div>
  );
};

export default CardType2;
