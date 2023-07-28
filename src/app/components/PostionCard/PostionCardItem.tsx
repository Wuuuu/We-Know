import { useRouter, useSearchParams } from "next/navigation";
import qs from "query-string";
import Image from "next/image";
import { useCallback } from "react";
import { Card } from "antd";
// import { IconType } from "react-icons";

interface CategoriesBoxProps {
  icon: "fe" | "be" | "test";
  label: string;
  text: string;
  selected?: boolean;
}

const CategoriesBox: React.FC<CategoriesBoxProps> = ({ icon, label, text, selected }) => {
  const router = useRouter();
  const params = useSearchParams();

  const handleClick = useCallback(() => {
    let currentQuery = {};

    if (params) {
      currentQuery = qs.parse(params.toString());
    }
    const updatedQuery: any = {
      ...currentQuery,
      position: label,
    };

    if (params?.get("position") === label) {
      Reflect.deleteProperty(updatedQuery, "position");
    }

    const url = qs.stringifyUrl(
      {
        url: "/",
        query: updatedQuery,
      },
      { skipNull: true }
    );

    router.push(url);
  }, [label, params, router]);

  return (
    // <div
    //   onClick={handleClick}
    //   className={`flex flex-col items-center justify-center gap-4 p-6 pb-2 border-b-2 hover:text-neutral-800 transition cursor-pointer
    //     ${selected ? "border-b-neutral-800" : "border-transparent"}
    //     ${selected ? "text-neutral-800" : "text-neutral-500"}
    //     `}
    // >
    <Card
      className="w-80 h-56 flex justify-center items-center hover:scale-105 transition cursor-pointer"
      onClick={handleClick}
    >
      <img
        className="w-20"
        src={`/images/${icon}.svg`}
        alt={`${icon}`}
      />
      <div className="mt-2 font-medium text-sm text-center">{text}</div>
    </Card>
  );
};

export default CategoriesBox;
