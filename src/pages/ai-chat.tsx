import ChatInput from "@/components/ai-chat/chat-input";
import PromptCard from "@/components/ai-chat/prompt-card";
import Loading from "@/components/ui/loading";
import UserButton from "@/components/ui/user-button";
import { useAI } from "@/hooks/use-ai";

const AiChat = () => {
  const prompts = [
    "Qual o crescimento de usuários ativos nos últimos 3 meses?",
    "Qual foi o quiz mais respondido este mês?",
    "Quais tópicos têm o menor desempenho dos usuários?",
    "Quantos usuários completaram todos os treinamentos obrigatórios?",
  ];

  const { handlePrompt, isGenerating, output, prompt, setPrompt, finalPrompt } =
    useAI();

  return (
    <section className="w-full flex items-center h-screen lg:p-22 p-5 justify-center flex-col">
      <div className="lg:w-[850px] w-full h-screen flex flex-col justify-between max-lg:mt-10">
        <div>
          <div className="flex mb-10 flex-col">
            <span className="text-5xl font-semibold text-blue-500">
              Olá, Leonardo!
            </span>
            <span className="text-5xl font-semibold text-gray-500">
              Como posso te ajudar hoje?
            </span>
          </div>

          <div className="flex justify-end">
            {finalPrompt && (
              <div className="my-5 dark:bg-zinc-900 bg-zinc-100 flex items-center gap-3 ms-auto p-3 rounded-xl">
                <UserButton className="w-8 h-8" />
                <p className="dark:text-white text-left font-semibold">
                  {finalPrompt}
                </p>
              </div>
            )}
          </div>

          {isGenerating ? (
            <Loading />
          ) : output ? (
            <div className="flex justify-start">
              <div className="dark:bg-zinc-700 bg-zinc-200 p-3 rounded-xl max-w-[70%]">
                <span className="font-semibold text-gray-500 dark:text-gray-200">
                  {output}
                </span>
              </div>
            </div>
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
            onButtonClick={handlePrompt}
          />
        </div>
      </div>
    </section>
  );
};

export default AiChat;
