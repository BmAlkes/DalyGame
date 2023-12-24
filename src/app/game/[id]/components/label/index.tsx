import React from "react";

interface LabelProps {
  category: string;
}

const Label = ({ category }: LabelProps) => {
  return (
    <div className="flex-grow sm:flex-grow-0 py-1 px-2 bg-slate-300 text-black text-center rounded-lg hover:font-bold duration-200">
      {category}
    </div>
  );
};

export default Label;
