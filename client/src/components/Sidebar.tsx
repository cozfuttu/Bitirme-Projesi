import React, { useState } from "react";
import ChevronLeftIcon from "@/assets/icons/ChevronLeftIcon";
import TrashIcon from "@/assets/icons/TrashIcon";

type Question = {
  question: string;
  context: string;
  answer: string;
};

type SidebarProps = {
  questions: Question[];
  deleteQuestion: (index: number) => void;
  deleteAllQuestions: () => void;
};

const Sidebar: React.FC<SidebarProps> = ({
  questions,
  deleteQuestion,
  deleteAllQuestions,
}) => {
  const [toggleCollapse, setToggleCollapse] = useState(true);
  const [sidebarRender, setSidebarRender] = useState(true);

  const handleSidebarToggle = () => {
    setToggleCollapse(!toggleCollapse);
    toggleCollapse
      ? setTimeout(() => setSidebarRender((prev) => !prev), 420)
      : setTimeout(() => setSidebarRender((prev) => !prev), 250);
  };
  return (
    <aside
      className={`relative flex h-full flex-col justify-between bg-[#04052e]/5 backdrop-blur-[100px] max-sm:absolute ${toggleCollapse ? "w-0" : "w-72"}`}
      style={{ transition: "width 500ms cubic-bezier(.8,.2,.8,.7) 0s " }}
    >
      {!sidebarRender && (
        <div className="flex max-h-screen w-full flex-col gap-4 overflow-auto overflow-y-auto p-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold">History</h2>
            <button
              className="flex w-fit items-center gap-2 rounded bg-red-600 p-2 text-white"
              onClick={deleteAllQuestions}
            >
              Delete All <TrashIcon className="size-4" />
            </button>
          </div>
          <ul>
            {questions.map((q, index) => (
              <li
                key={index}
                className="border-b border-b-[#04052e]/50 py-3 last:border-none"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold">Soru: {q.question}</p>
                    <p className="text-gray-600">Context: {q.context}</p>
                    <p className="text-gray-600">Cevap: {q.answer}</p>
                  </div>
                  <button
                    className="ml-2 rounded bg-red-500 p-2 text-white"
                    onClick={() => deleteQuestion(index)}
                  >
                    <TrashIcon className="size-4" />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
      <button
        className={`absolute -right-6 top-[46%] rounded-r-full bg-[#04052e]/5 py-4`}
        onClick={handleSidebarToggle}
      >
        <ChevronLeftIcon
          className={`text-[#04052e] ${toggleCollapse ? "rotate-180" : ""}`}
        />
      </button>
    </aside>
  );
};

export default Sidebar;
