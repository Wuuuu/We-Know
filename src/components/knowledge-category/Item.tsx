import { useRouter } from "next/navigation";
// import qs from "query-string";
// import Image from "next/image";
import { useCallback } from "react";
import { Card } from "antd";
// import { IconType } from "react-icons";

interface CategoriesBoxProps {
  id: string;
  label: string;
  text: string;
  selected?: boolean;
}

const CategoriesBox: React.FC<CategoriesBoxProps> = ({ id, label, text, selected }) => {
  const router = useRouter();

  const handleClick = useCallback(() => {
    router.push(`category-list/${id}`);
  }, [id, router]);

  return (
    <Card
      className="w-80 h-56 flex justify-center items-center hover:scale-105 transition cursor-pointer"
      onClick={handleClick}
    >
      <img
        className="w-20"
        src={`/images/${(label || "").toLocaleLowerCase()}.svg`}
        alt={label}
      />
      <div className="mt-2 font-medium text-sm text-center">{text}</div>
    </Card>
  );
};

export default CategoriesBox;
