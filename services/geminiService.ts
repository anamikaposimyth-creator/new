
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

const SYSTEM_INSTRUCTION = `You are the Nexus Digital AI Consultant. 
Nexus Digital is a top-tier digital transformation firm specializing in:
1. Strategy Consulting: Long-term business planning.
2. Cloud Infrastructure: AWS, Azure, and Google Cloud optimization.
3. AI Integration: Building custom LLM tools and data pipelines.
4. User Experience: High-end UI/UX design.

Be professional, concise, and helpful. Guide users to our contact page if they need a deeper consultation.`;

export const getAIResponse = async (prompt: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm sorry, I'm having trouble connecting right now. Please try again or visit our contact page.";
  }
};
