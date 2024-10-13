// @ts-ignore
import GPT4js from 'gpt4js';

const options = {
  provider: 'Nextway',
  model: 'gpt-4o-free',
};

const provider = GPT4js.createProvider(options.provider);

export const getChatResponse = async (prompt: string) => {
  const chatResponse = await provider.chatCompletion([{ role: 'user', content: prompt }], options);
  return chatResponse;
};
