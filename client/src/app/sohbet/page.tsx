"use client";
import React, { useState, useEffect } from "react";
import Sidebar from "@/components/Sidebar";
import ChatBox from "@/components/ChatBox";

type Question = {
  question: string;
  context: string;
  answer: string;
};

const Home: React.FC = () => {
  const [questions, setQuestions] = useState<Question[]>([]);

  useEffect(() => {
    const savedQuestions = localStorage.getItem("questions");
    if (savedQuestions) {
      setQuestions(JSON.parse(savedQuestions));
    }
  }, []);

  const addQuestion = (question: string, answer: string, context: string) => {
    const newQuestions = [...questions, { question, answer, context }];
    setQuestions(newQuestions);
    localStorage.setItem("questions", JSON.stringify(newQuestions));
  };

  const deleteQuestion = (index: number) => {
    const newQuestions = questions.filter((_, i) => i !== index);
    setQuestions(newQuestions);
    localStorage.setItem("questions", JSON.stringify(newQuestions));
  };

  const deleteAllQuestions = () => {
    setQuestions([]);
    localStorage.removeItem("questions");
  };

  return (
    <div className="flex">
      <Sidebar
        questions={questions}
        deleteQuestion={deleteQuestion}
        deleteAllQuestions={deleteAllQuestions}
      />
      <ChatBox addQuestion={addQuestion} />
    </div>
  );
};

export default Home;
