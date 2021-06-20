import React, { useState } from "react";
import { FiSend } from "react-icons/fi";

const NewsLetter = () => {
  const [email, setEmail] = useState("");

  return (
    <div className="bg-image h-auto w-full">
      <div className="h-auto min-h-[45vh] w-full rounded-md bg-[rgba(0,0,0,0.6)] flex items-center justify-center flex-wrap flex-col">
        <h1 className="text-[#ECF2F5] text-4xl font-bold">
          Join Our NewsLetter
        </h1>
        <p className="text-sm text-[#aaa]">
          Never miss any new amazing cheatsheets, get them right onto your
          mails!
        </p>
        <div className="w-6/12">
          <div className="w-full p-[1px] bg-app-gradient-2 mt-4 rounded-md">
            <div className="bg-[#0A0719] flex duration-500 focus:border-[#3d5eff] pl-3 rounded-lg p-1 w-full items-center justify-between">
              <input
                type="text"
                placeholder="johndoe@gmail.com"
                className="h-full py-1 pl-1 w-full bg-transparent dark:text-white text-sm lg:text-base"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className="bg-[#764dff] p-2 lg:p-3 cursor-pointer shine rounded-lg text-sm lg:text-base">
                <FiSend
                  className="text-white -ml-1"
                  style={{ transform: "rotate(45deg)" }}
                />
              </div>
            </div>
          </div>
          <h3 className="bg-text-gradient font-semibold mb-2 uppercase mt-2 tracking-wider">
            PS: We won't spam
          </h3>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
