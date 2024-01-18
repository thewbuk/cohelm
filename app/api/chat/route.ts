import OpenAI from 'openai';
import { OpenAIStream, StreamingTextResponse } from 'ai';
 
// Create an OpenAI API client (that's edge friendly!)
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || '',
});
 
// Set the runtime to edge for best performance
export const runtime = 'edge';
 
export async function POST(req: Request) {
  const { messages } = await req.json();

  // Define a medical context message. This should be tailored to your specific use case.
  const medicalContext = {
    role: "system",
    content: "The following is a conversation with an AI trained in medical knowledge. It can discuss medical topics, provide information on diseases, symptoms, treatments, and medical procedures."
  };

  // Prepend the medical context to your messages
  const messagesWithContext = [medicalContext, ...messages];

  // Ask OpenAI for a streaming chat completion given the prompt with medical context
  const response = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    stream: true,
    messages: messagesWithContext,
  });

  // Convert the response into a friendly text-stream
  const stream = OpenAIStream(response);

  // Respond with the stream
  return new StreamingTextResponse(stream);
}
