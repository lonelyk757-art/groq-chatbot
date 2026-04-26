/**
 * Groq Chat Client
 * Handles communication with Groq API for AI chat completions
 */

const GROQ_API_KEY = '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';
const GROQ_API_URL = 'https://api.groq.com/openai/v1/chat/completions';

export interface ChatMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

export interface ChatResponse {
  content: string;
  model: string;
  usage: {
    prompt_tokens: number;
    completion_tokens: number;
    total_tokens: number;
  };
}

export async function sendChatMessage(
  messages: ChatMessage[],
  model: string = 'llama-3.3-70b-versatile'
): Promise<ChatResponse> {
  try {
    const response = await fetch(GROQ_API_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${GROQ_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model,
        messages,
        temperature: 0.7,
        max_tokens: 1024,
        top_p: 1,
        stream: false,
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error?.message || 'Failed to get response from Groq API');
    }

    const data = await response.json();
    
    return {
      content: data.choices?.[0]?.message?.content || '',
      model: data.model,
      usage: data.usage,
    };
  } catch (error) {
    console.error('Groq API Error:', error);
    throw error;
  }
}
