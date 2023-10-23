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
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      type="button"
      onClick={() => {
        setSearchParams({ category: value });
      }}
      className="text-white rounded-full p-1 select-none h-fit snap-center hover:animate-[animate-angle_1s_linear_infinite]"
      style={
        searchParams.get("category") !== value
          ? {
              background:
                "linear-gradient(var(--angle), rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)",
            }
          : {
              animation: "animate-angle 1s linear infinite",
              background:
                "linear-gradient(var(--angle), rgba(58,180,148,1) 0%, rgba(29,253,73,1) 100%)",
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
