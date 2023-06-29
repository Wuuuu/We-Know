"use client";

import BottomActionsDisplay from "./BottomActionsDisplay";
import TransverseLine from "./TransverseLine";

const CardType3 = () => {
  return (
    <div className="relative">
      <div className="pt-[36px] pl-[38px] h-[278px] w-[416px] bg-[url('/images/card_type_3.png')] bg-cover  transform transition duration-300 hover:translate-y-[-4px] hover:translate-x-[4px] cursor-pointer">
        <TransverseLine bgGradientType="type3" />
        <div className="mt-[29px]">
          <p className="text-[16px] text-[#EDEDED] leading-4 font-NextBook font-bold">
            Web 3.0 Programming Basics
          </p>
          <p className="my-4 py-1 px-2 w-[53px] text-[9px] leading-[110%] text-white font-NextBook rounded-[20px] border-[1px] border-[#676767]">
            Beginner
          </p>
          <section className="text-xs max-w-[336px] mb-[65px] text-[#676767] leading-[110%] font-NextBookThin ">
            Basic concepts in programming of Solidity. Topics include: variables, functions, flow
            control, error handling, data structure.
          </section>
        </div>
        <BottomActionsDisplay isCompleted={false} />
      </div>
      <div className="absolute top-0 left-0 h-[278px] w-[416px] bg-[url('/images/card_type_3_bgi.png')] bg-cover bg-center bg-no-repeat transform scale-[0.995] z-[-1]" />
    </div>
  );
};

export default CardType3;
