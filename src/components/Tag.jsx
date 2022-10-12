import React from "react";

function Tag({ text }) {
  return (
    <span className="text-sm font-semibold border px-2 text-gray-500 transition-all hover:text-gray-900 hover:border-gray-900 cursor-pointer py-1 rounded-full">
      {text}
    </span>
  );
}

export default Tag;
