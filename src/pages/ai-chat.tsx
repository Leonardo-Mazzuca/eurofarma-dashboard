import ChatInput from "@/components/ai-chat/chat-input";
import PromptCard from "@/components/ai-chat/prompt-card";
import { useEffect, useState } from "react";

const AiChat = () => {

  const prompts = [
    "Qual o crescimento de usuários ativos nos últimos 3 meses?",
    "Qual foi o quiz mais respondido este mês?",
    "Quais tópicos têm o menor desempenho dos usuários?",
    "Quantos usuários completaram todos os treinamentos obrigatórios?",
  ];

  const [prompt, setPrompt] = useState("");
  const [finalPrompt, setFinalPrompt] = useState("");

  const handlePromptClick = (prompt: string) => {
    setFinalPrompt(prompt);
  }

  useEffect(()=> {
    if(!prompt){
      setFinalPrompt("");
    }
  },[prompt])

  return (
    <section className="w-full flex items-center h-screen lg:p-22 p-5 justify-center flex-col">
      <div className="lg:w-[850px] w-full h-screen flex flex-col justify-between max-lg:mt-10">
        <div>
          <div className="flex flex-col">
            <span className="text-5xl font-semibold text-blue-500">
              Olá, Livia
            </span>
            <span className="text-5xl font-semibold text-gray-500">
              Como posso te ajudar hoje?
            </span>
          </div>
          {finalPrompt ? (
            <span>
              {finalPrompt}
            </span>
          ) : (
            <div className="mt-5 flex-wrap flex gap-3 items-center">
              {prompts.map((prompt, index) => (
                <PromptCard key={index} prompt={prompt} />
              ))}
            </div>
          )}
        </div>
        <div className="lg:w-[500px] w-full mx-auto">
          <ChatInput 
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            onButtonClick={() => handlePromptClick(prompt)}
          />
        </div>
      </div>
    </section>
  );
};

export default AiChat;
