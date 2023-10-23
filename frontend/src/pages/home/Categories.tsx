import React, { useEffect } from "react";
import CategoryButton from "./CategoryButton";
import { useSearchParams } from "react-router-dom";

const CATEGORIES: Parameters<typeof CategoryButton>[0][] = [
  {
    label: "All",
    value: "all",
  },
  {
    label: "React",
    value: "react",
  },
  {
    label: "Education",
    value: "education",
  },
  {
    label: "Tech",
    value: "tech",
  },
  {
    label: "Science",
    value: "science",
  },
  {
    label: "Business",
    value: "business",
  },
];

const Categories = () => {
  const [searchParams, setSearchParams] = useSearchParams({
    category: "all",
  });

  useEffect(() => {
    console.log(searchParams.get("category"));
  }, [searchParams]);

  return (
    <React.Fragment>
      <section className="w-full flex py-5 px-2 gap-3 items-center overflow-y-hidden overflow-x-auto snap-mandatory snap-x hide-scrollbar">
        {CATEGORIES.map((category) => (
          <CategoryButton key={category.value} {...category} />
        ))}
      </section>
    </React.Fragment>
  );
};

export default Categories;
