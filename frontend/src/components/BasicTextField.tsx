import { useField } from "formik";
import { AnimatePresence, motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

interface BasicTextFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  name: string;
  required?: boolean;
}

const BasicTextField = ({ ...props }: BasicTextFieldProps) => {
  const { name, label, required } = props;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [field, meta, _] = useField(name);

  const { touched, error } = meta;

  return (
    <div className="flex flex-col gap-1">
      <label className="text-inherit" htmlFor={`${name}-input`}>
        {label}
        {required ? "*" : ""}
      </label>
      <input
        id={`${name}-input`}
        className={twMerge(
          props.className,
          "w-full rounded-none px-3 py-3 placeholder:text-gray-500 text-black outline-none ring-2 ring-black focus:ring-blue-500"
        )}
        type={props.type}
        {...props}
        {...field}
      />
      <AnimatePresence>
        {touched && error && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="text-base text-red-600"
          >
            {error}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BasicTextField;
