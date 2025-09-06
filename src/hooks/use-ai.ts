import { useChannels } from '@/hooks/use-channels';
import { getOpenAICredentials, openai } from "@/utils/open-ai";
import { useState } from "react";
import { useColaborators } from "./use-colaborators";
import { useTraces } from './use-traces';

export const useAI = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [prompt, setPrompt] = useState("");
  const [finalPrompt, setFinalPrompt] = useState("");
  const [output, setOutput] = useState("");
  const {colaborators} = useColaborators();
  const {channels} = useChannels();
  const {traces} = useTraces();

  const getOpenAIResponse = async () => {
    const utilData = `
        Pergunta: ${JSON.stringify(prompt)}
        Dados das áreas: ${JSON.stringify(channels)}
        Dados dos usuários: ${JSON.stringify(colaborators)}
        Dados dos traces: ${JSON.stringify(traces)}
       `;


    setPrompt("");

    try {
      const requestedPrompt = `
            Você é um assistente divertido, provocativo e inteligente. 
            Seu papel é conversar de forma leve e espirituosa, mas sem perder a clareza.
            
            Usuário: Leonardo Mazzuca
            Contexto atual:
            ${utilData}
            
            Instruções:
            1. Responda de forma natural, como se fosse uma conversa real com Leonardo.
            2. Traga insights baseados nos dados do mês atual, quando aplicável.
            3. Seja criativo, provocativo e espirituoso, mas mantenha sempre coerência.
            4. Nunca responda de forma robótica — a resposta deve soar humanizada e envolvente.
            
            Agora, gere uma resposta envolvente e inteligente para Leonardo.
            `;

      setIsGenerating(true);

      const { maxTokens, model } = getOpenAICredentials();

      const completion = await openai.completions.create({
        prompt: requestedPrompt,
        model: model,
        max_tokens: maxTokens,
        temperature: 0.9,
      });

      if (completion) {
        setOutput(completion.choices[0].text);
      }
    } catch (error) {
      console.log("Erro ao gerar texto com IA", error);
    } finally {
      setIsGenerating(false);
    }
  };

  const handlePrompt = async () => {
    setFinalPrompt(prompt);
    if (prompt) {
      await getOpenAIResponse();
    }
  };

  return {
    isGenerating,
    prompt,
    setPrompt,
    output,
    handlePrompt,
    finalPrompt
  };
};
