import { motion } from "framer-motion";
import { useSearchParams } from "react-router-dom";

interface CategoryButtonProperties {
  label: string;
  value: string;
}

const CategoryButton = ({ label, value }: CategoryButtonProperties) => {
  const [searchParams, setSearchParams] = useSearchParams({ category: "all" });

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.9 }}
      type="button"
      onClick={() => {
        setSearchParams({ category: value });
      }}
      className="text-white rounded-full p-1 select-none h-fit snap-center"
      style={
        searchParams.get("category") !== value
          ? {
              background:
                "linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)",
            }
          : {
              background:
                "linear-gradient(90deg, rgba(58,180,148,1) 0%, rgba(29,253,73,1) 100%)",
            }
      }
    >
      <div></div>
      <div className="text-inherit bg-black rounded-full px-4 py-1">
        {label}
      </div>
    </motion.button>
  );
};

export default CategoryButton;
