import React from "react";
import { Clipboard } from "flowbite-react";
import TypewriterEffect from "@/lib/TypewriterEffect";

const GenerateContentCard = ({ type, responseText }) => {
  const hasResponse = responseText && responseText.trim() !== "";

  return (
    <div className="w-full h-full bg-black-5 rounded-md overflow-hidden transition duration-30">
      <div className="p-4">
        <div className="flex items-center justify-between mb-5">
          <h1 className="text-white font-quicksand text-2xl font-semibold">
            {type}
          </h1>
          <div className="relative">
            <Clipboard.WithIconText valueToCopy={responseText} />
          </div>
        </div>

        <div>
          <div className="text-slate-100 text-md typerwriterDiv">
            {hasResponse ? (
              <TypewriterEffect text={responseText} speed={50} />
            ) : (
              <span>No content generated yet.</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenerateContentCard;
