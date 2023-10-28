import { ReactNode } from "react";

const Button: React.FC<{
  children: ReactNode | string;
  onClick: React.MouseEventHandler;
}> = ({ children, onClick }) => {
  return (
    <button
      className="bg-white rounded-full px-4 py-2 text-sm font-semibold ml-4 border-2 border-black flex justify-between items-center  hover:bg-black hover:text-white transition-all"
      onClick={onClick}
    >
      {children ? children : "Button"}
    </button>
  );
};

export default Button;
