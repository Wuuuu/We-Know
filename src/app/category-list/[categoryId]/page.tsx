import { use } from "react";
import Container from "@/components/Container";
import qs from "query-string";
import { useRequest } from "ahooks";
import { useRouter } from "next/router";
import Image from "next/image";
import { getCategoryList } from "@/app/api/knowledgeCategory";
import Detail from "./Detail";
type CategoryListItemProps = {
  _id: string;
  categoryId: string;
  subCategoryName: string;
};

async function getData({ categoryId }: { categoryId: string }) {
  const res = await getCategoryList(categoryId);
  return res;
}

const CategoryList = ({ params }: { params: { categoryId: string } }) => {
  const { categoryId } = params;
  // const router = useRouter();
  const data = use(getData({ categoryId }));
  // const { data, run, loading } = useRequest(() => getCategoryList(categoryId), {
  //   manual: true,
  // });
  // console.log("data", data);

  // useEffect(() => {
  //   run();
  // }, [run]);

  return (
    <Container>
      <div className="mt-7 p-8 bg-white border-solid border-2 rounded-3xl border-[#08394A]">
        <div className="flex flex-wrap justify-between">
          {data?.map(({ categoryId, _id, subCategoryName }: CategoryListItemProps) => (
            <div
              key={_id}
              className="w-1/5 md:w-1/4 overflow-hidden"
            >
              <Detail
                id={_id}
                subCategoryName={subCategoryName}
                categoryId={categoryId}
              />
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default CategoryList;
