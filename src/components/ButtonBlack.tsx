import { ReactNode } from "react";

const ButtonBlack: React.FC<{
  children: ReactNode | string;
  onClick: React.MouseEventHandler;
}> = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-black text-white rounded-full px-4 py-2 font-semibold border-2 border-black text-xs hover:bg-white hover:text-black transition-all "
    >
      {children ? children : "Button"}
    </button>
  );
};

export default ButtonBlack;
