import OpenAI from "openai";

export const openai = new OpenAI({
    apiKey:import.meta.env.VITE_CHAT_GPT_API_KEY,
    dangerouslyAllowBrowser: true
});

export const getOpenAICredentials = () => {

    const model =import.meta.env.VITE_CHAT_GPT_MODEL;
    const maxTokens = Number(import.meta.env.VITE_CHAT_GPT_MAX_TOKEN);

    if (!model || !maxTokens) {
        throw new Error("Credênciais para o chat gpt estão faltando!");
    }

    return {
        model,
        maxTokens
    }

  }