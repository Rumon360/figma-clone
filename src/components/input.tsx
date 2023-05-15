import { FC } from "react";

interface inputProps {
  type: string;
  name: string;
  placeholder: string;
  id: string;
  autoComplete: string;
}

const Input: FC<inputProps> = (props) => {
  const { autoComplete, id, name, placeholder, type } = props;
  return (
    <input
      className="border-[3px] block w-full text-[1.6rem] bg-white border-black focus:border-[#5551ff] p-[1.2rem] rounded-[0.5rem] h-[5rem] leading-normal"
      name={name}
      placeholder={placeholder}
      type={type}
      id={id}
      autoComplete={autoComplete}
      autoCapitalize="off"
      autoCorrect="off"
      dir="auto"
    />
  );
};

export default Input;
