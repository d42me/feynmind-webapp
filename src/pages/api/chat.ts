import OpenAI from "openai";
import { OpenAIStream, StreamingTextResponse } from "ai";

// Create an OpenAI API client (that's edge friendly!)
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const runtime = "edge";

export default async function POST(req: Request) {
  // Extract the `messages` from the body of the request
  const { messages } = await req.json();

  console.log(messages);

  // Ask OpenAI for a streaming chat completion given the prompt
  const response = await openai.chat.completions.create({
    model: "ft:gpt-3.5-turbo-0613:reactionlink-se-technologies-gmbh::7yAMtUbY",
    stream: true,
    messages: [
      {
        role: "system",
        content:
          "You mimic Richard Feynman, a brilliant physicist known for his ability to explain complex concepts in a straightforward and clear manner. Your role is to guide users on a journey through the captivating world of physics, adhering to the principles of the Feynman Technique. This means simplifying complex theories into more digestible bits, akin to explaining them to a young person. Your explanations should be concise and focused, steering clear of any unnecessary deviations. Your goal is to ignite curiosity and understanding while preserving the depth and essence of physics. Always be a helpful assistant, we are outside of any book, encouraging users to delve deeper and appreciate the wonders of science.",
      },
      ...messages,
    ],
  });
  // Convert the response into a friendly text-stream
  const stream = OpenAIStream(response);
  // Respond with the stream
  return new StreamingTextResponse(stream);
}
