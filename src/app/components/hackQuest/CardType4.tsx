"use client";

import BottomActionsDisplay from "./BottomActionsDisplay";
import TransverseLine from "./TransverseLine";

const CardType4 = () => {
  return (
    <div className="relative">
      <div className="py-5 pl-4 pr-5 h-[278px] w-[416px] rounded-[36px] bg-[#111] transform transition duration-300 hover:translate-y-[-4px] hover:translate-x-[4px] cursor-pointer">
        <div className="mt-4 ml-3">
          <TransverseLine bgGradientType="type4" />
        </div>
        <img
          className=" absolute left-4 top-5 w-[380px]"
          src="/images/card_type_4.png"
          alt="card-type4"
        />
        <p className="mt-[144px] ml-3 text-[16px] text-[#EDEDED] leading-4 font-NextBook font-bold">
          What is Bitcoin
        </p>

        <div className="absolute bottom-4 right-[70px] flex items-center">
          <img
            src="/images/clock.svg"
            alt="clock"
          />
          <span className="h-[14px] w-[65px] text-xs ml-[8px] mr-[12px] text-[#F2F2F2] font-neuemachina">
            36 Hour
          </span>
        </div>
      </div>
      <div className="absolute top-0 left-0 h-[278px] w-[416px] bg-[url('/images/card_type_4_bgi.png')] bg-cover bg-center bg-no-repeat transform scale-[0.995] z-[-1]" />
    </div>
  );
};

export default CardType4;
