"use client";
import { useRouter } from "next/navigation";
import React from "react";

type DetailProps = {
  subCategoryName: string;
  categoryId: string;
  id: string;
};

const Detail: React.FC<DetailProps> = ({ subCategoryName, categoryId, id }) => {
  const router = useRouter();

  const handleToPageList = () => {
    router.push(`/category-list/${categoryId}/${id}`);
  };

  return (
    <div className="m-4 p-4 rounded-xl border border-slate-50 shadow-lg cursor-pointer hover:translate-y-[-10px] transition duration-300">
      <img
        className="rounded-lg"
        src="https://img1.baidu.com/it/u=2276430475,2962226797&fm=253&fmt=auto&app=138&f=JPEG?w=740&h=500"
        alt="bgi"
        width="100%"
        height="auto"
      />
      <p className="my-3 text-xl text-center font-bold text-[#08394a]">{subCategoryName}</p>
      <div className="pt-3 flex items-center">
        <span className="block flex-1 text-xs text-slate-400">0/124题</span>
        <div
          onClick={() => handleToPageList()}
          className="w-16 h-8 leading-8 border text-sm text-center border-[#50B964] rounded-2xl text-[#50B964]"
        >
          开始
        </div>
      </div>
    </div>
  );
};

export default Detail;
